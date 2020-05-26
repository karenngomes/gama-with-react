import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./repositories.css";

function Repositories() {
  const history = useHistory();
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    let repositoriesName = localStorage.getItem("repositoriesName");
    if (repositoriesName !== null) {
      repositoriesName = JSON.parse(repositoriesName);

      setRepositories(repositoriesName);
      localStorage.clear();
    } else {
      history.push("/");
    }
  }, []);

  return (
    <div id="container">
      <div>
        <h1 className="title">Repositories</h1>
        <Link id="linkBack" to="/">
          <button type="button">Back</button>
        </Link>
      </div>
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
