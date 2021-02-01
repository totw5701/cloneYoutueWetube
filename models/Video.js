import mongoose from "mongoose";

// 모델과 스키마를 짜보자. 스키마는 구조 정도라고 생각하시게

const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "File URL is requred"
    },
    title: {
        type: String,
        required: "Title is required"
    },
    description: String,
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId, // 댓글 타입이 이미지인지 줄글인지 동영상인지 음악인지 모르니까 Reference의 Schema를 따른다는말 같음. 아님 ㅋㅋㅋㅋㅋ [1,2,4,6, ...] 처럼 video와 연결 된 comment의 ID가 저장됨
        ref: "Comment"
    }] // 이렇게 비디오에 comment의 ID를 array로 저장시키는 방법이 있고. Comment에 Video ID를 입력해주는 2가지 방법이 있다. 이번에는 Video에 Comment Id를 입력해 주는 방법을 쓰자. Comment에 이 줄을 입력해서 Video의 Id를 지정해주는 방법도 있다. video: {type: mongoose.Schema.Types.ObjectId, ref: "Video"
    
    

});

const model = mongoose.model("Video", VideoSchema);
export default model;
