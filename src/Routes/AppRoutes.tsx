import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import StudentDashboard from "../Pages/Student/Dashboard";
import StudentAssignment from "../Pages/Student/Assignment";
import AdminDashboard from "../Pages/Admin/Dashboard";
import FacultyDashboard from "../Pages/Faculty/Dashboard";
import Courses from "../Pages/Student/Courses";
import ViewCourseDetails from "../Pages/Student/ViewCourseDetails";
import Announcement from "../Pages/Common/Announcement";
import Discussion from "../Pages/Student/Discussion";
import Profile from "../Pages/Common/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Student Routes */}
      <Route path="/student" element={<DashboardLayout userType="student" />}>
        <Route index element={<StudentDashboard />} />
        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="assignment" element={<StudentAssignment />} />
        <Route path="courses" element={<Courses />} />
        <Route path="course-details" element={<ViewCourseDetails />} />
        <Route path="announcement" element={<Announcement />} />
        <Route path="discussion" element={<Discussion />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<DashboardLayout userType="admin" />}>
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="courses" element={<div>Admin Courses</div>} />
        <Route path="users" element={<div>Users Management</div>} />
        <Route path="notice" element={<div>Notice Management</div>} />
        <Route path="reports" element={<div>Reports</div>} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* Faculty Routes */}
      <Route path="/faculty" element={<DashboardLayout userType="faculty" />}>
        <Route index element={<FacultyDashboard />} />
        <Route path="dashboard" element={<FacultyDashboard />} />
        <Route path="courses" element={<div>Faculty Courses</div>} />
        <Route path="assignment" element={<div>Faculty Assignment</div>} />
        <Route path="discussion" element={<div>Faculty Discussion</div>} />
        <Route path="announcement" element={<Announcement />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
