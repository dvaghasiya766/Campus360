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
} from "@mui/material";
import {
  People,
  School,
  Assessment,
  TrendingUp,
  Notifications,
  Settings,
  Security,
  Speed,
} from "@mui/icons-material";
import Colors from "../../Const/Colors";

const AdminDashboard = () => {
  const statsData = [
    {
      title: "Total Users",
      value: "1,247",
      icon: <People />,
      color: Colors.Emerald,
      trend: "+15% this month",
    },
    {
      title: "Active Courses",
      value: "89",
      icon: <School />,
      color: Colors.Sky,
      trend: "+5 new courses",
    },
    {
      title: "System Reports",
      value: "23",
      icon: <Assessment />,
      color: Colors.Coral,
      trend: "3 pending review",
    },
    {
      title: "Server Uptime",
      value: "99.9%",
      icon: <TrendingUp />,
      color: Colors.Violet,
      trend: "Excellent",
    },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        minHeight: "100vh",
        py: 3,
      }}
    >
      <Container maxWidth="xl">
        {/* Admin Header */}
        <Paper
          elevation={0}
          sx={{
            mb: 3,
            borderRadius: 4,
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <Box sx={{ p: 4, color: "white" }}>
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
                    width: 70,
                    height: 70,
                    mr: 3,
                    background: `linear-gradient(45deg, ${Colors.Rose}, ${Colors.Coral})`,
                    fontSize: "2rem",
                  }}
                >
                  A
                </Avatar>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{ fontFamily: "Oswald", fontWeight: 700, mb: 1 }}
                  >
                    Admin Control Center 🛡️
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontFamily: "Roboto Condensed", opacity: 0.9 }}
                  >
                    Monitor and manage your campus ecosystem
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Chip
                  icon={<Security />}
                  label="Secure"
                  sx={{ color: "white", borderColor: "white" }}
                  variant="outlined"
                />
                <Chip
                  icon={<Speed />}
                  label="Online"
                  sx={{ backgroundColor: Colors.Emerald, color: "white" }}
                />
              </Box>
            </Box>
          </Box>
        </Paper>

        {/* System Metrics */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {statsData.map((stat, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
              <Card
                sx={{
                  background: "rgba(255,255,255,0.95)",
                  borderRadius: 4,
                  border: `2px solid ${stat.color}30`,
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-10px) scale(1.02)",
                    boxShadow: `0 20px 40px ${stat.color}40`,
                    border: `2px solid ${stat.color}`,
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
                          textTransform: "uppercase",
                          letterSpacing: 1,
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
                      <Chip
                        label={stat.trend}
                        size="small"
                        sx={{
                          backgroundColor: `${stat.color}20`,
                          color: stat.color,
                          fontFamily: "Roboto Condensed",
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: 3,
                        background: `linear-gradient(135deg, ${stat.color}, ${stat.color}80)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        boxShadow: `0 8px 25px ${stat.color}40`,
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
          {/* System Health */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                borderRadius: 4,
                background: "rgba(255,255,255,0.95)",
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
                  🔧 System Health Monitor
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {[
                    {
                      service: "Database",
                      status: "Optimal",
                      uptime: "99.9%",
                      color: Colors.Emerald,
                    },
                    {
                      service: "API Gateway",
                      status: "Running",
                      uptime: "99.7%",
                      color: Colors.Sky,
                    },
                    {
                      service: "File Storage",
                      status: "Healthy",
                      uptime: "100%",
                      color: Colors.Violet,
                    },
                    {
                      service: "Email Service",
                      status: "Active",
                      uptime: "98.5%",
                      color: Colors.Amber,
                    },
                  ].map((service, index) => (
                    <Paper
                      key={index}
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        background: `linear-gradient(135deg, ${service.color}10, ${service.color}05)`,
                        border: `1px solid ${service.color}30`,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: "Oswald",
                              fontWeight: 600,
                              fontSize: "1.1rem",
                            }}
                          >
                            {service.service}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#666",
                              fontFamily: "Roboto Condensed",
                            }}
                          >
                            Uptime: {service.uptime}
                          </Typography>
                        </Box>
                        <Chip
                          label={service.status}
                          sx={{
                            backgroundColor: service.color,
                            color: "white",
                            fontFamily: "Roboto Condensed",
                            fontWeight: 600,
                          }}
                        />
                      </Box>
                    </Paper>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Recent System Activity */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                borderRadius: 4,
                background: "rgba(255,255,255,0.95)",
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
                  📊 System Activity Log
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {[
                    {
                      event: "New user registration: John Doe",
                      time: "10 min ago",
                      type: "user",
                      color: Colors.Teal,
                    },
                    {
                      event: "Course 'Advanced Physics' updated",
                      time: "1 hour ago",
                      type: "course",
                      color: Colors.Indigo,
                    },
                    {
                      event: "System backup completed",
                      time: "3 hours ago",
                      type: "system",
                      color: Colors.Amber,
                    },
                    {
                      event: "Security scan - No threats",
                      time: "6 hours ago",
                      type: "security",
                      color: Colors.Pink,
                    },
                  ].map((activity, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 2,
                        borderRadius: 2,
                        background: `${activity.color}08`,
                        border: `1px solid ${activity.color}20`,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateX(8px)",
                          backgroundColor: `${activity.color}15`,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: "50%",
                          backgroundColor: activity.color,
                          mr: 2,
                          flexShrink: 0,
                        }}
                      />
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography
                          sx={{
                            fontFamily: "Roboto Condensed",
                            fontWeight: 600,
                            color: "#333",
                          }}
                        >
                          {activity.event}
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#666" }}>
                          {activity.time}
                        </Typography>
                      </Box>
                      <Chip
                        label={activity.type}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: activity.color,
                          color: activity.color,
                          fontFamily: "Roboto Condensed",
                          textTransform: "capitalize",
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Admin Tools */}
          <Grid size={{ xs: 12 }}>
            <Card
              sx={{ borderRadius: 4, background: "rgba(255,255,255,0.95)" }}
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
                  🚀 Administrative Tools
                </Typography>
                <Grid container spacing={2}>
                  {[
                    {
                      label: "User Management",
                      icon: <People />,
                      color: Colors.Lime,
                      desc: "Manage student & faculty accounts",
                    },
                    {
                      label: "System Settings",
                      icon: <Settings />,
                      color: Colors.Rose,
                      desc: "Configure platform settings",
                    },
                    {
                      label: "Send Notifications",
                      icon: <Notifications />,
                      color: Colors.Coral,
                      desc: "Broadcast announcements",
                    },
                    {
                      label: "Security Center",
                      icon: <Security />,
                      color: Colors.Violet,
                      desc: "Monitor system security",
                    },
                  ].map((tool, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          borderRadius: 3,
                          cursor: "pointer",
                          height: "100%",
                          background: `linear-gradient(135deg, ${tool.color}15, ${tool.color}05)`,
                          border: `2px solid ${tool.color}20`,
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          "&:hover": {
                            transform: "translateY(-8px)",
                            border: `2px solid ${tool.color}`,
                            boxShadow: `0 15px 35px ${tool.color}30`,
                          },
                        }}
                      >
                        <Box sx={{ textAlign: "center" }}>
                          <Box
                            sx={{
                              width: 60,
                              height: 60,
                              borderRadius: 3,
                              mx: "auto",
                              mb: 2,
                              background: `linear-gradient(45deg, ${tool.color}, ${tool.color}80)`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "white",
                            }}
                          >
                            {tool.icon}
                          </Box>
                          <Typography
                            sx={{
                              fontFamily: "Oswald",
                              fontWeight: 600,
                              mb: 1,
                              color: "#333",
                            }}
                          >
                            {tool.label}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#666",
                              fontFamily: "Roboto Condensed",
                            }}
                          >
                            {tool.desc}
                          </Typography>
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AdminDashboard;
