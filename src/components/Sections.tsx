import Accordeon from "./Accordeon";

function Sections() {
  return (
    <>
      <Accordeon title="stuff I made" key="stuff">
        <div>aaa</div>
      </Accordeon>
      <Accordeon title="skills" key="skills" />
      <Accordeon title="contact" key="contact" />
    </>
  );
}

export default Sections;
