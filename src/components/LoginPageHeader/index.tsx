import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

import * as s from "./styles";

export default function HeaderHomePage() {
  return (
    <>
      <AppBar position="static">
        <s.StyledToolbar>
          <div>Logo</div>
          <div>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Login</Button>
          </div>
        </s.StyledToolbar>
      </AppBar>
    </>
  );
}
