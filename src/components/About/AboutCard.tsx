import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá! Sou <span className="blue">João Vitor</span>
            , desenvolvedor back-end especializado em PHP, focado na parte tributária das coisas
            <br />
            Atualmente, trabalho criando soluções eficientes e escaláveis.
            <br />
            <br />
            Além de programar, curto:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Escrever sobre tecnologia
            </li>
            <li className="about-activity">
              <ImPointRight /> Jogar RPG
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar por aí
            </li>
          </ul>

          <p style={{ color: "rgb(63,10,202)" }}>
            “Programação é só um outro nome para a arte perdida do pensamento.”
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
