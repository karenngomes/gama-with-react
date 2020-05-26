import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./home.css";

function Home() {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [error, setError] = useState(false);

  function handleSearch() {
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((response) => {
        const repositories = response.data;
        let repositoriesName = [];
        repositories.map((repository) => {
          repositoriesName.push(repository.name);
        });

        localStorage.setItem(
          "repositoriesName",
          JSON.stringify(repositoriesName)
        );
        setError(false);
        history.push("/repositories");
      })
      .catch(() => {
        setError(true);
      });
  }

  return (
    <div id="containerUser">
      <div id="content">
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
      {error && <span>Unknown error occurred. Try again.</span>}
    </div>
  );
}

export default Home;
