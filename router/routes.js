import express from 'express'
import bubbleShort from '../bubble/bubble.js';

const router = express.Router()


router.post('/api', bubbleShort)


export default router;