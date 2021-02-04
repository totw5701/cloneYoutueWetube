import express from "express";
import { deleteVideo, getEditVideo, postEditVideo, postUpload, getUpload, videoDetail, home } from "../controllers/videoController";
import routes from "../routes";
import {uploadVideo} from "../middlewares";

const videoRouter = express.Router();  

videoRouter.get("/", home);

// upload video
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);    // routes.functuin인데 ()이걸 하지 않으면 펑션을 작동하지 않고 그냥 참조만 한다. `Function: videoDetail` 이런 값만 가지고 온다.

// edit video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;

