import './App.css';
import './App.scss';
import Typist from 'react-typist';
import ProfilePicture from './portfolio_image.jpg';
import Resume from './resume.jpg';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub'
import CodeIcon from '@material-ui/icons/Code';
import React from 'react'
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkIcon from '@material-ui/icons/Link';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import EmailIcon from '@material-ui/icons/Email';
import SkillFlyer from './SkillFlyer.jpg';
import ResumeFile from './Sikka_Vansh.pdf';


function App() {
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      <div className="main">
      <div className = "navbar">
          <Tabs
          value={value}
          onChange={handleChange}
          className = "navbar-root"
          variant="fullWidth"
        >
            <Tab className ="tab" label="MEET ME!" href="#welcome-section"/>
            <Tab className = "tab" label="PROJECTS" href="#project-section" />
            <Tab className = "tab" label="RESUME" href="#resume-section"/>
            <Tab className = "tab" label="CONNECT" href="#connection-section"/>
          </Tabs>
        </div>
          <div className = "welcome-section" id = "welcome-section">
          <div>
          <h1 className = "title">Hello, I am Vansh Sikka!</h1>
          </div>
          <img src={ProfilePicture} className = "profile-picture" alt = "profile"/>
          <Typist className = "typist-header">
            <span>CS+Stats Student @ UIUC.</span>
            <Typist.Backspace count={24} delay={1000} />
            <span>Full Stack Web Developer.</span>
            <Typist.Backspace count={25} delay={1000}/>
            <span>Java Developer.</span>
            <Typist.Backspace count={15} delay = {1000}/>
            <span>Data Analyst.</span>
            <Typist.Backspace count={13} delay = {1000}/>
            <span>Entreprenuer.</span>
            <Typist.Backspace count={13} delay={1000}/>
            <span>Software Engineer.</span>
          </Typist>
          <p className = "pitch">
            I am a software engineer who is currently studying CS + Stats at The University of Illinois at Urbana Champaign
            with a budding interest in AI and ML. I am passionate about utilizing my programming and data analysis abilities to bring
            creative ideas to fruition.
          </p> 
        </div>
        <h6 className="arrows-header1"> PROJECTS </h6>
        <div className = "arrows">
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
        </div>
      <div className="project-section" id = "project-section">
      <Grid container className="grid-root" spacing = '2'>
      <Grid item xs={12}>
        <Grid container justify="center" spacing = '5'>
            <Grid item>
              <Card className="card-root">
              <CardHeader
                avatar={
                  <CodeIcon className = "icons"/>
                }
                title="SkillFlyer"
                subheader="May 2020 - August 2020"
                className = "card-header"
              />
              <CardMedia
                className="card-media"
                image= {SkillFlyer}
                title="SkillFlyer Project Image"
              />
              <CardContent className = "card-content">
                <Typography variant="body2" color="textSecondary" component="p">
                  Utilized React and Node JS in order to create a full stack web application that was deployed utilizing Heroku. 
                  SkillFlyer is a crowd-sourced application, which allowed users to post and rate educational videos based on 
                  effectiviness so that students can avoid the hassle of constantly searching for a YouTube video that would teach
                   them simple subtopics of a overarching class or topic.  
                </Typography>
              </CardContent>
              <CardActions disableSpacing className = "card-actions">
                <IconButton aria-label="share">
                  <GitHubIcon className = "icons" href = ""/>
                </IconButton>
                <IconButton aria-label = "link" href = "http://www.skillflyer.com/">
                  <LinkIcon className = "icons"/>
                </IconButton>
              </CardActions>
              </Card>
              </Grid>
              <Grid item>
              <Card className="card-root">
              <CardHeader
                avatar={
                  <CodeIcon className = "icons"/>
                }
                title="Course Explorer"
                subheader="October 2020 - December 2020"
                className = "card-header"
              />
              <CardMedia
                className="card-media"
                image="https://techcrunch.com/wp-content/uploads/2017/02/android-studio-logo.png?w=730&crop=1"
                title="Course Explorer Image"
              />
              <CardContent className = "card-content">
                <Typography variant="body2" color="textSecondary" component="p">
                  Utilizing my knowledge of Java, I created an application that pulled all the Computer Science courses and their specifications 
                  at UIUC from a data base and developed the front end and back end of a simple application that allows you to 
                  temporarily rate a CS course at UIUC.
                </Typography>
              </CardContent>
              <CardActions disableSpacing className = "card-actions">
                <IconButton aria-label="share">
                  <GitHubIcon className = "icons" href = "https://github.com/vsikka02/CS125-Course-Explorer"/>
                </IconButton>
              </CardActions>
              </Card>
              </Grid>
              <Grid item>
              <Card className="card-root">
              <CardHeader
                avatar={
                  <CodeIcon className = "icons"/>
                }
                title="Flight Data Analysis"
                subheader="November 2020 - December 2020"
                className = "card-header"
              />
              <CardMedia
                className="card-media"
                image="https://miro.medium.com/max/1200/1*PKXC0FeXQc5LVmqhJ8HnVg.png"
                title="Flights Data Analysis"
              />
              <CardContent className = "card-content">
                <Typography variant="body2" color="textSecondary" component="p">
                  Utilizing Python I had conducted a series of Hypothesis Tests for a set of Flight Data from Kaggle that utilized
                  Pandas in order to analyze the data at hand. This project was utilized to display the use of coding in concepts of 
                  math courses such as Statistics, and introduce beginner-level Data Analysis.
                </Typography>
              </CardContent>
              <CardActions disableSpacing className = "card-actions">
                <IconButton aria-label="share">
                  <GitHubIcon className = "icons" href = "https://github.com/vsikka02/flight-data-analysis-final-project"/>
                </IconButton>
              </CardActions>
              </Card>
            </Grid>
        </Grid>
      </Grid>
      </Grid>
      <h6 className="arrows-header2">RESUME</h6>
      <div className = "arrows">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
      </div>
      </div>
      <div className = "resume-section" id = "resume-section"> 
      <img src = {Resume} className = "resume" alt = "resume"/>
      <div className = "download-button">
        <a href = {ResumeFile} download = "Sikka_Vansh.pdf" className = "download-link">
          <GetAppRoundedIcon className = "download-icon"/>
        </a>
      </div>
      </div>
      <h6 className="arrows-header3">CONNECT</h6>
      <div className = "arrows">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
      </div>
      <div className = "connection-section" id = "connection-section">
        <h1 className = "title">Nice Meeting You. Let's Connect!</h1>
        <br/>
        <div className = "icons-list">
        <a className = "link linkedin-icon" href = "https://www.linkedin.com/in/vansh-sikka"><LinkedInIcon className = "icon"/></a>
        <a className = "link icon github-icon" href = "https://github.com/vsikka02"><GitHubIcon className = "icon"/></a>
        <a className = "link icon facebook-icon" href = "https://www.facebook.com/vansh.sikka.31"><FacebookIcon className = "icon"/></a>
        <a className = "link twitter-icon" href = "https://twitter.com/vsikka02" ><TwitterIcon className = "icon"/></a>
        <a className = "link spotify-icon" href = "https://open.spotify.com/user/iqgtth47dp29jxqhwmn4l3i7i?si=sVHdztD-SrmS65aCQhMbVA"><LibraryMusicIcon className = "icon"/></a>
        <a className = "link mail-icon" href = "mailto:vsikka02@gmail.com"><EmailIcon className = "icon"/></a>
        </div>
      </div>
      </div>
    </div>
  );
}


export default App;
