const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  console.log(req.headers);

  try {
    const accessToken = req.headers.authorization.replace("Bearer ", "");
    const jwt_payload = jwt.verify(accessToken, process.env.jwt_salt);

    req.user = jwt_payload;
  } catch (error) {
    res.status(401).json({
      status: "failed",
      message: "Unauthorized",
    });
    return;
  }

  next(); //keep going with code
};

module.exports = auth;
