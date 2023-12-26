const errorHandler = (error, req, res, next) => {
  if (error) {
    console.loc(error);
    res.status(400).json({
      status: "failed",
      error: error.message ? error.message : error,
    });
  } else {
    next();
  }
};

module.exports = errorHandler;
