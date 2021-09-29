import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React from "react";
import TableProviders from "../components/HomePageWrapper";
import PageHeader from "../components/PageHeader";

export default function Home() {
  return (
    <>
      <PageHeader />
      <div>
        <Button>Filtrar</Button>
        <TextField variant="outlined" defaultValue="Digite o fornecedor" />
        <Button>Adicionar...</Button>
      </div>
      <TableProviders />
    </>
  );
}
