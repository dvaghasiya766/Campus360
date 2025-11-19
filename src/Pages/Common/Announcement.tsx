import { Box } from "@mui/material";
import React from "react";
import MainTitle from "../../Components/Common/Headings/MainTitle";
import Colors from "../../Const/Colors";

const Announcement = () => {
  return (
    <Box width="100%">
      <MainTitle
        title="Announcement"
        subtitle="Update with Campus's Announcements..."
        color={Colors.HeadingDarkGray}
      />
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        gap={2}
      ></Box>
    </Box>
  );
};

export default Announcement;
