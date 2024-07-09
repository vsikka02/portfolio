import { Grid, GridColumn, GridRow } from 'semantic-ui-react';
import HeaderComponent from './HeaderComponent';
import IntroductionSection from './IntroductionSection';
import JourneyComponent from './JourneyComponent'
import TitleComponent from './TitleComponent';
import ProjectCard from './ProjectCard';
import BlueprintComponent from './BlueprintComponent';
import LetsConnect from './LetsConnect';
import FooterSection from './FooterSection';

export default function SiteContainer() {
    return (
        <>
        <Grid columns={1} padded width={16}>
            <GridRow>
                <GridColumn width={16}>
                    {/* <HeaderComponent/> */}
                </GridColumn>
            </GridRow>
            <GridRow>
                <GridColumn width={16}>
                <IntroductionSection/>
                </GridColumn>
            </GridRow>
            <TitleComponent title="Follow my journey" iconName="map outline"/>
            <GridRow centered className='journey component'>
                <GridColumn width={16}>
                    <JourneyComponent/>
                </GridColumn>
            </GridRow>
            <TitleComponent title="My Blueprint" iconName="terminal"/>
            <GridRow>
                <GridColumn width={16}>
                    <BlueprintComponent/>
                </GridColumn>
            </GridRow>
            <TitleComponent title="Crafted Creations" iconName="paint brush"/>
            <GridRow>
                <GridColumn width = {16}>
                    <ProjectCard/>
                </GridColumn>
            </GridRow>
            <TitleComponent title=" Let's Connect!" iconName="add user"/>
            <GridRow>
                <GridColumn width = {16}>
                    <LetsConnect/>
                </GridColumn>
            </GridRow>
        </Grid>
        <FooterSection/>
        </>
    );
}