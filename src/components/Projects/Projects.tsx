import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards.js";
import Particle from "../Particle";
import leaf from "../../assets/Projects/leaf.png";
import emotion from "../../assets/Projects/emotion.png";
import editor from "../../assets/Projects/codeEditor.png";
import crudApi from "/project_1.png";
import suicide from "../../assets/Projects/suicide.png";
import codeCoffee from "/project_2.png";

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
              imgPath={crudApi}
              isBlog={false}
              title="CRUD CNPJ API"
              description="Esse projeto é um CRUD simples com cadastro de cliente, validando o CNPJ utilizando uma API de consulta grátis de CNPJ. O frontend foi construido utilizando React, Vite, TypeScript e Tailwind CSS. O Backend foi feito utilizando NestJS."
              ghLink="https://github.com/Joaovitor12j/crud-cnpj-api"
              demoLink="https://cnpj-api.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeCoffee}
              isBlog={false}
              title="Code & Coffee"
              description="Desenvolvi um site para hospedar e compartilhar meus próprios artigos, proporcionando uma experiência de leitura moderna e acessível.
              O projeto foi construído com React e Vite no frontend, garantindo alta performance e um ambiente dinâmico. A plataforma foi desenvolvida com foco em desempenho, escalabilidade e usabilidade, garantindo um ambiente ideal para a publicação de conteúdos próprios."
              ghLink="link"
              demoLink="https://code-coffee-blog.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Projeto 3"
              description="Lorem ipsum dolor sit amet. Qui doloribus ipsa qui officia magnam cum voluptas asperiores non culpa dolores et quod porro est consequatur ratione. Non numquam sint ut architecto consequatur qui corrupti excepturi non galisum voluptatem. Ut Quis laudantium in dicta rerum cum delectus perferendis quo impedit autem est molestias repudiandae in facere quasi."
              ghLink="link"
              demoLink="link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Projeto 4"
              description="Lorem ipsum dolor sit amet. Qui doloribus ipsa qui officia magnam cum voluptas asperiores non culpa dolores et quod porro est consequatur ratione. Non numquam sint ut architecto consequatur qui corrupti excepturi non galisum voluptatem. Ut Quis laudantium in dicta rerum cum delectus perferendis quo impedit autem est molestias repudiandae in facere quasi."
              ghLink="link"
              demoLink="link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Projeto 5"
              description="Lorem ipsum dolor sit amet. Qui doloribus ipsa qui officia magnam cum voluptas asperiores non culpa dolores et quod porro est consequatur ratione. Non numquam sint ut architecto consequatur qui corrupti excepturi non galisum voluptatem. Ut Quis laudantium in dicta rerum cum delectus perferendis quo impedit autem est molestias repudiandae in facere quasi."
              ghLink="link"
              demoLink="link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Projeto 6"
              description="Lorem ipsum dolor sit amet. Qui doloribus ipsa qui officia magnam cum voluptas asperiores non culpa dolores et quod porro est consequatur ratione. Non numquam sint ut architecto consequatur qui corrupti excepturi non galisum voluptatem. Ut Quis laudantium in dicta rerum cum delectus perferendis quo impedit autem est molestias repudiandae in facere quasi."
              ghLink="link"
              demoLink="link"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
