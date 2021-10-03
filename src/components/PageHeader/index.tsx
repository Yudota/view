import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

import * as s from "./styles";

export default function PageHeader() {
  return (
    <>
      <AppBar position="static">
        <s.StyledToolbar>
          <div>Logo</div>
          <div>
            <Button color="inherit">Home</Button>
          </div>
        </s.StyledToolbar>
      </AppBar>
    </>
  );
}
