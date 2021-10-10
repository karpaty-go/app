const { Router } = require("express");
const router = Router();
import AuthenticationControllers from '../controllers/auth'

const LOG_IN = '/log-in'
const SIGN_UP = '/sign-up'


router.post(LOG_IN,AuthenticationControllers.logIn)

router.post(SIGN_UP,AuthenticationControllers.signUp)

export default router