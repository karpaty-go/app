import {model,Schema } from 'mongoose'
import {IArticle, IArticleDocument, IArticleModel, ISearchArticleQuery, ISearchRequest } from '../interfaces/models/article'

const schema = new Schema({
    author: {type: Schema.Types.ObjectId},
    title: {type: Schema.Types.String},
    image: {type: Schema.Types.String},
    type:{type: Schema.Types.String},
    content:{
        type:{type: Schema.Types.String},
        value:{type: Schema.Types.String},
        order:{type:Schema.Types.Number}
    },
    comments:[{
        author: {type: Schema.Types.ObjectId},
        text:{type: Schema.Types.String},
        created_at: {type: Schema.Types.Date}
    }],
    likes: [{type: Schema.Types.ObjectId}], /**liker id */
    is_disabled: {type: Schema.Types.Boolean}
})

schema.statics.createNew = async function(data){
    data.comments = []
    data.likes = []
    const result = await this.create(data)
}
// 
schema.statics.findArticles = async function findArticles(query:ISearchArticleQuery){
    const {limit, page, type, reg_exp: $regex} = query
    const skip = limit * page || 0
    const search_request:ISearchRequest = {
        is_disabled:{$ne: true},
        // title:{$regex:/good/}
    }
    if(type) search_request.type = type
    if($regex){
        search_request.$or = [
                {title: {$regex: $regex}},
                {
                    "content.type": 'text',
                    "content.value": {$regex: $regex}
                }
            ]
        
        // search_request.title = {$regex: $regex}
        // search_request.content.type = 'text'
        // search_request.content.value = {$regex: $regex}
    }

    const pagination = {
        skip, limit: +limit
    }

    const [articles, quantity] = await Promise.all([
        this.find(search_request,{title: 1, image:1},pagination).lean(),
        this.find(search_request,{title: 1, image:1},{skip}).countDocuments()
    ])
    const result = { articles, quantity}
    return result
}

schema.statics.getById = async function(_id){
    const article = await this.findOne({_id}).lean()
    return article
}


export const Article: IArticleModel = model<IArticleDocument, IArticleModel>('articles', schema)
export default Article
export {
    IArticle,
    IArticleDocument
}
