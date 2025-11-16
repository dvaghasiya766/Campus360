import { Router, Request, Response } from "express";
import cloudinary from "../config/cloudinary";
import { upload } from "../middlewares/upload.middleware";

const router = Router();

router.post(
  "/uploadImage",
  upload.single("image"),
  async (req: Request, res: Response) => {
    try {
      // Validation: Check file
      if (!req.file) {
        return res.status(400).json({
          status: false,
          message: "Image is required!",
        });
      }

      // Uploading to Cloudinary
      const uploadResult = await cloudinary.uploader.upload_stream(
        {
          folder: "uploads", // Cloudinary folder (optional)
          resource_type: "image",
        },
        (error, result) => {
          if (error || !result) {
            return res.status(500).json({
              status: false,
              message: "Image upload failed",
              error: error?.message,
            });
          }

          // Success response
          return res.status(200).json({
            status: true,
            message: "Image uploaded successfully",
            data: {
              url: result.secure_url,
              public_id: result.public_id,
              width: result.width,
              height: result.height,
              format: result.format,
              bytes: result.bytes,
            },
          });
        }
      );

      // Write file buffer to Cloudinary upload stream
      uploadResult.end(req.file.buffer);
    } catch (err: any) {
      return res.status(500).json({
        status: false,
        message: "Internal Server Error",
        error: err.message,
      });
    }
  }
);

export default router;
