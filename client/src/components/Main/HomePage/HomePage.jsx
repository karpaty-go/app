import React from 'react'
import Articles from '../Articles/Articles'
import BackgroundImage from '../ReusedComponents/BackgroundImage/BackgroundImage'

const HomePage = () => {
    const image = { /*should be uploaded from database  */
        text:
          "Лучше гор могут быть только горы",
        url: 'https://res.cloudinary.com/karpaty-go/image/upload/v1633280137/DEV/svfsmj1x35zlqvfr1m2d.jpg',
        overlay_color: `rgba(134,110,90,.3)`,
        text_color:'blue'
      };


    return(
        <React.Fragment>
            <BackgroundImage image = { image }/>
            <Articles/>
        </React.Fragment>
    )
}

export default HomePage