
const cloudinary = require("cloudinary").v2

cloudinary.config({ 
  cloud_name: 'devrotiml', 
  api_key: '689381892683255', 
  api_secret: 'wsaDjt_w1l7bFELPNIf59iO55WY' 
});

module.exports = cloudinary;
