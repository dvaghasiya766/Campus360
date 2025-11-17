import React from "react";
import { Box } from "@mui/material";
import MainTitle from "../../Components/Common/Headings/MainTitle";
import Colors from "../../Const/Colors";

const Assignment = () => {
  return (
    <Box width="100%">
      <MainTitle
        title="Assignments"
        subtitle="Manage your assignments"
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

export default Assignment;
