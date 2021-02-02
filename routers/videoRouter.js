import express from "express";
import { deleteVideo, editVideo, postUpload, getUpload, videoDetail, home } from "../controllers/videoController";
import routes from "../routes";
import {uploadVideo} from "../middlewares";

const videoRouter = express.Router();  

videoRouter.get("/", home);

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;

