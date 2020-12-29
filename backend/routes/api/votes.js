const express = require('express');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Vote } = require("../../db/models");
const vote = require('../../db/models/vote');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.post(
    '/upvote',
    asyncHandler(async (req, res) => {
      const { upvote, userId, answerId } = req.body;
      const vote = await Vote.create({ upvote, userId, answerId });

      return res.json({
        vote
      });
    })
  );

  router.post(
    '/downvote',
    asyncHandler(async (req, res) => {
      const { downvote, userId, answerId } = req.body;
      const vote = await Vote.create({ downvote, userId, answerId });

      return res.json({
        vote
      });
    })
  );

  module.exports = router
