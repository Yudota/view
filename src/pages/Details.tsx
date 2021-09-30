import Button from "@material-ui/core/Button";
import React from "react";
import { useLocation } from "react-router-dom";
import { FornecedorInterface } from "../components/HomePageWrapper";

export default function Details() {
  const { state } = useLocation<FornecedorInterface>();

  return (
    <>
      <h2>Detalhes {state.id}</h2>
      <h3>Informações sobre o Fornecedor {state.id}</h3>
      <Button>Adicionar Produto</Button>
      <Button>Adicionar Serviço</Button>
      <Button>Salvar Alterações</Button>
    </>
  );
}
