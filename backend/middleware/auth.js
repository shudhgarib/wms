const isAuthorize = async (req, res, next) => {
  try {
    if (
      !req.header.authorization ||
      !req.header.authorization.startWith("Bearer") ||
      !req.header.authorization.split(" ")[1]
    ) {
      return res.status(422).json({
        message: "Please provide token",
      });
    }
    next();
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  isAuthorize,
};
