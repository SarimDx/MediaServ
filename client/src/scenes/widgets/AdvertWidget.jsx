import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        {/* <Typography color={medium}>Create Ad</Typography> */}
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/mirasShop.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>mirasShop</Typography>
        <Typography color={medium}>mirasShop.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Your pathway to stunning and immaculate beauty 
        You Wanna Look Good For A Friend Hangout Or A Party Miras Shop Provides You With The Best Clothing.
        Go Check us At mirasShop.com
      </Typography>
    </WidgetWrapper>
  );

  // return (
  //   <WidgetWrapper>
  //     <FlexBetween>
  //       <Typography color={dark} variant="h5" fontWeight="500">
  //         Sponsored
  //       </Typography>
  //       <Typography color={medium}>Create Ad</Typography>
  //     </FlexBetween>
  //     <img
  //       width="100%"
  //       height="auto"
  //       alt="advert"
  //       src="http://localhost:3001/assets/info4.jpeg"
  //       style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
  //     />
  //     <FlexBetween>
  //       <Typography color={main}>MikaCosmetics</Typography>
  //       <Typography color={medium}>mikacosmetics.com</Typography>
  //     </FlexBetween>
  //     <Typography color={medium} m="0.5rem 0">
  //       Your pathway to stunning and immaculate beauty and made sure your skin
  //       is exfoliating skin and shining like light.
  //     </Typography>
  //   </WidgetWrapper>
  // );
};

export default AdvertWidget;
