export const parseUrlQuery = (query) => {
    const result = {}
    if(query){
        const queryString = query.slice(1) /**get rid of first character "?" */
        const subqueries = queryString.split('&') /*get array of subqueries "property=value" */
        subqueries.forEach(i => {
            if(i?.length){
                const [key,value] = i.split('=')
                result[key] = value
            }
        })
        return result
    }
    return result
}