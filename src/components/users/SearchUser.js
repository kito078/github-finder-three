import React, { useContext, useState } from "react";
import GithubContext from "../../hooks/GithubContext";
import { searchUsers } from "../../hooks/GithubAction";

function SearchUser() {
  const [text, setText] = useState("");

  const { users, dispatch } = useContext(GithubContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === "") {
      alert("please enter something");
    } else {
      dispatch({
        type: "SET_LOADING",
      });
      const users = await searchUsers(text);

      dispatch({
        type: "SEARCH_USERS",
        payload: users,
      });

      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                onChange={handleChange}
                value={text}
              />
              <button
                type="submit"
                className="absolute  right-0 rounded-1-none w-26 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            onClick={() => dispatch({ type: "SET_CLEAR" })}
            className="btn btn-ghost btn-lg"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default SearchUser;
