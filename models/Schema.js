import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: String,
  email: {
    type: String,
    required: true,
  },
  password: String,
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product"
    },
  ],
});



export const Users = models?.user || model("user", userSchema);


