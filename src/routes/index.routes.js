import { Router } from 'express'
const router = Router();

//routes
router.get('/', (req, res) => {
    res.send('My First API');
});

export default router;