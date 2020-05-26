import React, { useState } from "react";
import axios from "axios";

import "./repositories.css";

function Repositories() {
  return (
    <div id="container">
      <h1 className="title">Repositories</h1>
      <ul className="list">
        <li>Repository: repository 1</li>
        <li>Repository: repository 2</li>
        <li>Repository: repository 3</li>
        <li>Repository: repository 4</li>
        <li>Repository: repository 5</li>
        <li>Repository: repository 6</li>
        <li>Repository: repository 7</li>
        <li>Repository: repository 8</li>
        <li>Repository: repository 9</li>
        <li>Repository: repository 10</li>
      </ul>
    </div>
  );
}

export default Repositories;
