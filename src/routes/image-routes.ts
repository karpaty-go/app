import ImageControllers from '../controllers/image'
import authToken from '../middlewares/authToken';
import { uploadImage } from '../middlewares/image'
import {ARTICLE_IMAGE, ARTICLE_IMAGE_FILE_NAME} from '../constants'
const { Router } = require("express");
const router = Router();


const UPLOAD_ARTICLE_IMAGE = '/upload-article-image'

router.post(UPLOAD_ARTICLE_IMAGE, authToken, uploadImage(ARTICLE_IMAGE, ARTICLE_IMAGE_FILE_NAME),ImageControllers.uploadArticleImage)



export default router