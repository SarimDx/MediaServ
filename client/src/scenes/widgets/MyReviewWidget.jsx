import React, { useState } from "react";

import { Box,  Typography,useTheme,Divider,InputBase, Button, Rating } from '@mui/material';

import { StarOutline } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setReviews } from "state";
import UserImage from 'components/UserImage';
import WidgetWrapper from 'components/WidgetWrapper';
import FlexBetween from "components/FlexBetween";

const ReviewWidget = ({ userId ,  picturePath}) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [reviewMessage, setReviewMessage] = useState("");
  const token = useSelector((state) => state.token);

  const { palette } = useTheme();
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleReviewSubmit = async () => {
    try {
      const newReview = {
        rating,
        reviewMessage,
      };

      const response = await fetch(`http://localhost:3001/reviews/${userId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });

      if (!response.ok) {
        throw new Error("Error submitting review");
      }

      const data = await response.json();

      // Dispatch any necessary actions based on the response
      dispatch(setReviews(data.reviews));

      // Reset the rating and review message inputs
      setRating(0);
      setReviewMessage("");
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    
    <WidgetWrapper>
      {/* <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ display: "flex", gap: "4px" }}>
          {[1, 2, 3, 4, 5,6,7].map((value) => (
            <StarOutline
              key={value}
              color={value <= rating ? "primary" : "inherit"}
              onClick={() => handleRatingChange(value)}
              sx={{ cursor: "pointer" }}
            />
          ))}
        </Box>
        
      </Box> */}
      <FlexBetween gap="1.5rem">
    <UserImage image={picturePath} />
    <Rating
      name="rate"
      value={rating}
      onChange={(event, newValue) => handleRatingChange(newValue)}
      emptyIcon={<StarOutline />}
      sx={{ cursor: "pointer" }}
    />
  </FlexBetween>
      <Divider sx={{ margin: "1.25rem 0" }} />
      <FlexBetween>
      <InputBase
          placeholder="Leave a review..."
          value={reviewMessage}
          onChange={(e) => setReviewMessage(e.target.value)}
          sx={{
            width: "100%",
            backgroundColor: palette.neutral.light,
            borderRadius: "2rem",
            padding: "1rem 2rem",
        }}
        />
      </FlexBetween>
      <Divider sx={{ margin: "1.25rem 0" }} />
      <Button
        variant="contained" color="primary"
        disabled={reviewMessage.trim() === ""}
        onClick={handleReviewSubmit}
      >
        Submit Review
      </Button>
    </WidgetWrapper>
  );
};

export default ReviewWidget;

// import React, { useState } from "react";

// import { Box,  Typography,useTheme,Divider,InputBase, Button, Rating } from '@mui/material';

// import { StarOutline } from "@mui/icons-material";
// import { useDispatch, useSelector } from "react-redux";
// import { setReviews } from "state";


// const ReviewWidget = ({ userId }) => {
//   const dispatch = useDispatch();
//   const [rating, setRating] = useState(0);
//   const [reviewMessage, setReviewMessage] = useState("");
//   const token = useSelector((state) => state.token);

//   const handleRatingChange = (value) => {
//     setRating(value);
//   };

//   const handleReviewSubmit = async () => {
//     try {
//       const newReview = {
//         rating,
//         reviewMessage,
//       };

//       const response = await fetch(`http://localhost:3001/reviews/${userId}`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newReview),
//       });

//       if (!response.ok) {
//         throw new Error("Error submitting review");
//       }

//       const data = await response.json();

//       // Dispatch any necessary actions based on the response
//       dispatch(setReviews(data.reviews));

//       // Reset the rating and review message inputs
//       setRating(0);
//       setReviewMessage("");
//     } catch (error) {
//       console.error("Error submitting review:", error);
//     }
//   };

//   return (
//     <Box>
//       <Box sx={{ display: "flex", alignItems: "center" }}>
//         <Box sx={{ display: "flex", gap: "4px" }}>
//           {[1, 2, 3, 4, 5].map((value) => (
//             <StarOutline
//               key={value}
//               color={value <= rating ? "primary" : "inherit"}
//               onClick={() => handleRatingChange(value)}
//               sx={{ cursor: "pointer" }}
//             />
//           ))}
//         </Box>
//         <InputBase
//           placeholder="Leave a review..."
//           value={reviewMessage}
//           onChange={(e) => setReviewMessage(e.target.value)}
//           sx={{ flex: 1, marginLeft: "16px" }}
//         />
//       </Box>

//       <Divider sx={{ margin: "1.25rem 0" }} />

//       <Button
//         disabled={rating === 0 || reviewMessage.trim() === ""}
//         onClick={handleReviewSubmit}
//         sx={{
//           color: "white",
//           backgroundColor: "#007bff",
//           borderRadius: "3rem",
//         }}
//       >
//         Submit Review
//       </Button>
//     </Box>
//   );
// };

// export default ReviewWidget;

