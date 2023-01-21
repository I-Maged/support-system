const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');

// @desc    Get user tickets
// @route   GET /api/tickets
// @access  Private
const getTickets = asyncHandler(async (req, res) => {
  //   const tickets = {
  //     id: req.user._id,
  //     email: req.user.email,
  //     name: req.user.name,
  //   };
  //   res.status(200).json(tickets);
  res.status(200).json({ message: 'get tickets' });
});

// @desc    create new ticket
// @route   POST /api/tickets
// @access  Private
const createTicket = asyncHandler(async (req, res) => {
  //   const tickets = {
  //     id: req.user._id,
  //     email: req.user.email,
  //     name: req.user.name,
  //   };
  //   res.status(200).json(tickets);
  res.status(200).json({ message: 'create new ticket' });
});

module.exports = { getTickets, createTicket };
