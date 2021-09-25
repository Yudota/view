import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

import * as s from "./styles";

export default function Footer() {
  return (
    <s.StyledToolbar>
      <p>Sobre nós</p>
      <p>Trabalhe conosco</p>
      <Button color="inherit">Login</Button>
    </s.StyledToolbar>
  );
}
