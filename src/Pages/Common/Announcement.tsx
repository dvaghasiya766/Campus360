import { Box, Button, Typography, Fab } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import MainTitle from "../../Components/Common/Headings/MainTitle";
import AnnouncementModal, {
  AnnouncementItem,
} from "../../Components/Common/AnnouncementModal";
import AnnouncementCard from "../../Components/Common/AnnouncementCard";
import Colors from "../../Const/Colors";

const Announcement = () => {
  const [announcements, setAnnouncements] = useState<AnnouncementItem[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"create" | "view">("create");
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<
    AnnouncementItem | undefined
  >();

  const handleCreateAnnouncement = (announcement: {
    title: string;
    content: string;
  }) => {
    const newAnnouncement: AnnouncementItem = {
      id: Date.now(),
      title: announcement.title,
      content: announcement.content,
      date: new Date().toLocaleDateString(),
    };
    setAnnouncements([newAnnouncement, ...announcements]);
  };

  const handleOpenCreate = () => {
    setModalMode("create");
    setSelectedAnnouncement(undefined);
    setModalOpen(true);
  };

  const handleOpenView = (announcement: AnnouncementItem) => {
    setModalMode("view");
    setSelectedAnnouncement(announcement);
    setModalOpen(true);
  };

  return (
    <Box width="100%" position="relative">
      <MainTitle
        title="Announcement"
        subtitle="Update with Campus's Announcements..."
        color={Colors.HeadingDarkGray}
      />

      <Box sx={{ p: 3 }}>
        {announcements.length === 0 ? (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{ py: 8 }}
          >
            <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
              No announcements yet
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleOpenCreate}
              sx={{ backgroundColor: Colors.Blue }}
            >
              Create First Announcement
            </Button>
          </Box>
        ) : (
          <Box display="flex" flexDirection="column" gap={3}>
            {announcements.map((announcement, index) => {
              const colors = [
                Colors.Blue,
                Colors.Purple,
                Colors.Coral,
                Colors.Teal,
              ];
              const cardColor = colors[index % colors.length];
              return (
                <AnnouncementCard
                  key={announcement.id}
                  announcement={announcement}
                  onView={handleOpenView}
                  color={cardColor}
                />
              );
            })}
          </Box>
        )}
      </Box>

      {announcements.length > 0 && (
        <Fab
          color="primary"
          aria-label="add"
          onClick={handleOpenCreate}
          sx={{
            position: "fixed",
            bottom: 24,
            right: 24,
            backgroundColor: Colors.Blue,
          }}
        >
          <AddIcon />
        </Fab>
      )}

      <AnnouncementModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={modalMode === "create" ? handleCreateAnnouncement : undefined}
        announcement={selectedAnnouncement}
        mode={modalMode}
      />
    </Box>
  );
};

export default Announcement;
