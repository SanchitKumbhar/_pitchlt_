const multer=require("multer");
const path=require("path");

const storage = multer.diskStorage({
  destination:(req,res,cb)=>{
    cb(null,"/media");;
  },
  filename:(req,res,file)=>{
    cb(null,Date.now() + path.extname(file.originalname));
  }
});

const uploads = multer({storage});

module.exports=uploads;