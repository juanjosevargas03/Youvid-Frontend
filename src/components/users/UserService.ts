import axios from "axios";
import { User } from "./User";

const url = "http://localhost:4000/";

export const signup = async (user: User) => {
  return await axios.post(url + "signup", user);
};

export const signin = async (user: User) => {
  return await axios.post(url + "signin", user);
};

