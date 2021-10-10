import React, { useState, useEffect } from 'react'
import {useStyles} from './style'
import {useHistory, useParams} from 'react-router-dom'
import { getRequest } from '../../../tools/api'
import {getFullArticleURL} from '../../../constants'
import { Container } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Paper } from '@material-ui/core'


const useDataUpload = (url) => {
    const [data, setData] = useState('')
    useEffect(()=>{
        const fetchData = async () => {
            const result = await getRequest(url)
            setData(result)
        }
        if(url) fetchData()
    },[url])
    
    return data
}

// const [address, query] = 'some url/url?one=&two=undefined&three=null'.split('?')
// if(query){
    //     const queryItems = query.split('&')
    // }
    
    
    const FullDescriptionArticle = (props) =>{
        const classes = useStyles()
        const {articleId} = useParams()
        const [url, setUrl] = useState('')
        const article = useDataUpload(url)

        useEffect(()=>{
            if(articleId) {
                const uri = getFullArticleURL(articleId)
                setUrl(uri)
            }

        },[articleId])

    return(
        article ? <ArticleDescription article = {article}/> : null
    )

}

const ArticleDescription = ({article}) => {
    const classes  = useStyles()
    const {title, image} = article

    return(
        <React.Fragment>
            <Paper className={classes.mainImage} style={{ backgroundImage: `url(${image})` }}/>
            <Container className={classes.container}>
                <Typography>{title}</Typography>
            </Container>
        </React.Fragment>

    )
}

export default FullDescriptionArticle