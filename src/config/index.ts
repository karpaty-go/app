export const PORT = process.env.PORT || 5000
export const DATABASE_URL = process.env.DATABASE_URL || `mongodb://localhost:27017/karpaty-go`
// export const SALT = 'dS#reFD::;D**`$$$&67%vfd09fd8DDDDDVFD'
export const SALT_BCRYPT = process.env.SALT_BCRYPT || 10;
export const SALT_JWT = process.env.SALT_JWT || 'SA;`sd737$23*^^#`Kksa|HH`H98|990||'

// cloudinary
export const CLOUD_NAME = process.env.CLOUD_NAME || 'karpaty-go'
export const API_KEY = process.env.API_KEY || '422853368917487' 
export const API_SECRET = process.env.API_SECRET || '9TJ19YO-3M0ihWCkGhNbc1Y51YE'