import React, { useState } from "react";
import axios from "axios";

import "./home.css";

function Home() {
  const [user, setUser] = useState("");

  function handleSearch() {
    axios.get(`https://api.github.com/users/${user}/repos`).then((response) => {
      const repositories = response.data;
      let repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });

      localStorage.setItem(
        "repositoriesName",
        JSON.stringify(repositoriesName)
      );
    });
  }

  return (
    <div id="containerUser">
      <input
        className="inputUser"
        placeholder="User"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button id="buttonUser" type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default Home;
