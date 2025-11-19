import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Colors from "../../Const/Colors";

interface AnnouncementItem {
  id: number;
  title: string;
  content: string;
  date: string;
}

interface AnnouncementModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: (announcement: { title: string; content: string }) => void;
  announcement?: AnnouncementItem;
  mode: "create" | "view";
}

const AnnouncementModal: React.FC<AnnouncementModalProps> = ({
  open,
  onClose,
  onSubmit,
  announcement,
  mode,
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (mode === "view" && announcement) {
      setTitle(announcement.title);
      setContent(announcement.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [mode, announcement, open]);

  const handleSubmit = () => {
    if (title.trim() && content.trim() && onSubmit) {
      onSubmit({ title: title.trim(), content: content.trim() });
      setTitle("");
      setContent("");
      onClose();
    }
  };

  const handleClose = () => {
    setTitle("");
    setContent("");
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Oswald",
            fontWeight: 600,
            color: Colors.HeadingDarkGray,
          }}
        >
          {mode === "create" ? "Create New Announcement" : "Announcement Details"}
        </Typography>
        <IconButton onClick={handleClose} size="small" sx={{ color: Colors.secondary }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {mode === "view" && announcement && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Published on {announcement.date}
          </Typography>
        )}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            variant={mode === "view" ? "standard" : "outlined"}
            InputProps={{ readOnly: mode === "view" }}
          />
          <TextField
            label="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            fullWidth
            multiline
            rows={mode === "view" ? 6 : 4}
            variant={mode === "view" ? "standard" : "outlined"}
            InputProps={{ readOnly: mode === "view" }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={{ color: Colors.secondary }}>
          {mode === "view" ? "Close" : "Cancel"}
        </Button>
        {mode === "create" && (
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{ backgroundColor: Colors.Blue }}
            disabled={!title.trim() || !content.trim()}
          >
            Create
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default AnnouncementModal;
export type { AnnouncementItem };