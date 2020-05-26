import React, { useEffect, useState } from "react";

import "./repositories.css";

function Repositories() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    let repositoriesName = localStorage.getItem("repositoriesName");
    repositoriesName = JSON.parse(repositoriesName);

    setRepositories(repositoriesName);
    localStorage.clear();
  }, []);

  return (
    <div id="container">
      <h1 className="title">Repositories</h1>
      <ul className="list">
        {repositories.map((repository) => (
          <li key={repository}>
            <span>Repository name: </span>
            {repository}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Repositories;
