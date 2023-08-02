import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          <img style={{ width: '105px' , height : '100px' }} src="../assets/logoUpgadeQulity-removebg.png" alt="twitter" />
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to ServiceMedia, the Social Media for Service Owners!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;


// import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
// import Form from "./Form";
// import FlexBetween from "components/FlexBetween";
// import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const neutralLight = theme.palette.neutral.light;
//   const dark = theme.palette.neutral.dark;
//   const background = theme.palette.background.default;
//   const primaryLight = theme.palette.primary.light;
//   const alt = theme.palette.background.alt;

//   return (
//     <Box>
//       <Box
//         width="100%"
//         backgroundColor={theme.palette.background.alt}
//         p="1rem 6%"
//         textAlign="center"
//       >
//         <FlexBetween>
//         <Typography
//           fontWeight="bold"
//           fontSize="clamp(1rem, 2rem, 2.25rem)" //!
//           color="primary"
//           onClick={() => navigate("/home")}
//           sx={{
//             "&:hover": {
//               color: primaryLight,
//               cursor: "pointer",
//             },
//           }}
//         >
//           ServiceMedia
//         </Typography>
//         <Typography
//           fontWeight="bold"
//           fontSize="clamp(1rem, 2rem, 2.25rem)" //!
//           color="primary"
//           onClick={() => navigate("/home")}
//           sx={{
//             "&:hover": {
//               color: primaryLight,
//               cursor: "pointer",
//             },
//           }}
//         >
//           ServiceMedia
//         </Typography>
//         <Typography
//           fontWeight="bold"
//           fontSize="clamp(1rem, 2rem, 2.25rem)" //!
//           color="primary"
//           onClick={() => navigate("/home")}
//           sx={{
//             "&:hover": {
//               color: primaryLight,
//               cursor: "pointer",
//             },
//           }}
//         >
//           ServiceMedia
//         </Typography>
      
//         </FlexBetween>
//       </Box>
//      {/*  Main Box */}
//       <Box 
//         width={isNonMobileScreens ? "50%" : "93%"}
//         p="2rem"
//         m="2rem auto"
//         borderRadius="1.5rem"
//         backgroundColor={theme.palette.background.alt}
//       >
//         <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
//           Welcome to ServiceMedia, the Social Media for Service Owners!
//         </Typography>
//         <Form />
//       </Box>
//     </Box>
//   );
// };

// export default LoginPage;
