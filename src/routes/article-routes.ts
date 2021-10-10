const { Router } = require("express");
const router = Router();
import ArticleControllers from '../controllers/article'

const GET_ARTICLES = '/get-all-active'
const GET_ARTICLE = '/get-article'

router.get(GET_ARTICLES, ArticleControllers.getArticles)

router.get(GET_ARTICLE, ArticleControllers.getById)

router.get('/set-article',async(req,res)=>{
    res.send('hello world >>>>>>>>>>>article>>>>>>>>>>>>>> ')
})


export default router