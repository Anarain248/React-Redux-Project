const express = require('express');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Answer } = require("../../db/models");
const answer = require('../../db/models/answer');
const asyncHandler = require('express-async-handler');

const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {
    const answers = await Answer.findAll();
    res.json( answers )
}));

router.post(
    '/',
    asyncHandler(async (req, res) => {
      const { body, userId, questionId} = req.body;
      const answer = await Answer.create({ body, userId, questionId });

      return res.json({
        answer
      });
    })
  );

module.exports = router
