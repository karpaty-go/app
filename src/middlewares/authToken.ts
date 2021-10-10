const jwt = require('jsonwebtoken');
const {SALT_JWT}= require('../config')
import { UNAUTHORIZED_USER } from "../constants";

export default (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        req.isAuth = false;
        // return next();
        return res.status(UNAUTHORIZED_USER).send('Unauthorized user')
    }
    const token = authHeader.split(' ')[1];
    if (!token || token === '') {
        req.isAuth = false;
        // return next();
        return res.status(UNAUTHORIZED_USER).send('Unauthorized user')
    }
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, SALT_JWT);
    } catch (err) {
        req.isAuth = false;
        // return next();
        return res.status(UNAUTHORIZED_USER).send('Unauthorized user')
    }
    if (!decodedToken) {
        req.isAuth = false;
        // return next();
        return res.status(UNAUTHORIZED_USER).send('Unauthorized user')
    } else {
        req.isAuth = true;
        next();
    }
};
