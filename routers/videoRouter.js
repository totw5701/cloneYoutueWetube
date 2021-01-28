import express from "express";
import { deleteVideo, editVideo, upload, videoDetail, home } from "../controllers/videoController";
import routes from "../routes";

const videoRouter = express.Router();  

videoRouter.get("/", home);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;

