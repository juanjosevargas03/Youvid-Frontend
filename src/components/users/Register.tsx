import React, { useState, useEffect } from "react";
import { User } from "./User";
import * as UserService from "./UserService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory, useParams } from "react-router-dom";

interface params {
  id: string;
}

interface props {
  setHiddenNavbar: (b) => void;
}

const UserForm = ({setHiddenNavbar}: props) => {
  const history = useHistory();
  const params = useParams<params>();

  const initialState = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState<User>(initialState);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
      const res = await UserService.signup(user);
      if(res.status === 200){
        localStorage.setItem('Usuario', JSON.stringify(res.data));
        toast.dark("Welcome");
        history.push("/home");

      }else {
        toast.dark(res.statusText);
      }

    

  };


  useEffect(() => {
    setHiddenNavbar(true);
  }, []);

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-4">
        <div className="card rounded">
          <div className="card-body rounded">
            <h3>New User</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control rounded"
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  placeholder="email"
                  autoFocus
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control rounded"
                  type="text"
                  name="password"
                  value={user.password}
                  onChange={handleInputChange}
                  placeholder="password"
                />
              </div>

            
                <button className="btn btn-block rounded btn-primary mt-5">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
