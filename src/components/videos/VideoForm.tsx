import React, { useState, useEffect } from "react";
import { Video } from "./Video";
import * as videoService from "./VideoService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory, useParams } from "react-router-dom";

interface params {
  id: string;
}

interface props {
  setHiddenNavbar: (b) => void;
}

const VideoForm = ({setHiddenNavbar}: props) => {
  const history = useHistory();
  const params = useParams<params>();

  const initialState = {
    title: "",
    description: "",
    url: "",
  };

  const [video, setVideo] = useState<Video>(initialState);

  const handleInputChange = (e) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      await videoService.updateVideo(params.id, video);
      toast.dark("video updated");
    } else {
      await videoService.postVideo(video);
      toast.dark("New video added");
    }

    setVideo(initialState);
    history.push("/home");
  };

  const getVideo = async () => {
    if (params.id) {
      const res = await videoService.getVideo(params.id);
      setVideo(res.data);
    }
  };

  useEffect(() => {

    if(localStorage.getItem('Usuario') === null){
      history.push('/');
    }else{
      getVideo();
      setHiddenNavbar(false);
    }
   
  }, []);

  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <div className="card rounded">
          <div className="card-body">
            <h3>New video</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control rounded"
                  type="text"
                  name="title"
                  value={video.title}
                  onChange={handleInputChange}
                  placeholder="write a title for this video"
                  autoFocus
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control rounded"
                  type="text"
                  name="url"
                  value={video.url}
                  onChange={handleInputChange}
                  placeholder="https://somesite.com"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control rounded"
                  rows={3}
                  name="description"
                  value={video.description}
                  onChange={handleInputChange}
                  placeholder="write a description"
                />
              </div>

              {params.id ? (
                <button className="btn btn-block rounded btn-primary">update video</button>
              ) : (
                <button className="btn btn-block rounded btn-primary">Save video</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
