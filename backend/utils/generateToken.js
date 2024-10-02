import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV != "development",
    samesite: "strict",
    maqxAge: 30 * 24 * 60 * 60 * 1000,
    // maqxAge: process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000,
  });
};

export default generateToken;