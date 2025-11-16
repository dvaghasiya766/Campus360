import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Paper,
  Badge,
} from "@mui/material";
import {
  School,
  Assignment,
  People,
  TrendingUp,
  Forum,
  Campaign,
  Class,
  Grade,
} from "@mui/icons-material";
import StatsCard from "../../Components/Dashboard/StatsCard";
import Colors from "../../Const/Colors";

const FacultyDashboard = () => {
  const statsData = [
    {
      title: "Teaching Courses",
      value: "4",
      icon: <School />,
      color: Colors.Emerald,
      trend: "2 active this semester",
    },
    {
      title: "Assignments Created",
      value: "28",
      icon: <Assignment />,
      color: Colors.Indigo,
      trend: "5 pending review",
    },
    {
      title: "Students Enrolled",
      value: "156",
      icon: <People />,
      color: Colors.Coral,
      trend: "+12 new students",
    },
    {
      title: "Course Rating",
      value: "4.8",
      icon: <TrendingUp />,
      color: Colors.Violet,
      trend: "+0.3 improvement",
    },
  ];

  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
        minHeight: "100vh",
        py: 3,
      }}
    >
      <Container maxWidth="xl">
        {/* Faculty Header */}
        <Card
          sx={{
            mb: 3,
            borderRadius: 4,
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(15px)",
            overflow: "visible",
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Badge badgeContent="Prof" color="primary" sx={{ mr: 3 }}>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      background: `linear-gradient(45deg, ${Colors.Violet}, ${Colors.Rose})`,
                      fontSize: "2rem",
                    }}
                  >
                    DR
                  </Avatar>
                </Badge>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "Oswald",
                      fontWeight: 700,
                      color: "#333",
                      mb: 1,
                    }}
                  >
                    Faculty Hub 👨‍🏫
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontFamily: "Roboto Condensed", color: "#666" }}
                  >
                    Inspire minds, shape futures
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ textAlign: "right" }}>
                <Chip
                  label="Department of Science"
                  sx={{
                    mb: 1,
                    backgroundColor: Colors.Sky,
                    color: "white",
                    fontFamily: "Roboto Condensed",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: "#666", fontFamily: "Roboto Condensed" }}
                >
                  Academic Year 2024-25
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Teaching Metrics */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {statsData.map((stat, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
              <Card
                sx={{
                  background: "rgba(255,255,255,0.8)",
                  borderRadius: 4,
                  border: `3px solid ${stat.color}30`,
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-12px) rotate(2deg)",
                    boxShadow: `0 25px 50px ${stat.color}40`,
                    border: `3px solid ${stat.color}`,
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: `linear-gradient(90deg, ${stat.color}, ${stat.color}80)`,
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "Roboto Condensed",
                          mb: 1,
                          color: "#666",
                          fontWeight: 600,
                        }}
                      >
                        {stat.title}
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{
                          fontFamily: "Oswald",
                          fontWeight: 800,
                          mb: 1,
                          color: "#333",
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          fontFamily: "Roboto Condensed",
                          color: stat.color,
                          fontWeight: 600,
                        }}
                      >
                        {stat.trend}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 65,
                        height: 65,
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${stat.color}, ${stat.color}60)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        boxShadow: `0 10px 30px ${stat.color}50`,
                      }}
                    >
                      {stat.icon}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3}>
          {/* My Courses */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                borderRadius: 4,
                background: "rgba(255,255,255,0.9)",
                height: "100%",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Oswald",
                    fontWeight: 700,
                    mb: 3,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  📖 My Courses
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {[
                    {
                      course: "Advanced Physics",
                      students: 45,
                      completion: "Week 8/12",
                      color: Colors.Sky,
                    },
                    {
                      course: "Quantum Mechanics",
                      students: 32,
                      completion: "Week 6/12",
                      color: Colors.Violet,
                    },
                    {
                      course: "Thermodynamics",
                      students: 38,
                      completion: "Week 10/12",
                      color: Colors.Emerald,
                    },
                  ].map((course, index) => (
                    <Paper
                      key={index}
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        background: `linear-gradient(135deg, ${course.color}15, ${course.color}08)`,
                        border: `2px solid ${course.color}30`,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.02)",
                          border: `2px solid ${course.color}`,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Oswald",
                            fontWeight: 600,
                            color: "#333",
                          }}
                        >
                          {course.course}
                        </Typography>
                        <Chip
                          icon={<People />}
                          label={course.students}
                          size="small"
                          sx={{
                            backgroundColor: course.color,
                            color: "white",
                            fontFamily: "Roboto Condensed",
                          }}
                        />
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{ color: "#666", fontFamily: "Roboto Condensed" }}
                      >
                        Progress: {course.completion}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Recent Teaching Activity */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Card
              sx={{
                borderRadius: 4,
                background: "rgba(255,255,255,0.9)",
                height: "100%",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Oswald",
                    fontWeight: 700,
                    mb: 3,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  🎯 Teaching Activity
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {[
                    {
                      activity: "Graded 15 assignments for Physics 101",
                      time: "30 min ago",
                      type: "grading",
                      color: Colors.Emerald,
                    },
                    {
                      activity: "Posted new lab instructions",
                      time: "2 hours ago",
                      type: "content",
                      color: Colors.Sky,
                    },
                    {
                      activity: "Responded to 8 student queries",
                      time: "4 hours ago",
                      type: "discussion",
                      color: Colors.Amber,
                    },
                    {
                      activity: "Updated course syllabus",
                      time: "1 day ago",
                      type: "admin",
                      color: Colors.Pink,
                    },
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 2.5,
                        borderRadius: 3,
                        background: `linear-gradient(135deg, ${item.color}12, ${item.color}06)`,
                        border: `1px solid ${item.color}25`,
                        position: "relative",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: "4px",
                          background: item.color,
                          borderRadius: "0 2px 2px 0",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 2,
                          mr: 2,
                          background: `linear-gradient(45deg, ${item.color}, ${item.color}80)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                        }}
                      >
                        {item.type === "grading" && <Grade />}
                        {item.type === "content" && <Class />}
                        {item.type === "discussion" && <Forum />}
                        {item.type === "admin" && <Assignment />}
                      </Box>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography
                          sx={{
                            fontFamily: "Roboto Condensed",
                            fontWeight: 600,
                            color: "#333",
                            mb: 0.5,
                          }}
                        >
                          {item.activity}
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#666" }}>
                          {item.time}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Teaching Tools */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Card
              sx={{
                borderRadius: 4,
                background: "rgba(255,255,255,0.9)",
                height: "100%",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Oswald",
                    fontWeight: 700,
                    mb: 3,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  🛠️ Tools
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {[
                    {
                      label: "Create Assignment",
                      icon: <Assignment />,
                      color: Colors.Teal,
                    },
                    {
                      label: "Grade Submissions",
                      icon: <Grade />,
                      color: Colors.Amber,
                    },
                    {
                      label: "Manage Discussions",
                      icon: <Forum />,
                      color: Colors.Indigo,
                    },
                    {
                      label: "Send Announcement",
                      icon: <Campaign />,
                      color: Colors.Rose,
                    },
                  ].map((tool, index) => (
                    <Paper
                      key={index}
                      elevation={0}
                      sx={{
                        p: 2.5,
                        borderRadius: 3,
                        cursor: "pointer",
                        background: `linear-gradient(135deg, ${tool.color}20, ${tool.color}10)`,
                        border: `2px solid ${tool.color}30`,
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                          transform: "translateY(-5px) scale(1.05)",
                          border: `2px solid ${tool.color}`,
                          boxShadow: `0 15px 30px ${tool.color}40`,
                        },
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box
                          sx={{
                            width: 45,
                            height: 45,
                            borderRadius: 2,
                            background: `linear-gradient(45deg, ${tool.color}, ${tool.color}70)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            mr: 2,
                          }}
                        >
                          {tool.icon}
                        </Box>
                        <Typography
                          sx={{
                            fontFamily: "Roboto Condensed",
                            fontWeight: 600,
                            color: "#333",
                          }}
                        >
                          {tool.label}
                        </Typography>
                      </Box>
                    </Paper>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FacultyDashboard;
