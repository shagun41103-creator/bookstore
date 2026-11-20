
import Course from "../model/course.model.js";
import { cloudinary } from "../config/cloudinary.js";

const addCourse = async (req, res) => {
    try {
        // console.log(req.body);
        // console.log(req.file);
        const result = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                { folder: "bookStore" },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            ).end(req.file.buffer);
        });
        console.log(result);
        console.log("Cloudinaru uRl", result.secure_url);
        const data = await Course.create({
            name: req.body.name,
            image: result.secure_url,
        })

        res.status(200).json({
            message: "Image uploaded successfully!",
            file: req.file,
            data: data
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

const getCourse = async (req, res) => {
    try {
        const data = await Course.find();
        console.log(data)
        res.status(200).json(
            data
        );
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export { addCourse, getCourse };