import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards.js";
import Particle from "../Particle";
import DevMatch from "../../assets/Projects/DevMatch.png";
import CrudApi from "../../assets/Projects/CrudApi.png";
import CodeCoffee from "../../assets/Projects/CodeCoffee.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus<strong className="blue"> Projetos </strong>Recentes
        </h1>
        <p style={{ color: "white" }}>
          Aqui são os projetos que estou desenvolvendo recentemente
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CodeCoffee}
              isBlog={true}
              title="Code & Coffee"
              description="Desenvolvi um site para hospedar e compartilhar meus próprios artigos, proporcionando uma experiência de leitura moderna e acessível.
              O projeto foi construído com React e Vite no frontend, garantindo alta performance e um ambiente dinâmico. A plataforma foi desenvolvida com foco em desempenho, escalabilidade e usabilidade, garantindo um ambiente ideal para a publicação de conteúdos próprios."
              ghLink="https://code-coffee-blog.vercel.app"
              demoLink="https://code-coffee-blog.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DevMatch}
              isBlog={false}
              title="Dev Match"
              description="O DevMatch é uma plataforma em desenvolvimento que conecta desenvolvedores a projetos open-source, facilitando a descoberta de oportunidades de contribuição. A plataforma permite explorar projetos com filtros avançados, receber recomendações personalizadas com base nas habilidades do usuário e acompanhar as principais tendências do mundo open-source."
              demoLink="https://open-source-match.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CrudApi}
              isBlog={false}
              title="CRUD CNPJ API"
              description="Esse projeto é um CRUD simples com cadastro de cliente, validando o CNPJ utilizando uma API de consulta grátis de CNPJ. O frontend foi construido utilizando React, Vite, TypeScript e Tailwind CSS. O Backend foi feito utilizando NestJS."
              ghLink="https://github.com/Joaovitor12j/crud-cnpj-api"
              demoLink="https://cnpj-api.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
