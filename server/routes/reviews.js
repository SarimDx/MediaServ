import express from "express";
import { createReview } from "../controllers/reviews.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* CREATE */
router.post("/:userId", verifyToken, createReview);

// router.get("/:userId/reviews", verifyToken, getUserPosts);

export default router;

// import express from "express";
// import { createReview, getUserReviews, getReviews } from "../controllers/reviews.js";
// import { verifyToken } from "../middleware/auth.js";

// const router = express.Router();

// /* CREATE */
// router.post("/", verifyToken, createReview);

// /* READ */
// router.get("/:userReviewId/reviews", verifyToken, getUserReviews);
// router.get("/", verifyToken, getReviews);

// export default router;

// import express from "express";
// import { createReview, getUserReviews, getReviews } from "../controllers/reviews.js";
// import { verifyToken } from "../middleware/auth.js";

// const router = express.Router();

// /* CREATE */
// router.post("/", verifyToken, createReview);

// /* READ */
// router.get("/:userReviewId/reviews", verifyToken, getUserReviews);
// router.get("/", verifyToken, getReviews);

// export default router;


// reviewRoutes.js
// import express from "express";
// import { createReview, getUserReviews, getReviews } from "../controllers/reviews.js";
// import { verifyToken } from "../middleware/auth.js";

// const router = express.Router();

// /* CREATE */
// router.post("/", verifyToken, createReview);

// /* READ */
// router.get("/:userReviewId/reviews", verifyToken, getUserReviews);
// router.get("/", verifyToken, getReviews);

// export default router;

// import express from "express";
// import { getUserReviews, getReviews } from "../controllers/reviews.js";
// import { verifyToken } from "../middleware/auth.js";

// const router = express.Router();

// /* READ */
// router.get("/:userReviewId/reviews", verifyToken, getUserReviews);
// router.get("/", verifyToken, getReviews);

// export default router;



// import express from "express";
// // import { getFeedReviews, getUserReviews } from "../controllers/reviews.js";
// import { getUserReviews } from "../controllers/reviews.js";
// import { verifyToken } from "../middleware/auth.js";

// const router = express.Router();

// /* READ */
// router.get("/:userId/reviews", verifyToken, getUserReviews);

// export default router;