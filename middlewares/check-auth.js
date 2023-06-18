const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const payload = {
      userId: 123,
      username: 'John Doe'
    };
    const options = {
      expiresIn: '1000000000s'
    };
    //const token = req.headers.authorization.split(" ")[1];
    const token = jwt.sign(payload, process.env.TOKEN_SECRET, options);

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Auth failed",
    });
  }
};
