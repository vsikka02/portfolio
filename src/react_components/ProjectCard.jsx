import React, { useState, useEffect } from "react";
import {
  Image,
  Card,
  Container,
  CardContent,
  CardHeader,
  CardMeta,
  Icon,
  CardDescription,
  Grid,
  GridColumn,
  Divider,
} from "semantic-ui-react";
import { Chip } from "@material-ui/core";

export default function ProjectCard() {
  const dataObjects = [
    {
      projectTitle: "Portfolio Website",
      projectDescription:
        "The website you are currently viewing is a personal project that I have diligently maintained and updated for over 3 years. Developed using ReactJS, it showcases my expertise in front-end development and UI design. Leveraging UI packages such as Material UI and Semantic UI, alongside custom CSS styling, I ensured a polished and intuitive user experience. Continuous updates and enhancements have been integral to maintaining relevance and functionality, reflecting my commitment to delivering a dynamic and engaging web platform.",
      gitLink: "test.123",
      hrefLink: "test.123",
      imageLink:
        "https://www.spcdn.org/blog/wp-content/uploads/2023/09/portfolio-cover.png",
      projectDate: "Jan 2020 - Present",
      projectSkills: [
        { label: "React JS", cssSelector: "cpp" },
        { label: "CSS\\SCSS", cssSelector: "java" },
        { label: "Material UI", cssSelector: "html5" },
        { label: "Web Hosting", cssSelector: "html5" },
      ],
    },
    {
      projectTitle: "Flights Data Analysis",
      projectDescription:
        "I developed a sophisticated graph data structure that models flights as edges and airports as nodes by parsing CSV data. This project was implemented in C++, where I meticulously designed and optimized the structure to handle large datasets efficiently. Key functionalities included the integration of Dijkstra's Algorithm for shortest path analysis, Breadth-First Search (BFS) for exploration and traversal, and Graph Coloring for various analytical insights. This comprehensive approach not only facilitated robust data analysis but also enhanced understanding and visualization of complex flight network dynamics.",
      gitLink: "test.123",
      hrefLink: "test.123",
      imageLink:
        "https://media.istockphoto.com/id/1411103436/vector/airline-png-plane-isometric-aviation-top-view-passenger-aircraft-transportation-front-and.jpg?s=612x612&w=0&k=20&c=q4QcDi5h0rC-I4XuDkF2o61H2jeWGwcBzGwOb4VLxOg=",
      projectDate: "Jun 10 2023 - June 13 2025",
      projectSkills: [
        { label: "C++", cssSelector: "cpp" },
        { label: "Data Structures", cssSelector: "java" },
        { label: "Algorithms", cssSelector: "html5" },
      ],
    },
    {
      projectTitle: "Linked List",
      projectDescription:
        "I developed a Linked List data structure in C++ to efficiently manage and manipulate collections of data. The implementation includes fundamental operations such as insertion at the beginning and end, deletion of specific nodes, searching for values within the list, and displaying the contents. Each node in the linked list, defined by a Node struct, contains integer data and a pointer to the next node, ensuring seamless traversal and modification of data elements. This project serves as a foundational example of data structure implementation in C++, demonstrating proficiency in memory management and algorithmic design principles",
      gitLink: "test.123",
      hrefLink: "test.123",
      imageLink:
        "https://raw.githubusercontent.com/ngryman/artworks/master/ds-linked-list/heading/ds-linked-list@2x.png",
      projectDate: "Jun 10 2023 - June 13 2025",
      projectSkills: [
        { label: "C++", cssSelector: "cpp" },
        { label: "Java", cssSelector: "java" },
        { label: "HTML5", cssSelector: "html5" },
      ],
    },
    {
      projectTitle: "Ideal Gas Simulation",
      projectDescription:
        "I created a C++ simulation to model ideal gas behavior within a confined space. Using object-oriented programming, I represented gas particles with properties such as position, velocity, and mass. The simulation utilized Newton's laws of motion and the ideal gas law to simulate particle movements and collisions. Visualization options included graphical rendering or console output to display real-time updates of particle dynamics. This project highlighted my proficiency in C++ and application of fundamental physics principles to simulate ideal gas interactions effectively.",
      gitLink: "test.123",
      hrefLink: "test.123",
      imageLink:
        "https://www.researchgate.net/publication/274514056/figure/fig1/AS:267740942434317@1440845823271/Screenshot-from-Gas-Properties-a-PhET-Interactive-Simulation-46.png",
      projectDate: "Jun 10 2023 - June 13 2025",
      projectSkills: [
        { label: "C++", cssSelector: "cpp" },
        { label: "Java", cssSelector: "java" },
        { label: "HTML5", cssSelector: "html5" },
      ],
    },
    {
      projectTitle: "Tic Tac Toe C++",
      projectDescription:
        "I developed a Tic Tac Toe game in Java, implementing classic gameplay mechanics within a console-based environment. The project focused on object-oriented principles, with classes defined for the game board, players, and game logic. Players interacted with the game through console input, selecting positions on the board to place their marks (X or O). The program included validation to ensure legal moves and checked for win conditions after each turn. The game continued until a player won or the board was filled, with options for replaying or exiting. This project demonstrated my Java programming skills and proficiency in creating interactive console applications.",
      gitLink: "test.123",
      hrefLink: "test.123",
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6gGNNxyqh8kUJAMQYvL_qqn3d_znNop3diA&s",
      projectDate: "Jun 10 2023 - June 13 2025",
      projectSkills: [
        { label: "C++", cssSelector: "cpp" },
        { label: "Java", cssSelector: "java" },
        { label: "HTML5", cssSelector: "html5" },
      ],
    },
    {
        projectTitle: "Tic Tac Toe Java",
        projectDescription:
          "Same as the Tic Tac Toe C++ project. Just written in Java (Mainly used to facilitate process of learning C++)",
        gitLink: "test.123",
        hrefLink: "test.123",
        imageLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6gGNNxyqh8kUJAMQYvL_qqn3d_znNop3diA&s",
        projectDate: "Jun 10 2023 - June 13 2025",
        projectSkills: [
          { label: "C++", cssSelector: "cpp" },
          { label: "Java", cssSelector: "java" },
          { label: "HTML5", cssSelector: "html5" },
        ],
      },
      {
        projectTitle: "Course Explorer App",
        projectDescription:
            "The Course Explorer app, developed in Java using Android Studio, allows users to explore and rate courses offered at UIUC. With a user-friendly interface, users can browse course details, including codes, titles, instructors, and community-contributed ratings and reviews. The app supports searching and sorting courses by various criteria, enabling users to easily find and evaluate courses of interest. Users can submit their ratings and comments directly within the app, enhancing engagement and usability. Future updates may include additional features to enrich the user experience further.",
        gitLink:"",
        hrefLink:"",
        imageLink: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2154288972/settings_images/f63b87b-0df1-5bad-bbd3-c558fb1855d_Untitled_design_9_.png",
        projectSkills:[
            { label: "C++", cssSelector: "cpp" },
            { label: "Java", cssSelector: "java" },
            { label: "HTML5", cssSelector: "html5" },
          ],
      },
      {
        projectTitle: "Brick Breaker Game",
        projectDescription:
            "This C++ project, built with the Cinder framework and supported by glm and nlohmann libraries, recreates the classic Brick Breaker arcade game. Players control a paddle to bounce a ball and destroy a variety of brick configurations across levels crafted using JSON files. This approach allows for dynamic level design adjustments without altering the core game code. Featuring responsive controls, realistic physics, and immersive audio-visual elements, the game combines nostalgic gameplay with modern development techniques, highlighting C++'s capabilities in game design and customization.",
        gitLink:"",
        hrefLink: "test.123",
        imageLink: "https://i0.wp.com/realgamemedia.com/wp-content/uploads/2016/05/BrickBreaker-Feature.png?fit=948%2C550&ssl=1",
        projectSkills:[
            { label: "C++", cssSelector: "cpp" },
            { label: "Java", cssSelector: "java" },
            { label: "HTML5", cssSelector: "html5" },
          ],
      },
      {
        projectTitle: "Skill Flyer",
        projectDescription:
            "This project is a crowd-sourced learning platform designed to enhance the discovery of educational YouTube videos. The software tool enables users to rank videos based on educational topics and subtopics, improving efficiency in finding effective learning materials. Built with MongoDB for the data backend, Node.js for the server backend, and React.js with Redux for the frontend, the platform offers a seamless user experience. Users can contribute rankings and explore curated lists of educational videos, leveraging modern web technologies to foster collaborative learning and knowledge sharing.",
        gitLink:"",
        hrefLink: "test.123",
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcEB-oTlQ7mIESnQrTAwLS-VB3seBIM29UyQ&s",
        projectSkills:[
            { label: "C++", cssSelector: "cpp" },
            { label: "Java", cssSelector: "java" },
            { label: "HTML5", cssSelector: "html5" },
          ],
      }
  ];

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <Card.Group itemsPerRow={5} stackable centered padded>
      {dataObjects.map((data, index) => (
        <Card className="project-card" rounded={false}>
          <CardContent textAlign="center">
            <CardHeader className="project-card-header">
              {data.projectTitle.toUpperCase()}
            </CardHeader>
            <CardMeta className="project-card-date">
              {data.projectDate}
            </CardMeta>
            <Container className="skill-container">
              {data.projectSkills.map((skill) => (
                <Chip
                  className={"project-skill badge " + skill.cssSelector}
                  label={skill.label}
                  spacing={1}
                />
              ))}
              <Image src={data.imageLink}></Image>
            </Container>
            {/* <Divider></Divider> */}
            <CardDescription className="project-card-description">
              {data.projectDescription}
            </CardDescription>
            </CardContent>
            <CardContent extra>
            <Grid className="project-card-button-area" columns={2}>
              <GridColumn textAlign="center">
                <a>
                  <Icon size="big" name="git square" />
                </a>
              </GridColumn>
              <GridColumn textAlign="center">
                <Icon size="big" name="copy" />
              </GridColumn>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Card.Group>
  );
}
