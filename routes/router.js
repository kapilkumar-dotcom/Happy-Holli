const express = require("express");
const router = new express.Router();
const multer = require("multer");
const path = require("path");
const cloudinary = require("../helper/Cloudinaryconfig");
const users = require("../model/userSchema");
const moment = require("moment");

// image storage path

const imgconfig = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads"); // Set the destination folder for uploads
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + fileExtension);
  },
});

const upload = multer({ storage: imgconfig });

// upload user data

router.post("/upload", upload.single("photo"), async (req, res) => {
  const { name } = req.body;
  const uploadResult = await cloudinary.uploader.upload(req.file.path);
  const date = moment(new Date()).format("YYYY-MM-DD");
  try {
    // console.log(uploadResult);
    // console.log(name, date);
    const userdata = new users({
      username: name,
      imageurl: uploadResult.secure_url,
      date: date,
    });

    await userdata.save();

    res.status(200).json({ success: true, imageUrl: uploadResult.secure_url });
  } catch (error) {
    res.status(400).json(error);
  }
});



// user Data get

router.get("/getdata", async(req, res) => {
  try {

    const getUser = await users.find()
    res.status(200).json(getUser)
    
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router;
