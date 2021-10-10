import {API} from './api'
const checkIsTrue = (value) => value ? value : ''

export const getGetArticlesURL = (data) => {
const {page, limit, regExp, type} = data
    return `${API}/article/get-all-active?page=${page}&limit=${limit}&reg_exp=${checkIsTrue(regExp)}&type=${checkIsTrue(type)}`
}

export const getLogInURL = () => `${API}/auth/log-in`
export const getSignUpURL = () => `${API}/auth/sign-up`
export const getFullArticleURL = (id) => `${API}/article/get-article?_id=${id}`