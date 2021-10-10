import User from '../models/user'
import jwt from 'jsonwebtoken'
const bcrypt = require('bcrypt');
import {SALT_BCRYPT, SALT_JWT } from '../config'
import { ERROR_WITH_DB_CONNECTION, WRONG_EMAIL, WRONG_PASSWORD, EMAIL_IS_NOT_AVAILABLE } from '../constants';

export class AuthenticationService {
    static logIn = async(email: string, password: string)=>{
            const user = await User.findByEmail(email)
            if(user){
                const {password: password_hash, ...data_for_token} = user
                const is_user = await bcrypt.compare(password, password_hash)
                if(is_user){
                    const token = jwt.sign(data_for_token, SALT_JWT)
                    return JSON.stringify(token)
                }
                return new Error(WRONG_PASSWORD)
            }
            return new Error(WRONG_EMAIL)
        }

    static signUp = async(email: string, password: string)=>{
            const is_email_available = !await User.findByEmail(email)
            if(is_email_available){
                const hash_password: string = await bcrypt.hash(password, SALT_BCRYPT)
                const body = {
                    email,
                    password: hash_password,
                }
                const user = await User.createNew(body)
                if(user){
                    const {password, ...user_info} = user._doc
                    const token = jwt.sign(user_info, SALT_JWT)
                    return JSON.stringify(token)
                }                    
                    
                    return new Error(ERROR_WITH_DB_CONNECTION)

            }
            return new Error(EMAIL_IS_NOT_AVAILABLE)
        }
        
    }
