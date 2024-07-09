import React from "react";
import { GridColumn, Grid, Icon } from "semantic-ui-react";


export default function LetsConnect() {
    return (
        <Grid textAlign="center" width = {16}>
            <GridColumn width={2}></GridColumn>
            <GridColumn width={2}>
                <Icon name = "linkedin" size="huge"></Icon>
            </GridColumn>
            <GridColumn width={2}>
                <Icon name = "spotify" size="huge"></Icon>
            </GridColumn>
            <GridColumn width={2}>
                <Icon name = "mail" size="huge"></Icon>
            </GridColumn>
            <GridColumn width={2}>
                <Icon name = "github" size="huge"></Icon>
            </GridColumn>
            <GridColumn width={2}>
                <Icon name = "instagram" size="huge"></Icon>
            </GridColumn>
            <GridColumn width={2}>
                <Icon name = "twitter" size="huge"></Icon>
            </GridColumn>
            <GridColumn width={2}></GridColumn>
        </Grid>
    );
}