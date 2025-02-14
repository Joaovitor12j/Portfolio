
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
