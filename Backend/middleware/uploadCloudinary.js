import cloudinary from "../config/cloudinary.js";

export const uploadImage = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "bookStore"
        });
        res.status(200).json({
            message: "Image uploaded successfully",
            imageUrl: result.secure_url,
            publicId: result.public_id
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Cloudinary upload failed"
        });
    }
};