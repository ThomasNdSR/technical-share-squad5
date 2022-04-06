import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/img/')
  },
  filename: function (req, file, cb) {
    cb(null,Date.now().toString()+ '-' +file.originalname )
  }
})


export default (multer({
  storage: storage,
  
  // fileFilter: (req, file, cb) => {
  //   const mimeType = ["image/png", "image/jpg", "image/jpeg"].find(
  //     (valid) => valid == file.mimetype
  //   );
  //   if (mimeType) {
  //     return cb(null, true);
  //   } else {
  //     return cb(null, false);
  //   }
  // },
}));