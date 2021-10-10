import { AuthenticationService }from '../services';
import { ERROR_WITH_DB_CONNECTION, WRONG_EMAIL, WRONG_PASSWORD, UNAUTHORIZED_USER, FORBIDDEN, INTERNAL_SERVER_ERROR, EMAIL_IS_NOT_AVAILABLE } from '../constants';

export default class Authentication {
    static logIn = async(req,res)=>{
        const email = req?.body?.email
        const password = req?.body?.password
        if(email && password){
            const result = await AuthenticationService.logIn(email, password)
            if(result instanceof Error){
                sendAuthenticationErrorResponce(res, result.message)
                return
            }else{
                res.send(result)
                return
            }
        }
        res.send('Missing body params')
        return
    }

    static signUp = async(req, res)=>{
        const email = req?.body?.email
        const password = req?.body?.password
        if(email && password){
            const result = await AuthenticationService.signUp(email,password)
            if(result instanceof Error){
                sendAuthenticationErrorResponce(res, result.message)
                return
            }else{
                res.send(result)
                return
            }
            // const is_email_available = !await User.findByEmail(email)
            // if(is_email_available){
            //     const hash_password: string = await bcrypt.hash(password, SALT_BCRYPT)
            //     const body = {
            //         email,
            //         password: hash_password,
            //     }
            //     const user = await User.createNew(body)
            //     if(user){
            //         const {password, ...user_info} = user._doc
            //         const token = jwt.sign(user_info, SALT_JWT)
            //         res.send(JSON.stringify(token))
            //         return
            //     }                    
            //         res.send('User wasn`t created')
            //         return

            // }
            // res.send('Email is not available')
            // return
        }
        res.send('error responce')
        
    }
    
}


const sendAuthenticationErrorResponce = (res, message: string) => {
    switch(message){
        case (WRONG_EMAIL || WRONG_PASSWORD):
            res.status(UNAUTHORIZED_USER).send(JSON.stringify(message))
            break;
        case (ERROR_WITH_DB_CONNECTION):
            res.status(INTERNAL_SERVER_ERROR).send(message)
            break;
        case (EMAIL_IS_NOT_AVAILABLE):
            res.status(FORBIDDEN).send(message)
            break
    }
}