import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./repositories.css";

function Repositories() {
  const history = useHistory();
  const [repositories, setRepositories] = useState([]);
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    let repositories = localStorage.getItem("repositories");
    const user = localStorage.getItem("user");
    const userName = localStorage.getItem("userName");
    if (repositories !== null) {
      repositories = JSON.parse(repositories);

      setUserName(userName);
      setUser(user);
      setRepositories(repositories);
      localStorage.clear();
    } else {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="container">
      <div>
        <h1 className="title">
          {userName}
          {userName.toLowerCase().slice(-1) === "s" ? "'" : "'s"} repositories
        </h1>
        <Link id="linkBack" to="/">
          <button type="button">Back</button>
        </Link>
      </div>
      <ul className="list">
        {repositories.map((repository) => (
          <li key={repository.id}>
            <div>
              <span>Repository name: &nbsp; </span>
              <a
                href={`https://github.com/${user}/${repository.name}`}
                // eslint-disable-next-line react/jsx-no-target-blank
                target="_blank"
              >
                {repository.name}
              </a>
            </div>
            <div>
              <span>Star total: &nbsp;</span> {repository.stargazers_count}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Repositories;
