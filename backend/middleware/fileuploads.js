const multer=require("multer");
const path=require("path");
const mediaPath = path.join(__dirname, "../media");

const storage = multer.diskStorage({
  destination:(req,res,cb)=>{
    cb(null,mediaPath);;
  },
  filename:(req,file,cb)=>{
    cb(null,Date.now() + path.extname(file.originalname));
  }
});

const uploads = multer({storage});

module.exports=uploads;