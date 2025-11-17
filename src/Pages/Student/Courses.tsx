import { Box } from "@mui/material";
import React from "react";
import CourseCard from "../../Components/Common/CourseCard";
import Colors from "../../Const/Colors";
import MainTitle from "../../Components/Common/Headings/MainTitle";

const Courses = () => {
  return (
    <Box width="100%">
      <MainTitle
        title="Courses"
        subtitle="Manage your enrolled courses"
        color={Colors.Gray}
      />
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        gap={2}
      >
        <CourseCard color={Colors.Amber} />
        <CourseCard color={Colors.Brown} />
        <CourseCard color={Colors.Cyan} />
        <CourseCard color={Colors.Green} />
        <CourseCard color={Colors.Indigo} />
        <CourseCard color={Colors.Pink} />
      </Box>
    </Box>
  );
};

export default Courses;
