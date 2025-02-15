import {Col, Row} from "react-bootstrap";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiGit,
} from "react-icons/di";
import {
    SiRedis,
    SiFirebase,
    SiPostgresql, SiPhp, SiLaravel, SiSymphony, SiMysql, SiDocker, SiJira, SiGitlab,
} from "react-icons/si";
import {RiVuejsFill} from "react-icons/ri";

function Techstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiPhp/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiLaravel/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSymphony/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <RiVuejsFill/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFirebase/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRedis/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMysql/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDocker/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGitlab/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJira/>
            </Col>
        </Row>
    );
}

export default Techstack;
