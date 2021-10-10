import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import {NAVIGATION} from '../../../constants/navigation'
import { EMAIL, PASSWORD, REGISTER_TYPE, LOG_IN_TYPE, ACCES_DENIED_TO} from '../../../constants';
import { useFormik } from "formik";
import { validationSchema } from './validation-schema';
import {useStyles } from './styles'
import { loginOrRegisterUser} from '../../../functions/authorization-page';
import {connect} from 'react-redux'
import mapDispatchToProps from '../../../redux/map-dispatch-to-props';
import {useHistory} from 'react-router-dom'

const AuthPage = (props) => {
  const {setUserCredentials} = props
  const {SIGN_UP, LOG_IN} = NAVIGATION
  const classes = useStyles();
  const history = useHistory()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema
  });

  const [disabled, setDisabled] = useState(false)

  useEffect(()=>{
    if(!Boolean(formik.errors.email) && !Boolean(formik.errors.password) && formik.values.email && formik.values.password) setDisabled(false)
    else setDisabled(true)
  },[formik.errors.email, formik.errors.password, formik.values.email, formik.values.password])

  const submitHandler = async (type) =>{
    const email = formik.values.email 
    const password = formik.values.password
    const emailErrors = Boolean(formik.errors.email)
    const passwordErrors = Boolean(formik.errors.password)
    if(!emailErrors && !passwordErrors && password && email){
      const {values: formBody} = formik
      const loginData = await loginOrRegisterUser(type, formBody)
      if(loginData){
        setUserCredentials(loginData)
        const userId = loginData._id
          const previousPath = sessionStorage.getItem(ACCES_DENIED_TO) || '/'
          const redirectToPreviousPage = previousPath?.replace(':id',userId)
          const redirectToAccount = `/profile?userId=${userId}`
          const path = (type === LOG_IN_TYPE) ? redirectToPreviousPage : redirectToAccount
        
        history.push(path)
      }
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <TextField
            name = 'email'
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label={EMAIL}
            autoFocus
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            name = 'password'
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label={PASSWORD}
            // type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color='primary'
            className={classes.submit}
            onClick = {()=>submitHandler(LOG_IN_TYPE)}
            disabled = {disabled}
          >
            {LOG_IN}
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color='primary'
            className={`${classes.submit} ${classes.register}`}
            onClick = {() =>submitHandler(REGISTER_TYPE)}
            disabled = {disabled}
          >
            {SIGN_UP}
          </Button>
        </form>
      </div>
    </Container>
  );
}

const AuthorizationPage = connect(null, mapDispatchToProps("AuthPage"))(AuthPage);
export default AuthorizationPage