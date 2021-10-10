import React, {useState} from 'react'
import { Box,Button, Paper, Avatar } from '@material-ui/core'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import Compressor from 'compressorjs';
import TextField from '@material-ui/core/TextField'
import {useSelector} from 'react-redux'

const CREATE_ARTICLE_TITLE = 'Coздайте заголовок'
const ARTICLE_TITLE_FONT_SIZE = '50px'

const CreateArticle = (props) => {
    return(<React.Fragment>
      <TextInput
        placeholder = {CREATE_ARTICLE_TITLE}
        fontSize = {ARTICLE_TITLE_FONT_SIZE}
      />
<PhotoInput/>
    </React.Fragment>)
}

export default CreateArticle

const PhotoInput = (props) => {
    const {mainPhoto, setMainPhoto} = props
    const token = useSelector(state => state.authenticationData.token)
    const [image, setImage] = useState('')

    const uploadPhotoHandler = (e) => {
        const image = e.target.files[0]
        new Compressor(image, {
            quality: 0.8, // 0.6 can also be used, but its not recommended to go below.
            width:1280,
            success: async(compressedResult) => {
              const formData = new FormData()
              formData.append('picture',compressedResult)
              const responce = await fetch('http://localhost:5000/images/upload-article-image', {
                headers:{
                  "Authorization": "Bearer " + token
                },
                method: "POST",

                body: formData
            })

            const link = await responce.json()

            setImage(link)

    }})}

    return(!image ? <Box alignItems='center' display='flex' justifyContent='center' flexDirection='column'>
    <Box>
      <input id="upload-photo" accept="image/*" type='file' hidden onChange = {uploadPhotoHandler} />
      <label htmlFor="upload-photo">
        <Button component="span" >
          <Paper elevation={5}>
            {<AddAPhotoIcon style = {{fontSize: '70px', color:'primary', backgroundColor:'red'}}/>}
          </Paper>
        </Button>
      </label>
    </Box>
  </Box> : <img src = {image} alt = '...'/>)
}


const TextInput = (props) => {
  const {value, changHandler, placeholder, fontSize} = props
  return(
    <TextField
          placeholder= {placeholder}
          multiline
          InputProps={{ disableUnderline: true, style: {fontSize} }}
          style={{
            maxWidth: "100vw", 
            width:'100%'
          }}
        /> 
  )
}