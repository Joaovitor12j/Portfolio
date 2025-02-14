import {Container, Row, Col} from "react-bootstrap";
import homeLogo from "../../assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type.tsx";

function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle/>
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{paddingBottom: 15}} className="heading">
                                Olá!{""}
                                <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                            </h1>

                            <h1 className="heading-name">
                                Me chamo <strong className="main-name"> JOÃO VITOR</strong>
                            </h1>

                            <div className="heading-profile" style={{padding: 50, textAlign: "left"}}>
                               <Type/>
                            </div>
                        </Col>

                        <Col md={5} style={{paddingBottom: 20}}>
                            <img
                                src={homeLogo}
                                alt="home pic"
                                className="img-fluid"
                                style={{maxHeight: "450px"}}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Home2/>
        </section>
    );
}

export default Home;
