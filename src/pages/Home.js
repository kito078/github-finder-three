import React from "react";
import UserResults from "../components/users/UserResults";
import SearchUser from "../components/users/SearchUser";

function Home() {
  return (
    <div>
      <SearchUser />
      <UserResults />
    </div>
  );
}

export default Home;
