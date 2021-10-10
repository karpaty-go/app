import actionPromise from '../action-promise'
import { getGetArticlesURL } from '../../../constants/url'

export const findArticles = (data) =>{
    const url = getGetArticlesURL(data)
    const promise = fetch(url)
    return actionPromise('articles', promise)
}