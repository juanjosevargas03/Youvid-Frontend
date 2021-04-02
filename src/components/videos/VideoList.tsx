import React, { useEffect, useState } from "react";
import { Video } from "./Video";
import VideoItem from "./VideoItem";
import * as videoService from "./VideoService";
import { useHistory, useParams, Link } from "react-router-dom";

import "./VideoItem.css";



interface props {
  setHiddenNavbar: (b) => void;
}

const VideoList = ({setHiddenNavbar}: props) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const history = useHistory();


  const loadVideos = async () => {
    const res = await videoService.getVideos();
    setVideos(res.data.reverse());
  };

  useEffect(() => {
    if(localStorage.getItem('Usuario') === null){
      history.push('/');
    }else{
      loadVideos();
    setHiddenNavbar(false);
    }
    

  }, []);

  return (
    <div className="row">
      {videos &&
        videos.map((video) => (
          <VideoItem video={video} key={video._id} loadVideos={loadVideos} />
        ))}
    </div>
  );
};

export default VideoList;
