const express = require('express');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Question } = require("../../db/models");
const question = require('../../db/models/question');
const asyncHandler = require('express-async-handler');

const router = express.Router();

// Question.create = async function ({ body }) {
//     const user = await Question.create({
//         body
//     });
//     return await Question.scope('currentQuestion').findByPk(question.id);
//   };
//   return Question;

router.get('/', asyncHandler(async (req, res) => {
    const questions = await Question.findAll();
    res.json( questions )
}))

  router.post(
    '/',
    asyncHandler(async (req, res) => {
      const { body, userId } = req.body;
      const question = await Question.create({ body, userId });

      return res.json({
        question
      });
    })
  );

module.exports = router
