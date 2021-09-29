import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
export interface FornecedorInterface {
  id: string;
  fornecedor: string;
  status: string;
}

function createData(
  id: string,
  fornecedor: string,
  status: string
): FornecedorInterface {
  return { id, fornecedor, status };
}

const elements = [
  createData("1", "Provider 1", "Active"),
  createData("2", "Provider 2", "Inactive"),
  createData("3", "Provider 3", "Active"),
  createData("4", "Provider 4", "Inactive"),
  createData("5", "Provider 5", "Active"),
  createData("6", "Provider 6", "Inactive"),
  createData("7", "Provider 7", "Active"),
  createData("8", "Provider 8", "Inactive"),
  createData("9", "Provider 9", "Active"),
  createData("10", "Provider 10", "Inactive"),
];

export default function TableProviders() {
  const classes = useStyles();

  const history = useHistory();

  const handleClick = (element: any) => {
    history.push(`${element.id}/details`, element);
  };

  const renderTableBody = () => {
    return elements.map((element) => (
      <TableRow key={element.id}>
        <TableCell align="left" component="th" scope="row">
          {element.id}
        </TableCell>
        <TableCell align="center">{element.fornecedor}</TableCell>
        <TableCell align="center">{element.status}</TableCell>
        <TableCell align="center">
          <Button
            key={element.id}
            onClick={() => {
              handleClick(element);
            }}
          >
            Detalhes
          </Button>
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Id</TableCell>
            <TableCell align="center">Fornecedor</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Opções</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderTableBody()}</TableBody>
      </Table>
    </TableContainer>
  );
}
