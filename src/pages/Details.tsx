import React from "react";
import { useLocation } from "react-router-dom";
import { FornecedorInterface } from "../components/HomePageWrapper";

export default function Details() {
  const { state } = useLocation<FornecedorInterface>();

  return <h2>Detalhes {state.id}</h2>;
}
