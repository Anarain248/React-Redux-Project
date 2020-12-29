const express = require('express');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Answer } = require("../../db/models");
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.post(
    '/upvote',
    asyncHandler(async (req, res) => {
      const { answerId } = req.body;
      await Answer.increment( "upVote", {where: { id:answerId }} );
        const answers = await Answer.findAll();
        console.log(answers);

      res.json(
        answers
      );
    })
  );

  router.post(
    '/downvote',
    asyncHandler(async (req, res) => {
      const { answerId } = req.body;
      await Answer.decrement( "downVote", {where: { id:answerId }} );
        const answers = await Answer.findAll();
        console.log(answers);

      res.json(
        answers
      );
    })
  );






  module.exports = router
