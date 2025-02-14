import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textAlign: "left" }}>
              UM POUCO <span className="blue"> SOBRE MIM </span>
            </h1>
            <p className="home-about-body">
              Eu caí no mundo da programação e nunca mais saí 🤷🏿‍♂️
              <br />
              <br />Comecei com PHP e, antes que percebesse, já estava mergulhado em frameworks como
              <i>
                <b className="blue"> Laravel, Symfony e CodeIgniter. </b>
              </i>
              <br />
              <br />
              Com o tempo, fui explorando outras tecnologias e hoje me viro bem com &nbsp;
              <i>
                <b className="blue">JavaScript, TypeScript, React e Vue. </b>
              </i>
              Não sou full-stack de carteirinha, mas dou meus pulos quando preciso.
              <br />
              <br />
              Gosto de criar sistemas bem &nbsp;
              <b className="blue">
                estruturados, mexer com arquitetura de software &nbsp;
              </b>
                e &nbsp;
              <b className="blue">
                encontrar soluções inteligentes &nbsp;
              </b>
               para problemas complexos. Sempre buscando melhorar e aprender algo novo no caminho. 🚀
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Me encontre aqui:</h1>
            <p>
              Sinta-se livre para <span className="blue">conectar-se </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                    href="https://www.linkedin.com/in/joao-vitorss/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/Joaovitor12j"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
