const {model,Schema} = require("mongoose");
const OTPSchema = Schema(
  {
    email: {
      type: String,
      require: true,
    },
    otp: {
      type: String,
      require: true,
    },
    status: { type: Number, default: 0 },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);
const OTPModel = model("otps", OTPSchema);
module.exports = OTPModel;
