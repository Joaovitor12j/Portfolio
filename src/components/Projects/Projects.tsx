import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards.js";
import Particle from "../Particle";
import DevMatch from "../../assets/Projects/DevMatch.png";
import CrudApi from "../../assets/Projects/CrudApi.png";
import CodeCoffee from "../../assets/Projects/CodeCoffee.png";
import LudusNexus from "../../assets/Projects/LudusNexus.png";

const projects = [
  {
    imgPath: CodeCoffee,
    isBlog: true,
    title: "Code & Coffee",
    description: [
      "Site desenvolvido para hospedar e compartilhar meus próprios artigos, proporcionando uma experiência de leitura moderna e acessível.",
      "O projeto foi construído com React e Vite no frontend, garantindo alta performance e um ambiente dinâmico.",
      "Os artigos são salvos no Supabase para fácil acesso.",
      "A plataforma foi desenvolvida com foco em desempenho, escalabilidade e usabilidade."
    ],
    ghLink: "https://code-coffee-blog.vercel.app",
    demoLink: "https://code-coffee-blog.vercel.app",
  },
  {
    imgPath: DevMatch,
    isBlog: false,
    title: "DevMatch",
    description: [
      "O DevMatch é uma plataforma que conecta desenvolvedores a projetos open-source.",
      "Facilita a descoberta de oportunidades e recomenda projetos com base nas suas habilidades.",
      "Tecnologias utilizadas: React, Vite, TailwindCSS, Laravel, MySQL, GitHub API."
    ],
    demoLink: "https://open-source-match.vercel.app/",
  },
  {
    imgPath: LudusNexus,
    isBlog: false,
    title: "Ludus Nexus",
    description: [
      "Ludus Nexus é uma plataforma de matchmaking para jogadores de RPG e outros jogos cooperativos.",
      "Tecnologias utilizadas: React, Vite, TailwindCSS, Laravel, MySQL."
    ],
    demoLink: "https://ludus-nexus-demo.vercel.app",
  },
  {
    imgPath: CrudApi,
    isBlog: false,
    title: "CRUD CNPJ API",
    description: "CRUD simples validando CNPJ com API gratuita. Frontend: React, Vite, TypeScript, Tailwind CSS. Backend: NestJS.",
    ghLink: "https://github.com/Joaovitor12j/crud-cnpj-api",
    demoLink: "https://cnpj-api.vercel.app",
  }
];

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
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
