import { Document, Model } from 'mongoose'
import { ObjectID } from 'bson'
import {ISearchExpression, ISearchCondition} from './general'

export interface IArticle {
    author: ObjectID
    title: string
    image: string
    type: 'article' | 'itinerary'
    content:IArticleContent
    comments:IArticleComment[]
    likes: [ObjectID]
    is_disabled: boolean
}

export interface IArticleComment{
    author: ObjectID
    text:string
    created_at: Date

}

export interface ISearchArticleQuery{
    limit: number
    page: number
    type: string
    reg_exp: string
}

export interface IArticleContent{
    type:'text' | 'photo' /*text | photo */
    value:string /*photo link or paragraph text <::[picture:<(link)>]::>*/
    order:number /**for ordering into article */
}

export interface ISearchRequest{
    is_disabled:ISearchExpression
    type?: string
    title?: ISearchExpression
    $or?: ISearchCondition[]
    // [name: string]: string
}

export interface IArticleDocument extends IArticle, Document {

}

export interface IArticleModel extends Model<IArticleDocument> {

    getById(_id: string): Promise<IArticle>

    createNew(data: IArticle)

    findArticles(query:ISearchArticleQuery): Promise<IArticle[]>
}