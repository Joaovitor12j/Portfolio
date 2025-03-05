import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards.js";
import Particle from "../Particle";
import DevMatch from "../../assets/Projects/DevMatch.png";
import CrudApi from "../../assets/Projects/CrudApi.png";
import CodeCoffee from "../../assets/Projects/CodeCoffee.png";
import LudusNexus from "../../assets/Projects/LudusNexus.png";

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
              description={[
                "Site desenvolvido para hospedar e compartilhar meus próprios artigos, proporcionando uma experiência de leitura moderna e" +
                " acessível.",
                "O projeto foi construído com React e Vite no frontend, garantindo alta performance e um ambiente dinâmico.",
                "Os artigos são salvos no Supabase para fácil acesso.",
                "A plataforma foi desenvolvida com foco em desempenho, escalabilidade e usabilidade, garantindo um ambiente ideal para a publicação de conteúdos próprios."
              ]}
              ghLink="https://code-coffee-blog.vercel.app"
              demoLink="https://code-coffee-blog.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DevMatch}
              isBlog={false}
              title="DevMatch"
              description={[
                "O DevMatch é uma plataforma que conecta desenvolvedores a projetos open-source.",
                "Facilita a descoberta de oportunidades e recomenda projetos com base nas suas habilidades.",
                "Acompanhar as principais tendências do mundo open-source!",
                "Tecnologias utilizadas:",
                "Frontend: React + Vite, TailwindCSS",
                "Backend: Laravel",
                "Bando de dados: MySQL",
                "Fila: Laravel Queues",
                "Integração com GitHub API"
              ]}
              demoLink="https://open-source-match.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LudusNexus}
              isBlog={false}
              title="Ludus Nexus"
              description={[
                "Ludus Nexus é uma plataforma de matchmaking para jogadores de RPG e outros jogos cooperativos, ajudando a conectar pessoas com" +
                " interesses semelhantes para formar grupos e iniciar aventuras.",
                "Com uma interface intuitiva e moderna, a plataforma permite que jogadores encontrem mesas ativas, criem suas próprias campanhas e" +
                " interajam com a comunidade.\n",
                "Tecnologias Utilizadas: \n",
                "Frontend: React + Vite, TailwindCSS\n",
                "Backend: Laravel\n" ,
                "Banco de Dados: MySQL\n",
                "Design: UI/UX focada na experiência do jogador"
              ]}
              demoLink="https://ludus-nexus-demo.vercel.app"
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
