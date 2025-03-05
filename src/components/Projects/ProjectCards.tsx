import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {Array.isArray(props.description) ? (
            props.description.map((paragraph: string, index: string) => (
              <p key={index} style={{ marginBottom: "10px" }}>
                {paragraph}
              </p>
            ))
          ) : (
            <p>{props.description}</p>
          )}
        </Card.Text>

        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Visitar"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
