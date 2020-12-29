const express = require('express');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Vote } = require("../../db/models");
const vote = require('../../db/models/vote');
const asyncHandler = require('express-async-handler');

const router = express.Router();


