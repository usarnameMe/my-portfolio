import { Router } from 'express';
import { submitContactForm, validateContactForm } from '../controllers/contactController';

const router: Router = Router();

router.post('/contact', validateContactForm, submitContactForm);

export default router;
