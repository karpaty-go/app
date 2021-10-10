import {useState, useEffect} from 'react'
import { parseUrlQuery } from '../tools'

export const useSearchQueryParameter = (parameterName, query) => {
    const [value, setValue] = useState('')
    useEffect(()=>{
        const queryObject = parseUrlQuery(query)
        const queryValue = queryObject[parameterName]
        setValue(queryValue || '')
    },[parameterName, query])
    return [value, setValue]
}