import React from "react";
import {
  GridRow,
  GridColumn,
  Grid,
  Image,
  Segment,
  Header,
  Divider,
} from "semantic-ui-react";
import Typist from "react-typist";

export default function IntroductionSection() {
  const [reRenderTypist, setReRenderTypist] = React.useState(true);

  React.useEffect(() => {
    setReRenderTypist(true);
  }, [reRenderTypist]);

  return (
    <>
      <Grid padded stackable columns={16}>
        <GridRow>
          <GridColumn width={8}>
            <Image
              centered
              circular
              src="./resources/ProfilePicture.jpg"
              size="big"
            />
          </GridColumn>
          <GridColumn stretched width={8}>
            <Grid stretched centered columns={16}>
              <GridRow centered>
                <GridColumn centered width={16} textAlign="center">
                  <Segment>
                    <Header
                      className="large header"
                    >
                     👋🏻 Hi, my name is Vansh Sikka! Welcome 🏙️
                    </Header>
                    <Divider></Divider>
                    <Header as='h3'> 📧 vsikka02@gmail.com | 📱 (630)-538-0910  | 💼 SDE1 @ American Express: Global Business & Travel</Header>
                  </Segment>
                </GridColumn>
              </GridRow>
              <GridRow centered>
                <GridColumn textAlign="center" centered width={16}>
                    {reRenderTypist && (
                        <Typist onTypingDone={() => setReRenderTypist(false)}>
                          <span className="typist style">
                            SDE 1 @ AMEX: GBT Egencia
                          </span>
                          <Typist.Backspace count={25} delay={1000} />
                          <span className="typist style">
                            Full Stack Developer.
                          </span>
                          <Typist.Backspace count={25} delay={1000} />
                          <span className="typist style">Java Developer.</span>
                          <Typist.Backspace count={15} delay={1000} />
                          <span className="typist style">Data Analyst.</span>
                          <Typist.Backspace count={13} delay={1000} />
                          <span className="typist style">Entreprenuer.</span>
                          <Typist.Backspace count={13} delay={1000} />
                          <span className="typist style">
                            B.S. in CS + Statistics
                          </span>
                          <Typist.Backspace count={32} delay={1000} />
                          <span className="typist style">
                            UIUC Alumni 2020-2023
                          </span>
                          <Typist.Backspace count={18} delay={1000} />
                        </Typist>
                    )}
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn width={16}>
                        <p className="text style">Hello! I'm Vansh Sikka, a full stack developer based in Chicagoland. I specialize in crafting sleek applications using Java, C/C++, Python, React JS/Node JS, and other cutting-edge technologies. I'm passionate about creating robust solutions that enhance user experience and functionality. Beyond coding, I have a keen interest in AI & ML and staying updated on market trends. When I'm not immersed in code, you'll find me lifting weights, experimenting in the kitchen, or planning my next travel adventure. Let's connect and discuss how my skills and enthusiasm can benefit your team!.</p>
              </GridColumn>
              </GridRow>
            </Grid>
          </GridColumn>
        </GridRow>
      </Grid>
    </>
  );
}
