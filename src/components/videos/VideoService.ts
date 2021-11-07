import axios from "axios";
import { Video } from "./Video";
import config from "../../config";

const url = config.URL_API + "videos";

export const getVideos = async () => {
  return await axios.get(url);
};

export const postVideo = async (video: Video) => {
  return await axios.post(url, video);
};

export const updateVideo = async (id, video: Video) => {
  return await axios.put(`${url}/${id}`, video);
};

export const getVideo = async (id) => {
  return await axios.get(`${url}/${id}`);
};

export const deleteVideo = async (id) => {
  return await axios.delete(`${url}/${id}`);
};
