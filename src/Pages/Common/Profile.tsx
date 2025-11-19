import {
  Box,
  Avatar,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Divider,
  Paper,
  IconButton,
} from "@mui/material";
import {
  Email,
  Phone,
  Person,
  School,
  CalendarToday,
  Edit,
} from "@mui/icons-material";
import React from "react";
import Colors from "../../Const/Colors";

const UserData = {
  name: "John Doe",
  email: "john.doe@example.com",
  enrollmentNumber: "123456",
  role: "Student",
  phone: "000000000000",
  gender: "Male",
  dateOfBirth: "1990-01-01",
  batch: "2023",
  semester: "2",
  campusStatus: "active" as const,
};

const Profile = () => {
  const getRandomAvatarColor = () => {
    const avatarColors = [
      Colors.Violet,
      Colors.Emerald,
      Colors.Coral,
      Colors.Rose,
      Colors.Indigo,
      Colors.Teal,
      Colors.Amber,
      Colors.Sky,
      Colors.Lime,
      Colors.Pink,
      Colors.Purple,
      Colors.Blue,
    ];
    return avatarColors[Math.floor(Math.random() * avatarColors.length)];
  };

  return (
    <Box
      width="100%"
      mb={{ xs: 4, md: 0 }}
      p={{ xs: 1, sm: 2, md: 3 }}
      sx={{ minHeight: "100vh" }}
    >
      <Card
        elevation={8}
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
          border: `1px solid ${Colors.SoftBlue}`,
        }}
      >
        <Box
          sx={{
            background: `linear-gradient(135deg, ${Colors.DarkBlue} 0%, ${Colors.Indigo} 50%, ${Colors.HeadingBlue} 100%)`,
            p: { xs: 2, sm: 3, md: 4 },
            position: "relative",
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: { xs: 8, sm: 16 },
              right: { xs: 8, sm: 16 },
              color: "white",
              backgroundColor: "rgba(255,255,255,0.2)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.3)" },
            }}
          >
            <Edit />
          </IconButton>

          <Box
            display="flex"
            alignItems="center"
            flexDirection={{ xs: "column", sm: "row" }}
            textAlign={{ xs: "center", sm: "left" }}
          >
            <Avatar
              sx={{
                width: { xs: 80, sm: 100, md: 120 },
                height: { xs: 80, sm: 100, md: 120 },
                mr: { xs: 0, sm: 3, md: 4 },
                mb: { xs: 2, sm: 0 },
                border: `6px solid ${Colors.WhiteSmoke}`,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                fontWeight: "bold",
                backgroundColor: getRandomAvatarColor(),
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              }}
              src=""
              alt={UserData.name}
            >
              {UserData.name.charAt(0)}
            </Avatar>
            <Box flex={1}>
              <Typography
                variant="h4"
                fontWeight="bold"
                color="white"
                mb={1}
                sx={{ fontSize: { xs: "1.75rem", sm: "2.125rem", md: "3rem" } }}
              >
                {UserData.name}
              </Typography>
              <Chip
                label={UserData.role}
                sx={{
                  backgroundColor: Colors.Coral,
                  color: "white",
                  fontWeight: "bold",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  px: { xs: 1.5, sm: 2 },
                  py: { xs: 0.5, sm: 1 },
                  mb: 2,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                }}
              />
            </Box>
          </Box>
        </Box>

        <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
          <Box display="flex" alignItems="center" mb={3}>
            <Typography
              variant="h5"
              fontWeight="bold"
              color={Colors.HeadingBlue}
              flex={1}
              sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem" } }}
            >
              Personal Information
            </Typography>
          </Box>
          <Divider
            sx={{ mb: 4, borderColor: Colors.HeadingBlue, borderWidth: 2 }}
          />

          <Grid container spacing={{ xs: 2, sm: 3 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 2, sm: 2.5, md: 3 },
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${Colors.SoftBlue} 0%, #f8faff 100%)`,
                  border: `2px solid ${Colors.Sky}`,
                  transition: "transform 0.2s",
                  "&:hover": { transform: "translateY(-4px)" },
                }}
              >
                <Box display="flex" alignItems="center" mb={2}>
                  <Box
                    sx={{
                      backgroundColor: Colors.Sky,
                      borderRadius: "50%",
                      p: 1,
                      mr: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Email
                      sx={{ color: "white", fontSize: { xs: 18, sm: 20 } }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    color={Colors.DarkBlue}
                    fontWeight="bold"
                    sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
                  >
                    Email
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    wordBreak: "break-all",
                  }}
                >
                  {UserData.email}
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 2, sm: 2.5, md: 3 },
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${Colors.PaleGreen} 0%, #f7fcf7 100%)`,
                  border: `2px solid ${Colors.Lime}`,
                  transition: "transform 0.2s",
                  "&:hover": { transform: "translateY(-4px)" },
                }}
              >
                <Box display="flex" alignItems="center" mb={2}>
                  <Box
                    sx={{
                      backgroundColor: Colors.Lime,
                      borderRadius: "50%",
                      p: 1,
                      mr: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <School
                      sx={{ color: "white", fontSize: { xs: 18, sm: 20 } }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    color={Colors.DarkGreen}
                    fontWeight="bold"
                    sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
                  >
                    Enrollment
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}
                >
                  {UserData.enrollmentNumber}
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 2, sm: 2.5, md: 3 },
                  borderRadius: 3,
                  background: `linear-gradient(135deg, #f3e8ff 0%, #fefbff 100%)`,
                  border: `2px solid ${Colors.Indigo}`,
                  transition: "transform 0.2s",
                  "&:hover": { transform: "translateY(-4px)" },
                }}
              >
                <Box display="flex" alignItems="center" mb={2}>
                  <Box
                    sx={{
                      backgroundColor: Colors.Indigo,
                      borderRadius: "50%",
                      p: 1,
                      mr: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Phone
                      sx={{ color: "white", fontSize: { xs: 18, sm: 20 } }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    color={Colors.DarkPurple}
                    fontWeight="bold"
                    sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
                  >
                    Phone
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}
                >
                  {UserData.phone}
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 2, sm: 2.5, md: 3 },
                  borderRadius: 3,
                  background: `linear-gradient(135deg, #fef3e2 0%, #fffbf5 100%)`,
                  border: `2px solid ${Colors.Coral}`,
                  transition: "transform 0.2s",
                  "&:hover": { transform: "translateY(-4px)" },
                }}
              >
                <Box display="flex" alignItems="center" mb={2}>
                  <Box
                    sx={{
                      backgroundColor: Colors.Coral,
                      borderRadius: "50%",
                      p: 1,
                      mr: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Person
                      sx={{ color: "white", fontSize: { xs: 18, sm: 20 } }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    color={Colors.DarkOrange}
                    fontWeight="bold"
                    sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
                  >
                    Gender
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}
                >
                  {UserData.gender}
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 2, sm: 2.5, md: 3 },
                  borderRadius: 3,
                  background: `linear-gradient(135deg, #fdf2f8 0%, #fefcfe 100%)`,
                  border: `2px solid ${Colors.Rose}`,
                  transition: "transform 0.2s",
                  "&:hover": { transform: "translateY(-4px)" },
                }}
              >
                <Box display="flex" alignItems="center" mb={2}>
                  <Box
                    sx={{
                      backgroundColor: Colors.Rose,
                      borderRadius: "50%",
                      p: 1,
                      mr: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CalendarToday
                      sx={{ color: "white", fontSize: { xs: 18, sm: 20 } }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    color={Colors.DarkPink}
                    fontWeight="bold"
                    sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
                  >
                    Birth Date
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}
                >
                  {UserData.dateOfBirth}
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 2, sm: 2.5, md: 3 },
                  borderRadius: 3,
                  background: `linear-gradient(135deg, #ecfdf5 0%, #f7fef9 100%)`,
                  border: `2px solid ${Colors.Emerald}`,
                  transition: "transform 0.2s",
                  "&:hover": { transform: "translateY(-4px)" },
                }}
              >
                <Box display="flex" alignItems="center" mb={2}>
                  <Box
                    sx={{
                      backgroundColor: Colors.Emerald,
                      borderRadius: "50%",
                      p: 1,
                      mr: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <School
                      sx={{ color: "white", fontSize: { xs: 18, sm: 20 } }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    color={Colors.DarkTeal}
                    fontWeight="bold"
                    sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
                  >
                    Academic
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}
                >
                  Batch {UserData.batch} • Sem {UserData.semester}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
