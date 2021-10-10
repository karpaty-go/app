import {model,Schema } from 'mongoose'
import {IUser, IUserDocument, IUserModel, ICreateUserData } from '../interfaces/models/user'

const schema = new Schema({
    name: {type: Schema.Types.String},
    avatar:[{
        link:{type: Schema.Types.String},
        is_active:{type: Schema.Types.Boolean}
    }],
    birth_date:{type: Schema.Types.Date},
    email:{type: Schema.Types.String},
    password:{type: Schema.Types.String},
    city:{type: Schema.Types.String},
    about:{type: Schema.Types.String},
    roles:[{type: Schema.Types.String, default: []}]
})

schema.statics.createNew = async function(data: ICreateUserData){
    const user = await this.create(data)
    return user
}

schema.statics.findByEmail = async function(email: string){
    const user = await this.findOne({email},{email:1, _id:1, roles: 1, password:1}).lean()
    return user
}

export const User: IUserModel = model<IUserDocument, IUserModel>('users', schema)
export default User
export {
    IUser,
    IUserDocument
}