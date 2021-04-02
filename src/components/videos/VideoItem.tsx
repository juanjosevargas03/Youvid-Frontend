import React from "react";
import { Video } from "./Video";
import ReactPlayer from "react-player";
import { useHistory } from "react-router-dom";
import * as videoService from "./VideoService";

import "./VideoItem.css";

interface props {
  video: Video;
  loadVideos: () => void;
}

const VideoItem = ({ video, loadVideos }: props) => {
  const history = useHistory();

  const deleteVideo = async () => {
    await videoService.deleteVideo(video._id);
    loadVideos();
  };

  return (
    <div className="col-md-4 contenedor mt-3" >
      <div className="card card-body video-card">
        <div className="d-flex justify-content-between">
          <h1 onClick={() => history.push(`/update/${video._id}`)}>
            {video.title}
          </h1>
          <span className="text-danger" hidden onClick={() => deleteVideo()}>
            X
          </span>
        </div>
        <p>{video.description}</p>
        <div className="embed-responsive embed-responsive-16by9">
          <ReactPlayer url={video.url} />
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
