import { Document, Model, Types } from 'mongoose'

export interface IUser {
    name: string
    avatar:IUserAvatar[]
    birth_date:Date,
    email:string,
    password:string,
    city:string,
    about:string,
    roles:string[]
}

export interface IUserAvatar{
    link:string
    is_active:boolean
}

export interface IUserDocument extends IUser, Document {

}

export interface ICreateUserData {
    email: string
    password: string
}

export interface IUserModel extends Model<IUserDocument> {
    createNew(data: ICreateUserData)
    findByEmail(email: string)
}

