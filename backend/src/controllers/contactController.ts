import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import { body, validationResult } from 'express-validator';
import logger from '../utils/logger';

export const validateContactForm = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('message').notEmpty().withMessage('Message is required'),
];

export const submitContactForm = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `New Contact Form Submission from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    logger('Email sent successfully');
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    const err = error as Error; 
    logger('Error sending email: ' + err.message);
    res.status(500).json({ error: 'Error sending email' });
  }
};
