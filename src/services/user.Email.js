const nodemailer = require("nodemailer");

module.exports.sendEmail=async (dest,subject,massage)=>{
  let transporter = nodemailer.createTransport({
      service:'gmail',
      auth: {
        user: process.env.NODEMAILEREMAIL, // generated ethereal user
        pass:process.env.NODEMAILERPASSWORD, // generated ethereal password
      },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `mousa shop <${process.env.NODEMAILEREMAIL}>`, // sender address
    to: dest, // list of receivers
    subject: subject, // Subject line
    html:massage , // html body
  });
  return info;
}
