class ImageControllers{
    static uploadArticleImage = async (req,res) => {
            res.send(JSON.stringify(req.file.path))
    }
}

export default ImageControllers