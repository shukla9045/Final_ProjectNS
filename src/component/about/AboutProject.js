import "./style.css";
const AboutProject = () => {
  return (
    <>
      <h1 className="h1">The Complete App</h1>
      <div className="left">
        <h2 className="headcolor">About this project</h2>
        <ul>
          <h3 className="headcolor">Why is this complete app?</h3>
          <li>
            the aim of this project to provide everything to you at one place
            means to keep looks nice!
          </li>
        </ul>
        <h3 className="headcolor">Features :</h3>
        <ul>
          <li>Todo with time Handling</li>
          <li>Check Weather</li>
          <li>whiteboard</li>
          <li>News Feed</li>
          <li>Games</li>
        </ul>
      </div>
    </>
  );
};
export default AboutProject;
