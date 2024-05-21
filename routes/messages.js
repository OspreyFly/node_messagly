const express = require('express');
const router = express.Router();
const Message = require('../models/message'); 


router.get('/:id', async (req, res) => {
  try {
    const message = await Message.get(req.params.id);
    res.json(message);
  } catch (error) {
    res.status(404).json({ error: 'Message not found' });
  }
});


router.post('/', async (req, res) => {
  try {
    const message = await Message.create(req.body);
    res.status(201).json(message);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create message' });
  }
});


router.post('/:id/read', async (req, res) => {
  try {
    const message = await Message.markRead(req.params.id);
    res.json(message);
  } catch (error) {
    res.status(404).json({ error: 'Message not found' });
  }
});

module.exports = router;
