import { Chip } from "@material-ui/core";
import React from "react";
import { Grid, Header, GridColumn, Image, GridRow, Divider, Message, Icon } from "semantic-ui-react";

export default function JourneyComponent() {
  const dataObjects = [
    {
    jobTitle: "SDE1 @ American Express: Global Business & Travel",
      date: "📍June 6th, 2023 - Present",
      description:
        "As a Software Engineer 1 at American Express Global Business Travel, I specialize in developing and optimizing mission-critical applications. My expertise spans frontend development using React.js and in house UI ToolKit, ensuring intuitive user interfaces and seamless experiences. On the backend, I leverage Java and Spring Boot to build scalable microservices, integrating with SQL databases for efficient data handling. I excel in monitoring and observability using tools like DataDog and Kibana for performance metrics and log analysis. Additionally, I manage real-time data processing with AWS Kinesis Streams and facilitate efficient message queuing using RabbitMQ. Collaborating closely with cross-functional teams, I deliver robust solutions that meet business objectives while staying current with industry trends to drive continuous improvement and innovation within the organization.",
      techBadges: ['Spring Boot', 'Java', 'Java Script', 'React', 'DataDog']
    },
    {
        jobTitle: "B.S. in Computer Science & Statistics from University of Illinois at Urbana-Champaign",
      date: "🎓 August 24, 2020 - June 1st, 2023",
      description:
        "I earned a B.S. in Computer Science and Statistics from the University of Illinois at Urbana-Champaign, graduating in May 2023 with a cumulative GPA of 3.82. Throughout my studies, I engaged in a diverse range of coursework including Data Structures, Data Mining, Applied ML, IoT, Software Design Studio, Numerical Methods, Algorithms, Differential Equations, and Numerical Methods. My academic achievements were recognized with a consistent presence on the Dean's List from 2020 to 2023. Beyond the classroom, I actively participated in extracurricular activities, serving as a Senior Consultant at Illinois Business Consulting and a Software Engineer for Google's Student Developer Club. Additionally, I contributed as a course assistant for CS125, CS126, and CS222, further enriching my academic experience.",
      techBadges: ['Senior Conultant @ IBC', 'SWE @ Google\'s Developer Student Club', 'IOT', 'Java', 'C++', 'Algorithm\'s and Data Structures', 'Data Mining', 'Statistical Analysis']  
    },
    {
    jobTitle: "SWE Intern @ BMO Harris Bank",
      date: "✅ June 6th, 2022 - August 10th, 2022",
      description:
        "During my summer internship as a Software Engineer at BMO Financial Group in Chicago from June to August 2022, I collaborated closely with finance and technology teams to develop and deploy an advanced idea management software for the US Personal and Business Banking Department. Key achievements included securing 5100 licenses for PlanBox, where I meticulously managed implementation timelines, cost reports, and technical workflows. I also enhanced the security of the Business Banking Express platform by 10% through a targeted report identifying unmasked data fields. Additionally, I conducted a comprehensive survey of 500 employees to assess previous innovation systems. Throughout these projects, I utilized Kibana and Elk Logs for streamlined data management and insightful analysis.",
      techBadges: ['Privacy & Security', 'Kibana Logs', 'Presentation Skills', 'Innovation & Idea Management', "Concept of Agile Development", "Introduction to Coorporate"]
    },
    {
    jobTitle: "Emerging Technologies Intern @ ProvenIT",
    date: "✅ June 1st, 2021 - August 1st, 2021",
    description:
      "During my internship at Proven IT in Tinley Park, IL, from June to August 2021, I gained valuable experience in IT and emerging technologies. I developed Telegram bots using Python and PowerShell scripts, leveraging open-source APIs to streamline internal DevOps processes and enhance security management. I shadowed and collaborated on the development of Laserfiche, which automates the transformation of form data into SQL databases. My responsibilities included managing IT servers, where I acquired knowledge of IPs, firewalls, and database management. Additionally, I contributed to web development tasks, crafting data dashboards using HTML5, CSS, and JavaScript. I also played a key role in improving inventory accuracy by 64% for over 250 employees using proprietary software.",
    techBadges: ['HTML', 'CSS3', 'Java Script', 'Python', "Telegram Bot", "Power Shell Scripts", "Information Technology", "Internet Security"]
  },
  {
    jobTitle: "Graduate Diploma from Metea Valley High School",
  date: "🎓 August 8th, 2016 - June 1st, 2020",
  description:
    "From 2016 to 2020, I graduated with high honors from Metea Valley High School, achieving a notable GPA of 4.54. My academic journey was complemented by active engagement in various extracurricular pursuits. As a dedicated member of Business Professionals of America, I consistently qualified for state competitions and earned national recognition. I also embraced the ethos of community service through my involvement in the WeDay Club, while contributing to cultural enrichment as a member of the Indian Student Association. Alongside these activities, I pursued a rigorous course load that included multiple Advanced Placement classes, further enriching my educational experience.",
  techBadges: ['GPA 4.54', '10 AP Courses', 'Indian Student Association', 'National BPA Qualifier', "WeDay", "Advanced Mathematics"]  
},
  ];

  return (
    <>
    <Grid inverted width={16} columns={2} divided verticalAlign="right" className = "my-journey-component">
      {dataObjects.map((data, index) => (
        <GridRow divided>
          <GridColumn width={4}>
            <Header className="journey-component-timeline-date">{data.date}</Header>
          </GridColumn>
          <GridColumn textAlign="left" width={12} className="timeline description">
            <Header as='h2'>{data.jobTitle}</Header>
            <p className="ui text style">{data.description}</p>
            <Divider></Divider>
            <Header as='h3' className="key-take-away header">Key Take Aways</Header>
            {data.techBadges.map((badges) => (
                <Chip className = 'key-take-away badge' label={badges} spacing={1}/>
            ))}
          </GridColumn>
          <Divider></Divider>
        </GridRow>
      ))}
    </Grid>
    </>
  );
}
