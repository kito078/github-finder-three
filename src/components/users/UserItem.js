import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import GithubContext from "../../hooks/GithubContext";

function UserItem({ user: { login, avatar_url } }) {
  const { getUser } = useContext(GithubContext);

  useEffect(() => {
    getUser(login);
  }, []);

  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link to={`/user/:${login}`}>Visit Profile</Link>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
