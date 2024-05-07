// import nodemailer from 'nodemailer';
// import { env } from 'process';

// export const sendEmail = async ({email, emailType, token}) => {
//     try {

//         var transporter = nodemailer.createTransport({
//             host: "sandbox.smtp.mailtrap.io",
//             port: 2525,
//             auth: {
//               user: "917f77c0b10889",
//               pass: "7d683a7d161f86"
//             }
//           });

//           const mailOptions = {
//             from: 'itzhazzan@gmail.com',
//             to: email,
//             subject: emailType == 'verify' ? 'Verify Your Email' : 'Reset Your Email',
//             html: `<p>Click <a href="${env.DOMAIN}/verifyemail?token=${token}">here</a> to verify you email</p>`,
//           };

//           const mailResponse = await transporter.sendMail(mailOptions);
//           console.log(mailResponse);
          
//     } catch (error) {
//         throw new Error(error.message);        
//     }
// }