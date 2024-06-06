import { Router } from 'express';
import { submitContactForm } from '../controllers/contactController';

const router: Router = Router();

router.post('/contact', submitContactForm);

export default router;
