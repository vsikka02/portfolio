import React from "react";
import {
  TableRow,
  TableCell,
  TableBody,
  Divider,
  Header,
  Icon,
  Table,
} from "semantic-ui-react";

export default function TitleComponent(props) {
  return (
    <>
      <Divider horizontal clearing>
        <Header as="h1" className="title component">
          <Icon name={props.iconName} />
          {props.title.toUpperCase()}
        </Header>
      </Divider>
    </>
  );
}
