export interface ISearchExpression{
    [property: string]: boolean | string | RegExp
}

export interface  ISearchCondition{
    [property: string]: ISearchExpression | string
}