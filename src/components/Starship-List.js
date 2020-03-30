import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

export default function StarshipList({ data }) {
  return (
    <>
      <div>
        <br></br>
        <h1>All the Starships</h1>
        <br></br>
      </div>
      <Container>
        {data.map(ship => {
          return (
            <Table className="table table-hover" responsive="sm">
              <tbody>
                <tr className="table-primary text-left">
                  <td
                    className="font-weight-bold"
                    scope="col-4"
                    key={ship.name}
                  >
                    <Link to={`/ship-detail/${ship.name}`}>
                      <h5>{ship.name}</h5>
                    </Link>
                  </td>
                  <td scope="col-4">{ship.model}</td>
                  <td scope="col-4">{ship.manufacturer}</td>
                </tr>
              </tbody>
            </Table>
          );
        })}
      </Container>
    </>
  );
}
