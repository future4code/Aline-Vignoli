import { Request, Response } from "express";
import { writeMail } from "../services/mailer";

export const sendMail = async (req: Request, res:Response) => {
    let errorCode: number = 400;
    try {
        await writeMail({
            from: "Aline Vignoli <nyhv.contato@gmail.com>",
            to: "g6e8k2i3m1o7e5d9@labenualunos.slack.com",
            subject: "Desafio - Web Services",
            text: "Endpoint para enviar e-mail",
            html: `<p>Olá, Labenu!!</p>`
        });

        res.status(200).send({message: "E-mail enviado com sucesso!"});

    } catch (error) {
        res.status(errorCode).send({message: error.message});
    };
};