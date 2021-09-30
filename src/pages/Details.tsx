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
      <Button variant="contained">Adicionar Produto</Button>
      <Button variant="contained">Adicionar Serviço</Button>
      <Button variant="contained" color="secondary">
        Excluir fornecedor
      </Button>
      <Button variant="contained" color="primary">
        Salvar Alterações
      </Button>
    </>
  );
}
