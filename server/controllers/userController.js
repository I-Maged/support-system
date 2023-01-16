const registerUser = (req, res) => {
  res.send('New Register Route');
};

const loginUser = (req, res) => {
  res.send('New Login Route');
};

module.exports = {
  registerUser,
  loginUser,
};
