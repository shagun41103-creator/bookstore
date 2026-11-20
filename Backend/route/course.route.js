import express from "express";
// import { getBook } from "../controller/book.controller.js";
import  {addCourse,getCourse}  from "../controller/course.controller.js";

const router = express.Router();

router.get("/get", getCourse);
router.post("/add",addCourse);

export default router;