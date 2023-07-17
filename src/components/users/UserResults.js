import React, { useContext, useEffect, useState } from "react";
import UserItem from "./UserItem";
import GithubContext from "../../hooks/GithubContext";

function UserResults() {
  const { users, loading } = useContext(GithubContext);
  console.log(users);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
}

export default UserResults;
