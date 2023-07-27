import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a title for this product"],
  },

  model_number: String,
  release_date: String,
  color: String,
  price: Number,
  sizes: [String],
  description: String,
  image_url: String,
  categories: [String],
  rating: Number,
  reviews: [
    {
      username: String,
      rating: Number,
      comment: String,
    },
  ],
  created_at: String,
  updated_at: String,
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
