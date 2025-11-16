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
  LinearProgress,
} from "@mui/material";
import {
  School,
  Assignment,
  Event,
  TrendingUp,
  People,
  Star,
  AccessTime,
} from "@mui/icons-material";
import StatsCard from "../../Components/Dashboard/StatsCard";
import Colors from "../../Const/Colors";

const Dashboard = () => {
  const statsData = [
    {
      title: "Enrolled Courses",
      value: 6,
      icon: <School />,
      color: Colors.Lime,
      trend: "+2 this semester",
    },
    {
      title: "Pending Assignments",
      value: "12",
      icon: <Assignment />,
      color: Colors.Amber,
      trend: "3 due this week",
    },
    {
      title: "Upcoming Events",
      value: "8",
      icon: <Event />,
      color: Colors.Sky,
      trend: "2 today",
    },
    {
      title: "Overall GPA",
      value: "3.8",
      icon: <TrendingUp />,
      color: Colors.Pink,
      trend: "+0.2 improvement",
    },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        minHeight: "100vh",
        py: 3,
      }}
    >
      <Container maxWidth="xl">
        {/* Floating Header Card */}
        <Card
          sx={{
            mb: 3,
            borderRadius: 4,
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(10px)",
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
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                    mr: 3,
                    background: `linear-gradient(45deg, ${Colors.Violet}, ${Colors.Pink})`,
                  }}
                >
                  JS
                </Avatar>
                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: "Oswald",
                      fontWeight: 700,
                      color: "#333",
                    }}
                  >
                    Welcome Back, John! 🎓
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Roboto Condensed", color: "#666" }}
                  >
                    Ready to conquer your studies today?
                  </Typography>
                </Box>
              </Box>
              <Chip
                label="Active Student"
                color="success"
                sx={{ fontFamily: "Roboto Condensed", fontWeight: 600 }}
              />
            </Box>
          </CardContent>
        </Card>

        {/* Stats Cards with Glass Effect */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {statsData.map((stat, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
              <Card
                sx={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    background: "rgba(255,255,255,0.2)",
                  },
                }}
              >
                <CardContent sx={{ p: 3, color: "white" }}>
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
                          opacity: 0.9,
                        }}
                      >
                        {stat.title}
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{ fontFamily: "Oswald", fontWeight: 700, mb: 1 }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ fontFamily: "Roboto Condensed", opacity: 0.8 }}
                      >
                        {stat.trend}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        background: `linear-gradient(45deg, ${stat.color}, ${stat.color}80)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
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
          {/* Course Progress */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                borderRadius: 4,
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(10px)",
                height: "100%",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Oswald",
                    fontWeight: 600,
                    mb: 3,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  📚 Course Progress
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {[
                    {
                      course: "Mathematics",
                      progress: 85,
                      color: Colors.Emerald,
                    },
                    { course: "Physics", progress: 72, color: Colors.Sky },
                    { course: "Chemistry", progress: 90, color: Colors.Violet },
                  ].map((course, index) => (
                    <Box key={index}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Roboto Condensed",
                            fontWeight: 500,
                          }}
                        >
                          {course.course}
                        </Typography>
                        <Typography
                          sx={{ fontFamily: "Roboto Condensed", color: "#666" }}
                        >
                          {course.progress}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={course.progress}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: `${course.color}20`,
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: course.color,
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Latest Announcements */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Card
              sx={{
                borderRadius: 4,
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(10px)",
                height: "100%",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Oswald",
                    fontWeight: 600,
                    mb: 3,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  📢 Latest Announcements
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {[
                    {
                      text: "Final Exam Schedule Released",
                      time: "2 hours ago",
                      priority: "high",
                      color: Colors.Rose,
                    },
                    {
                      text: "Graduation Application Deadline",
                      time: "1 day ago",
                      priority: "medium",
                      color: Colors.Amber,
                    },
                    {
                      text: "Library Extended Hours",
                      time: "2 days ago",
                      priority: "low",
                      color: Colors.Teal,
                    },
                  ].map((announcement, index) => (
                    <Box
                      key={index}
                      sx={{
                        p: 2,
                        borderRadius: 3,
                        background: `linear-gradient(135deg, ${announcement.color}10, ${announcement.color}05)`,
                        border: `1px solid ${announcement.color}30`,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateX(5px)",
                          boxShadow: `0 4px 15px ${announcement.color}20`,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Roboto Condensed",
                            fontWeight: 600,
                            color: "#333",
                          }}
                        >
                          {announcement.text}
                        </Typography>
                        <Chip
                          label={announcement.priority}
                          size="small"
                          sx={{
                            backgroundColor: announcement.color,
                            color: "white",
                            fontFamily: "Roboto Condensed",
                            textTransform: "capitalize",
                          }}
                        />
                      </Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#666",
                          display: "flex",
                          alignItems: "center",
                          mt: 1,
                        }}
                      >
                        <AccessTime sx={{ fontSize: 14, mr: 0.5 }} />
                        {announcement.time}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Quick Actions */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Card
              sx={{
                borderRadius: 4,
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(10px)",
                height: "100%",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Oswald",
                    fontWeight: 600,
                    mb: 3,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  ⚡ Quick Actions
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {[
                    {
                      label: "Submit Assignment",
                      icon: <Assignment />,
                      color: Colors.Teal,
                    },
                    {
                      label: "Join Discussion",
                      icon: <People />,
                      color: Colors.Violet,
                    },
                    {
                      label: "View Grades",
                      icon: <Star />,
                      color: Colors.Amber,
                    },
                    {
                      label: "Check Schedule",
                      icon: <Event />,
                      color: Colors.Rose,
                    },
                  ].map((action, index) => (
                    <Box
                      key={index}
                      sx={{
                        p: 2,
                        borderRadius: 3,
                        cursor: "pointer",
                        background: `linear-gradient(135deg, ${action.color}15, ${action.color}05)`,
                        border: `2px solid ${action.color}20`,
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                          transform: "scale(1.02)",
                          border: `2px solid ${action.color}`,
                          boxShadow: `0 8px 25px ${action.color}30`,
                        },
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: 2,
                            background: `linear-gradient(45deg, ${action.color}, ${action.color}80)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            mr: 2,
                          }}
                        >
                          {action.icon}
                        </Box>
                        <Typography
                          sx={{
                            fontFamily: "Roboto Condensed",
                            fontWeight: 600,
                            color: "#333",
                          }}
                        >
                          {action.label}
                        </Typography>
                      </Box>
                    </Box>
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

export default Dashboard;
