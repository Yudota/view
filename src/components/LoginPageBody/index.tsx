import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import * as s from "./styles";

export default function BodyHomePage() {
  return (
    <s.StyledBodyContainer>
      <s.StyledBodyWrapper>
        <TextField label="Email" type="email" variant="outlined" />
        <br />
        <TextField label="Senha" type="password" variant="outlined" />
        <Button style={{ marginTop: "16px" }}>
          <a href="/home">Login</a>
        </Button>
        <p>
          <a href="/">Esqueceu a senha?</a>
        </p>
      </s.StyledBodyWrapper>
    </s.StyledBodyContainer>
  );
}
