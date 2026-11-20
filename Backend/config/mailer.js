import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({   
    service: 'gmail',
    auth: {
        user: "shagun41103@gmail.com",
        pass: "fzseyhzicmpfsmzq"
    }
});


export default transporter;
