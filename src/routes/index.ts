import authRoutes from './auth-routes'
import articleRoutes from './article-routes'
import imageRoutes from './image-routes'

export default (app)=>{
    app.use('/auth',authRoutes)
    app.use('/article',articleRoutes)
    app.use('/images', imageRoutes)
}