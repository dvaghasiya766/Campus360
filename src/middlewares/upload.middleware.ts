import multer, { FileFilterCallback } from "multer";
import { Request } from "express";

// MULTER MEMORY STORAGE (buffer upload)
const storage = multer.memoryStorage();

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  // Only allow image MIME types
  if (!file.mimetype.startsWith("image/")) {
    cb(new Error("Only image files are allowed!"));
  } else {
    cb(null, true);
  }
};

// Limit Size 5MB
export const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB
  },
  fileFilter,
});
