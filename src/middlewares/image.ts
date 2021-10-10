const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
import {CLOUD_NAME, API_KEY, API_SECRET} from '../config'

cloudinary.config({ 
  cloud_name: CLOUD_NAME, 
  api_key: API_KEY, 
  api_secret: API_SECRET 
});

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "images",
//   },
// });

// export const upload = multer({ storage: storage });

export const uploadImage = (folder_name: string, file_name: string) => {
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: folder_name,
    },
  });
  
  const upload = multer({ storage: storage });

  return upload.single(file_name)
}
