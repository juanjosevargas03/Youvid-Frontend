import React, { useState, useEffect } from "react";
import { User } from "./User";
import * as UserService from "./UserService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory, useParams, Link } from "react-router-dom";

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

    
      const res = await UserService.signin(user);
      if(res.status === 200){
		    localStorage.setItem('Usuario', JSON.stringify(res.data));
        toast.dark("Welcome");
        history.push("/home");

      }else {
        toast.dark(res.statusText);
      }

    

  };

 

  useEffect(() => {
    if(localStorage.getItem('Usuario') === null){
      setHiddenNavbar(true);
    }else{
      toast.dark("Welcome");
    history.push('/home');

    }
  }, []);

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-4">
        <div className="card rounded">
          <div className="card-body">
            <h3>Login</h3>
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
                  required
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
                  required
                />
              </div>

             
                <button className="btn btn-block rounded btn-primary mt-5">Enter</button>
              <div className="d-flex justify-content-end">
              <Link className="nav-link" to="/register">
                    Register
                  </Link>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
