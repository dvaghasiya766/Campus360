import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Avatar,
  Divider,
  Grid,
} from "@mui/material";
import {
  School,
  Person,
  Schedule,
  MenuBook,
  LocationOn,
} from "@mui/icons-material";
import MainTitle from "../../Components/Common/Headings/MainTitle";
import Colors from "../../Const/Colors";

const ViewCourseDetails = () => {
  // Mock course data
  const courseData = {
    courseName: "Data Structures and Algorithms",
    courseCode: "CS201",
    credits: 4,
    semester: "Fall 2024",
    facultyName: "Computer Science",
    instructorName: "Dr. Sarah Johnson",
    schedule: "Mon, Wed, Fri - 10:00 AM to 11:30 AM",
    location: "Room 301, CS Building",
    description:
      "This course covers fundamental data structures including arrays, linked lists, stacks, queues, trees, and graphs. Students will learn algorithm analysis, sorting, and searching techniques.",
    prerequisites: [
      "CS101 - Programming Fundamentals",
      "MATH201 - Discrete Mathematics",
    ],
    learningOutcomes: [
      "Understand and implement basic data structures",
      "Analyze algorithm complexity using Big O notation",
      "Design efficient algorithms for common problems",
      "Apply appropriate data structures to solve real-world problems",
    ],
  };

  return (
    <Box width="100%">
      <MainTitle
        title="Course Details"
        subtitle="Comprehensive information about your enrolled course"
        color={Colors.HeadingDarkGray}
      />

      <Box sx={{ p: 3 }}>
        <Grid container spacing={3}>
          {/* Main Course Info */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Card sx={{ mb: 3, borderLeft: `4px solid ${Colors.Blue}` }}>
              <CardContent>
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <Avatar
                    sx={{ bgcolor: Colors.Blue + "15", color: Colors.Blue }}
                  >
                    <School />
                  </Avatar>
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{ fontFamily: "Oswald", fontWeight: 600 }}
                    >
                      {courseData.courseName}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color={Colors.Blue}
                      sx={{ fontWeight: 500 }}
                    >
                      {courseData.courseCode} • {courseData.credits} Credits
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {courseData.description}
                </Typography>

                <Box display="flex" gap={1} flexWrap="wrap">
                  <Chip
                    label={courseData.semester}
                    size="small"
                    sx={{ bgcolor: Colors.LightBlue }}
                  />
                  <Chip
                    label={courseData.facultyName}
                    size="small"
                    sx={{ bgcolor: Colors.LightGreen }}
                  />
                </Box>
              </CardContent>
            </Card>

            {/* Learning Outcomes */}
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontFamily: "Oswald" }}>
                  Learning Outcomes
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  {courseData.learningOutcomes.map((outcome, index) => (
                    <Typography
                      key={index}
                      component="li"
                      variant="body2"
                      sx={{ mb: 1 }}
                    >
                      {outcome}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>

            {/* Prerequisites */}
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontFamily: "Oswald" }}>
                  Prerequisites
                </Typography>
                <Box display="flex" flexDirection="column" gap={1}>
                  {courseData.prerequisites.map((prereq, index) => (
                    <Chip
                      key={index}
                      label={prereq}
                      variant="outlined"
                      size="small"
                      sx={{ alignSelf: "flex-start" }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Sidebar Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ borderLeft: `4px solid ${Colors.Green}` }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontFamily: "Oswald" }}>
                  Course Information
                </Typography>

                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <Person sx={{ color: Colors.Gray }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Instructor
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {courseData.instructorName}
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <Schedule sx={{ color: Colors.Gray }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Schedule
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {courseData.schedule}
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <LocationOn sx={{ color: Colors.Gray }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Location
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {courseData.location}
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box display="flex" alignItems="center" gap={2}>
                  <MenuBook sx={{ color: Colors.Gray }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Faculty
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {courseData.facultyName}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ViewCourseDetails;
