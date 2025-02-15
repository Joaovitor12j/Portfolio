import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Meus humildes <strong className="blue">commits</strong>
      </h1>
      <GitHubCalendar
        username="Joaovitor12j"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        year={2025}
      />
    </Row>
  );
}

export default Github;
