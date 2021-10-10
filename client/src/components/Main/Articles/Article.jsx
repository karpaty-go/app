import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import {API, CARD_IMAGES} from '../../../constants/api'
import {useStyles } from './style'
import { useHistory } from 'react-router';


const Article = ({data}) =>{
 const classes = useStyles()
 const history = useHistory()
  const {image, title, _id} = data

  const openArticleHandler = () => {
    history.push(`/read-article/${_id}`)
  }
  return (
  <Grid item xs={12} sm={6} md={4}>
  <Card className={classes.card} onClick = {openArticleHandler}>
    <CardMedia
      className={classes.cardMedia}
      // images solution
      // https://stackoverflow.com/questions/15557392/how-do-i-display-images-from-google-drive-on-a-website
      // image={image}
      image={'https://drive.google.com/uc?export=view&id=18g47OijUV8pgwYKpETEk8hfye7Z0n9WR'}
      // src = {image}
      src = {'https://drive.google.com/uc?export=view&id=18g47OijUV8pgwYKpETEk8hfye7Z0n9WR'}
      title="Image title"
    />
    <CardContent className={classes.cardContent}>
      <Typography gutterBottom variant="h5" component="h2" className = {classes.cardDescription}>
        {title}
      </Typography>
    </CardContent>
  </Card>
</Grid>
)}

export default Article