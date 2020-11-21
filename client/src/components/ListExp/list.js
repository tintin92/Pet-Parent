import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
// listing expenses from the expense array
const ListExp = ({ expenses }) => (
  <div>
    <ListGroup>
      {expenses.map(item => (
        <ListGroupItem key={item.id}>
          {item.name} - $ {item.amount}
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
)

export default ListExp;