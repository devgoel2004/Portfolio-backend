const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());
let transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
});
app.post("/send-email", (req, res) => {
  const { name, email, message, subject } = req.body;
  let subject1 = "Thanks for contacting me.";
  let text = `Dear ${name},
  I hope this email finds you well.
  My name is Dev Goel, and I am currently pursuing my B.Tech from AKGEC, Ghaziabad. With a strong focus on web development and data structures and algorithms (DSA), I have honed my skills in the MERN stack - MongoDB, Express.js, React, and Node.js. I have substantial experience in both front-end and back-end development, allowing me to architect scalable and responsive web applications efficiently.
  My design philosophy revolves around user-centric design, ensuring that interfaces are not only visually appealing but also provide a smooth and intuitive navigation experience. This approach significantly enhances user engagement and satisfaction.
  I am reaching out to [state the purpose of your email: e.g., discuss potential collaboration opportunities, seek guidance, propose a project, etc.]. I believe that my skills and experiences align well with your  objectives, and I am eager to contribute to your ongoing and future initiatives.
  I am looking forward to the possibility of discussing how I can contribute to your team/project.
  I am available at your convenience for further discussion and can be reached at 9690011021 or via email at devgoel901@gmail.com.
  Warm Regrards,
  Dev Goel
  Email: devgoel901@gmail.com
  Phone: 9690011021
  LinkedIn: https://www.linkedin.com/in/devgoel901/
  Portfolio: https://devgoel2004.github.io/portfolio/
  Resume: https://drive.google.com/file/d/1THnT2c9mvULCi59PBcIua3rQHZAOGD8O/view?usp=sharing
  `;
  let mailOptions = {
    from: process.env.USER,
    to: email,
    subject: subject1,
    text: text,
  };
  let mailOptions2 = {
    from: process.env.USER,
    to: process.env.USER,
    subject: subject,
    text: message,
  };
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
  });
  transporter.sendMail(mailOptions2, (err) => {
    if (err) {
      return res.status(500).send(err.toString());
    }
  });
  res.status(200).send("Email sent ");
});

app.listen(port, () => {
  console.log(`Email server is running at http://localhost:${port}`);
});
