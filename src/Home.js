import React, { useState } from "react";
import axios from "axios";

function Home() {
  const [user, setUser] = useState("");

  function handleSearch() {
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((response) => console.log(response.data));
  }

  return (
    <>
      <input
        className="inputUser"
        placeholder="User"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </>
  );
}

export default Home;
