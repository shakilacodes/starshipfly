import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

function ShipDetail(props) {
  const [shipDetail, setShipDetail] = useState([]);
  let shipName = props.match.params.shipName;
  useEffect(() => {
    function getShipDetail() {
      axios
        .get(`https://swapi.co/api/starships/?search=` + shipName)
        .then(res => {
          let shipDetail = res.data;
          setShipDetail(shipDetail.results);
        });
    }

    getShipDetail();
  }, []);

  let name = shipDetail.name;

  console.log(shipDetail);
  console.log(props.match.params.shipName);

  return (
    <>
      <Container>
        {shipDetail.map(ship => {
          return (
            <>
              <div>
                <br></br>
                <h1>{ship.name}</h1>
                <br></br>
              </div>
              <ListGroup className="list-group" key={ship.name}>
                <ListGroup.Item className="h4 list-group-item-action  d-flex justify-content-between align-items-center">
                  Model
                  <span className="badge badge-primary badge-pill">
                    {ship.model}
                  </span>
                </ListGroup.Item>

                <ListGroup.Item className="h4 list-group-item-action d-flex justify-content-between align-items-center">
                  Manufacturer
                  <span className="badge badge-primary badge-pill">
                    {ship.manufacturer}
                  </span>
                </ListGroup.Item>

                <ListGroup.Item className="h4  list-group-item-action d-flex justify-content-between align-items-center">
                  Class
                  <span className="badge badge-primary badge-pill">
                    {ship.starship_class}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="h4 list-group-item-action d-flex justify-content-between align-items-center">
                  Ship Cost (credits){" "}
                  <span className="badge badge-primary badge-pill">
                    {ship.cost_in_credits}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="h4 list-group-item-action d-flex justify-content-between align-items-center">
                  Ship Length{" "}
                  <span className="badge badge-primary badge-pill">
                    {ship.length}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="h4 list-group-item-action d-flex justify-content-between align-items-center">
                  Crew Needed{" "}
                  <span className="badge badge-primary badge-pill">
                    {ship.crew}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="h4 list-group-item-action d-flex justify-content-between align-items-center">
                  Passenger Capacity{" "}
                  <span className="badge badge-primary badge-pill">
                    {ship.passengers}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="h4 list-group-item-action d-flex justify-content-between align-items-center">
                  Max Speed{" "}
                  <span className="badge badge-primary badge-pill">
                    {ship.max_atmosphering_speed}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="h4 list-group-item-action d-flex justify-content-between align-items-center">
                  Hyperdrive{" "}
                  <span className="badge badge-primary badge-pill">
                    Rating {ship.hyperdrive_rating}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="h4 list-group-item-action d-flex justify-content-between align-items-center">
                  Max Megalights per Hour{" "}
                  <span className="badge badge-primary badge-pill">
                    {ship.MGLT}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="h4 list-group-item-action d-flex justify-content-between align-items-center">
                  Cargo Capacity (kg){" "}
                  <span className="badge badge-primary badge-pill">
                    {ship.cargo_capacity}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="h4 list-group-item-action d-flex justify-content-between align-items-center">
                  Consumable Capacity{" "}
                  <span className="badge badge-primary badge-pill">
                    {ship.consumables}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="h4 list-group-item-action d-flex justify-content-between align-items-center">
                  Films{" "}
                  <span className="badge badge-primary badge-pill">
                    {ship.films}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="h4 list-group-item-action d-flex justify-content-between align-items-center">
                  Pilots{" "}
                  <span className="badge badge-primary badge-pill">
                    {ship.pilots}
                  </span>
                </ListGroup.Item>
              </ListGroup>
            </>
          );
        })}
      </Container>
    </>
  );
}

export default ShipDetail;
