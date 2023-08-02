import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    reviewMessage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;

// import mongoose from "mongoose";

// const reviewSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     content: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const Review = mongoose.model("Review", reviewSchema);

// export default Review;

// import mongoose from "mongoose";

// const reviewSchema = mongoose.Schema({
//   userReviewId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   descriptionReview: { type: String, required: true },
//   userPicturePath: { type: String },
//   rate: { type: Number, required: true },
// });

// const Review = mongoose.model("Review", reviewSchema);

// export default Review;


// import mongoose from "mongoose";

// const reviewSchema = mongoose.Schema(
//   {
//     userReviewId: {
//       type: String,
//       required: true,
//     },
//     firstName: {
//       type: String,
//       required: true,
//     },
//     lastName: {
//       type: String,
//       required: true,
//     },
//     descriptionReview: String,
//     userPicturePath: String,
//     rate: {
//       type: Number,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const Review = mongoose.model("Review", reviewSchema);

// export default Review;


// import mongoose from "mongoose";

// const reviewSchema = mongoose.Schema(
//   {
//     userId: {
//       type: String,
//       required: true,
//     },
//     firstName: {
//       type: String,
//       required: true,
//     },
//     lastName: {
//       type: String,
//       required: true,
//     },
//     description: String,
//     userPicturePath: String,
//     rate: {
//       type: Number,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const Review = mongoose.model("Review", reviewSchema);

// export default Review;