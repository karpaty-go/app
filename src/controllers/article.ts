import Article from '../models/article'
import {UNAUTHORIZED_USER, ERROR_WITH_DB_CONNECTION, INTERNAL_SERVER_ERROR, MISSING_QUERY_PARAMS, FORBIDDEN} from '../constants'
import { ArticleService } from '../services'

class ArticleControllers{
    static createArticle = async (req,res) => {
        const body = req?.body
        const isAuth = req?.isAuth
        if(isAuth){
            const result = await ArticleService.createArticle(body)
            res.send(result)
            return
        }
        res.status(UNAUTHORIZED_USER)
    }

    static getArticles = async (req, res) =>{
        const result  = await ArticleService.getArticles(req.query)
        if(result) res.send(result)
        else res.status(INTERNAL_SERVER_ERROR).send(ERROR_WITH_DB_CONNECTION)
    }

    static getById = async (req, res) => {
        const {_id} = req.query
        if(_id){
            const result = await Article.getById(_id)
            res.send(result)
            return
        }
        res.status(FORBIDDEN).send(MISSING_QUERY_PARAMS)
    }
}

export default ArticleControllers