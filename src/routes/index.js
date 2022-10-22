
import { Router } from 'express';

import test from './test.routes.js';

const router = Router();
router.use(test);

export default router;