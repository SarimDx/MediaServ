import Review from "../models/Review.js";
import User from "../models/User.js";

/* CREATE */
export const createReview = async (req, res) => {
  try {
    const { userId } = req.params;
    const { rating, reviewMessage } = req.body;

    const newReview = new Review({
      userId,
      rating,
      reviewMessage,
    });

    await newReview.save();

    // Update the user with the new review
    const user = await User.findById(userId);
    user.reviews.push(newReview);
    await user.save();

    res.status(201).json(newReview);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// export const getUserReviews = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const review = await Review.find({ userId });
//     res.status(200).json(review);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };

// import Review from "../models/review.js";

// // Create a new review
// export const createReview = async (req, res) => {
//   try {
//     const { userId, content } = req.body;

//     const review = new Review({
//       userId,
//       content,
//     });

//     await review.save();

//     res.status(201).json({ review });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to create review" });
//   }
// };

// // Get reviews by user ID
// export const getUserReviews = async (req, res) => {
//   try {
//     const { userReviewId } = req.params;

//     const reviews = await Review.find({ userId: userReviewId });

//     res.status(200).json({ reviews });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to get user reviews" });
//   }
// };

// // Get all reviews
// export const getReviews = async (req, res) => {
//   try {
//     const reviews = await Review.find();

//     res.status(200).json({ reviews });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to get reviews" });
//   }
// };


// !
// import Review from "../models/Review.js";
// import User from "../models/User.js";

// export const createReview = async (req, res) => {
//   try {
//     const { userReviewId, descriptionReview, rate } = req.body;
//     const user = await User.findById(userReviewId);
//     const newReview = new Review({
//       userReviewId,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       descriptionReview,
//       userPicturePath: user.picturePath,
//       rate,
//     });
//     await newReview.save();

//     const reviews = await Review.find();
//     res.status(201).json(reviews);
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// };

// export const getUserReviews = async (req, res) => {
//   try {
//     const { userReviewId } = req.params;
//     const reviews = await Review.find({ userReviewId });
//     res.status(200).json(reviews);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// export const getReviews = async (req, res) => {
//   try {
//     const reviews = await Review.find();
//     res.status(200).json(reviews);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };



// import Review from "../models/Review.js";
// import User from "../models/User.js";

// /* CREATE */

// export const createReview = async (req, res) => {
//   try {
//     const { userReviewId, descriptionReview, rate } = req.body;
//     const user = await User.findById(userReviewId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     const newReview = new Review({
//       userReviewId,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       descriptionReview,
//       userPicturePath: user.picturePath,
//       rate,
//     });
//     await newReview.save();

//     const reviews = await Review.find();
//     res.status(201).json(reviews);
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// };


// const user = await User.findById(userReviewId);
// const newReview = new Review({
//   userReviewId,
//   firstName: user.firstName,
//   lastName: user.lastName,
//   descriptionReview,
//   userPicturePath: user.picturePath,
//   rate,
// });
// await newReview.save();

// const reviews = await Review.find();
// res.status(201).json(reviews);

// export const createReview = async (req, res) => {
//   try {
//     const { userReviewId, descriptionReview, rate } = req.body;
//     const user = await User.findById(userReviewId);
//     const newReview = new Review({
//       userReviewId,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       descriptionReview,
//       userPicturePath: user.picturePath,
//       rate,
//     });
//     await newReview.save();

//     const reviews = await Review.find();
//     res.status(201).json(reviews);
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// };

// export const getUserReviews = async (req, res) => {
//   try {
//     const { userReviewId } = req.params;
//     const reviews = await Review.find({ userReviewId });
//     res.status(200).json(reviews);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// export const getReviews = async (req, res) => {
//   try {
//     const reviews = await Review.find();
//     res.status(200).json(reviews);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
// import Review from "../models/Review.js";
// import User from "../models/User.js";

// /* CREATE */
// export const createReview = async (req, res) => {
//   try {
//     const { userId, description,rate} = req.body;
//     const user = await User.findById(userId);
//     const newReview = new Review({
//       userId,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       description,
//       userPicturePath: user.picturePath,
//       rate,
//     });
//     await newReview.save();

//     const review = await Review.find();
//     res.status(201).json(review);
//   } catch (err) {
//     res.status(409).json({ message: err.message });
//   }
// };


// export const getUserReviews = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const review = await Review.find({ userId });
//     res.status(200).json(review);
// } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };