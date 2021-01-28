import SMTPTransport from "nodemailer/lib/smtp-transport";
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import Mail from "nodemailer/lib/mailer";
import { mailTemplate } from "../types/mail";

dotenv.config();

export const config: SMTPTransport.Options = {
    host: process.env.NM_HOST,
    port: Number(process.env.NM_PORT),
    auth: {
        user: process.env.NM_USER,
        pass: process.env.NM_PASS
    }
};

let transporter: Mail = nodemailer.createTransport(config);

export const writeMail = async (mail: mailTemplate) => {
    let mailContent: Mail.Options = {
        from: mail.from,
        to: mail.to,
        subject: mail.subject,
        text: mail.text,
        html: mail.html
    };

    transporter.sendMail(mailContent, (error: Error | null, info: any)=>{
        if(error){
            throw new Error(error.message);
        }else{
            console.log("Email enviado!");
        };
    });
}