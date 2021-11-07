import axios from "axios";
import { User } from "./User";
import config from "../../config";

const url = config.URL_API; 

export const signup = async (user: User) => {
  return await axios.post(url + "signup", user);
};

export const signin = async (user: User) => {
  return await axios.post(url + "signin", user);
};

