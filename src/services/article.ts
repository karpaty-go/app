import Article from '../models/article'
import {UNAUTHORIZED_USER} from '../constants'
import { ISearchArticleQuery, IArticle } from 'src/interfaces/models/article'

export class ArticleService{
    static createArticle = async (body: IArticle) => {
            const result = await Article.createNew(body)
            return result
    }

    static getArticles = async (query: ISearchArticleQuery) =>{
        const result  = await Article.findArticles(query)
        return result
    }

    static getById = async (_id: string) => {
            const result = await Article.getById(_id)
            return result
    }
}
