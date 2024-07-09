import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Image,
  CardHeader,
  CardMeta,
  CardDescription,
  Statistic,
  StatisticValue,
  StatisticLabel,
  Icon,
  Grid,
  GridColumn,
  GridRow,
  Divider,
} from "semantic-ui-react";

export default function BlueprintComponent() {
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

  const dataObjects = [
    {
      imageSrc:
        "https://ih0.redbubble.net/image.373612698.9613/raf,360x360,075,t,fafafa:ca443f4786.jpg",
      cardHeader: "React JS",
      cardMeta: "Web Development",
      CardDescription: "ReactJS is a JavaScript library for building dynamic, high-performance user interfaces through reusable components, widely used in single-page applications.",
      skillRating: 5,
    },
    {
      imageSrc:
        "https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png",
        cardHeader: "Spring Boot",
      cardMeta: "Java/Web Development/Modern Technology & Tools",
      CardDescription: "Spring Boot is a framework for building production-ready, stand-alone Spring applications with embedded servers, providing a streamlined and efficient way to create Java-based microservices.",
      skillRating: 5,
    },
    {
      imageSrc:
        "https://static.vecteezy.com/system/resources/previews/020/082/775/non_2x/conceptualizing-flat-design-icon-of-global-sql-vector.jpg",
      cardHeader: "SQL DB Management",
      cardMeta: "Web Development",
      CardDescription: "SQL (Structured Query Language) is a standard programming language used for managing and manipulating relational databases, allowing for the creation, querying, updating, and deletion of database records.",
      skillRating: 4,
    },
    {
      imageSrc:
        "https://cdn.pixabay.com/photo/2018/05/08/21/37/html5-3384039_960_720.png",
      cardHeader: "HTML5",
      cardMeta: "Web Development",
      CardDescription: "HTML5 is the latest version of the Hypertext Markup Language, used for structuring and presenting content on the web, introducing new elements, attributes, and behaviors for improved multimedia and graphical support.",
      skillRating: 5,
    },
    {
      imageSrc:
        "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png",
      cardHeader: "CSS/SCSS",
      cardMeta: "Web Development",
      CardDescription: "CSS (Cascading Style Sheets) and SCSS (Sassy CSS) are stylesheet languages used to describe the presentation and design of web documents, with SCSS extending CSS with advanced features like variables, nested rules, and mixins for enhanced efficiency and maintainability.",
      skillRating: 5,
    },
    {
      imageSrc:
        "https://static-00.iconduck.com/assets.00/java-icon-256x256-k4ufhihr.png",
      cardHeader: "Java",
      cardMeta: "Application Development",
      CardDescription: "Java is a versatile, object-oriented programming language designed for cross-platform compatibility, commonly used for building enterprise-scale applications, mobile apps, and web services.",
      skillRating: 5,
    },
    {
      imageSrc:
        "https://www.pngall.com/wp-content/uploads/2017/05/Copyright-Symbol-R-Free-Download-PNG.png",
      cardHeader: "R",
      cardMeta: "Statistical Analysis and Computation",
      CardDescription: "R is a programming language and software environment used for statistical computing, data analysis, and graphical representation, widely utilized in data science and research.",
      skillRating: 3,
    },
    {
      imageSrc:
        "https://banner2.cleanpng.com/20190623/yp/kisspng-python-computer-icons-programming-language-executa-5d0f0aa79779a6.6143656815612668556205.jpg",
      cardHeader: "Python",
      cardMeta: "Application Development",
      CardDescription: "Python is a versatile, high-level programming language known for its readability and broad applicability in web development, data analysis, artificial intelligence, scientific computing, and automation.",
      skillRating: 5,
    },
    {
      imageSrc: 
       "https://mindtwig.com/wp-content/uploads/2022/04/selenium.png",
      cardHeader: "Selenium",
      cardMeta: "Testing Framework",
      CardDescription: "Selenium is a popular open-source tool used for automating web browsers, primarily used for testing web applications across different browsers and platforms.",
      skillRating: 5,
    },
    {
      imageSrc: 
       "https://skillmea-production.s3.eu-central-1.amazonaws.com/9gzoehfs5vkc736ikxt5zp97swnt",
      cardHeader: "JUnit5",
      cardMeta: "Testing Framework",
      CardDescription: "JUnit 5 is a modern Java framework for writing and running tests, providing annotations and APIs for testing applications and ensuring code quality through automated unit and integration testing.",
      skillRating: 5,
    },
    {
      imageSrc: 
       "https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png",
      cardHeader: "MongoDB",
      cardMeta: "Database Management",
      CardDescription: "MongoDB is a NoSQL database management system that stores data in flexible, JSON-like documents, making it easy to scale and manage data across distributed systems, commonly used in modern web applications and big data solutions.",
      skillRating: 3,
    },
    {
      imageSrc: 
       "https://pbs.twimg.com/profile_images/1259908463070756865/StEmxHED_400x400.png",
      cardHeader: "Cucumber",
      cardMeta: "Testing Framework",
      CardDescription: "Cucumber is a testing tool that supports Behavior-Driven Development (BDD), allowing collaboration between non-technical and technical team members to write and automate acceptance tests in a human-readable format. It uses Gherkin syntax to define test cases in plain text.",
      skillRating: 5,
    },
    {
      imageSrc: 
       "https://avatars.githubusercontent.com/u/12528662?s=280&v=4",
      cardHeader: "TestNG",
      cardMeta: "Testing Framework",
      CardDescription: "TestNG is a testing framework for Java inspired by JUnit and NUnit, offering additional functionalities like flexible test configuration, parallel execution, data-driven testing, and advanced reporting capabilities, commonly used for unit and integration testing in Java applications.",
      skillRating: 5,
    },
    {
      imageSrc: 
       "https://cdn.worldvectorlogo.com/logos/amazon-kinesis-1.svg",
      cardHeader: "AWS Kinesis Streams",
      cardMeta: "Modern Tool/Technology",
      CardDescription: "AWS Kinesis Streams is a scalable and durable real-time data streaming service provided by Amazon Web Services (AWS), designed to handle large volumes of streaming data reliably, enabling applications to process and analyze data in real time.",
      skillRating: 4,
    },
    {
      imageSrc: 
       "https://i0.wp.com/acemq.com/wp-content/uploads/2019/11/rabbitmq2.png?resize=1080%2C1082&ssl=1",
      cardHeader: "Rabbit MQ",
      cardMeta: "Messaging Queue",
      CardDescription: "RabbitMQ is an open-source message-brokering software that supports multiple messaging protocols, enabling seamless communication between applications and services by facilitating the reliable delivery of messages across distributed systems.",
      skillRating: 3,
    },
    {
      imageSrc: 
       "https://w7.pngwing.com/pngs/46/626/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue.png",
      cardHeader: "C++",
      cardMeta: "Application Development",
      CardDescription: "C++ is a powerful, general-purpose programming language known for its efficiency and flexibility, widely used in system software, game development, and applications requiring high performance and low-level control over hardware resources.",
      skillRating: 3,
    },
    {
      imageSrc: 
       "https://www.shareicon.net/download/2015/09/11/99371_javascript.ico",
      cardHeader: "NodeJS",
      cardMeta: "Messaging Queue",
      CardDescription: "Node.js is a runtime environment that allows you to run JavaScript code outside of a web browser, making it possible to build scalable and efficient server-side applications. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient for handling concurrent connections.",
      skillRating: 4,
    },
    {
      imageSrc: 
       "https://cdn.iconscout.com/icon/free/png-256/free-elastic-1-283281.png?f=webp&w=256",
      cardHeader: "Kibana",
      cardMeta: "Logging and Monitoring",
      CardDescription: "Kibana is an open-source data visualization dashboard for Elasticsearch. It provides a user-friendly interface for exploring, visualizing, and analyzing data stored in Elasticsearch indices, making it easier to understand and interpret large volumes of data through charts, graphs, and maps.",
      skillRating: 5,
    },
    {
      imageSrc: 
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJb7VanYhPDW5G6JMkRGg5n6PPWtirPUeGjQ&s",
      cardHeader: "DataDog",
      cardMeta: "Logging and Monitoring",
      CardDescription: "Datadog is a monitoring and analytics platform that provides comprehensive visibility into the performance of applications, infrastructure, and logs in real time, offering monitoring, alerting, and visualization tools for cloud-scale environments.",
      skillRating: 5,
    },
  ];

  return (
    <>
      {/*Reveal Feature can be implemented on the statistics wil be kind of cool*/}
      <Grid width={16} stackable className="numbers area">
        <GridRow width={16} centered>
          <GridColumn width={4} textAlign="center">
        <Statistic padded>
          <StatisticValue>
            <Image
              src="https://target.scene7.com/is/image/Target/GUEST_d5369e76-66a8-4193-9565-27179db2f686?wid=488&hei=488&fmt=pjpeg"
              className="circular inline"
            />
            UIUC Alumni
          </StatisticValue>
          <StatisticLabel>Senior Consultant: Illinois Business Consulting <br/> Dean's List <br/> Honor Roll Graduate</StatisticLabel>
        </Statistic>
        </GridColumn>
        <GridColumn width={4} textAlign="center">
        <Statistic padded>
          <StatisticValue>1+</StatisticValue>
          <StatisticLabel>Years of Full  <br/> Time Experience</StatisticLabel>
        </Statistic>
        </GridColumn>
        <GridColumn width={4} textAlign="center">
        <Statistic padded>
          <StatisticValue text>
            Dean's List
            <br />& Honor's Graduate
          </StatisticValue>
          <StatisticLabel>2020-2023</StatisticLabel>
        </Statistic>
        </GridColumn>
        <GridColumn width={4} textAlign="center">
        <Statistic>
          <StatisticValue>
            <Icon name="terminal" />100+
          </StatisticValue>
          <StatisticLabel>Hours Coding</StatisticLabel>
        </Statistic>
        </GridColumn>
        </GridRow>
      </Grid>
      <Card.Group itemsPerRow={4} stackable centered padded>
        {dataObjects.map((data, index) => (
          <Card inverted className="blueprint-card" color="grey">
            <CardContent>
              <Image floated="right" circular size="tiny" src={data.imageSrc} />
              <CardHeader className="blueprint-card-header">
                {data.cardHeader}
              </CardHeader>
              <CardMeta>{data.cardMeta}</CardMeta>
              <CardDescription>{data.CardDescription}</CardDescription>
              <Divider></Divider>
              <div className="blueprint-card-rating">
                {[...Array(data.skillRating)].map((index) => (
                  <Icon
                    name="circle"
                    className="full-rating-circle"
                    size="small"
                  ></Icon>
                ))}
                {[...Array(5 - data.skillRating)].map((index) => (
                  <Icon
                    className="blueprint-card missing-rating-circle"
                    name="square"
                    size="small"
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </Card.Group>

      <Grid stackable className="numbers area">
        <GridRow>
        <GridColumn width = {4} textAlign="center">
        <Statistic>
          <StatisticValue text>
            Ambition
            <br />
            Drives
          </StatisticValue>
          <StatisticLabel>Key Leader<br/>Excellent Cooperator<br/>Strategic Developer</StatisticLabel>
        </Statistic>
        </GridColumn>
        <GridColumn width = {4} textAlign="center">
        <Statistic>
          <StatisticValue text>
            <Icon name="briefcase" /> 3 <br/>Internships
          </StatisticValue>
          <StatisticLabel>Experiences @ <br/> BMO, ProvenIT, SiteInnovator</StatisticLabel>
        </Statistic>
        </GridColumn>
        <GridColumn width = {4} textAlign="center">
        <Statistic>
          <StatisticValue>B.S. in <br/>CS + Stats</StatisticValue>
          <StatisticLabel>Bachelor's Degree from UIUC</StatisticLabel>
        </Statistic>
        </GridColumn>
        <GridColumn width = {4} textAlign="center">
        <Statistic>
          <StatisticValue>
            <Image
              src="https://media.istockphoto.com/id/1442450033/vector/rocket-logo-vector-design-illustration.jpg?s=612x612&w=0&k=20&c=rwM6Ct1C1dFkbz0Dg3mNPpxFwcP04_i_fJ1SPPHK9MU="
              className="circular inline"
            />
             8+
          </StatisticValue>
          <StatisticLabel>Startups & Projects</StatisticLabel>
        </Statistic>
        </GridColumn>
        </GridRow>
      </Grid>
    </>
  );
}
