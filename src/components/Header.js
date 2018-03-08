import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
  return (
    <Menu>
      <Menu.Menu>
        <Link route="/">
          <a className="item">Home</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
