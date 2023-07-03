const Welcome = ({ onExit }) => {
  return (
    <div className="start">
      <div className="welcome">
        <div className="title">Welcome to CV Generator!</div>
        <div className="step">
          <div className="action">ADD</div>
          <div>
            Hover over a section title to add an education experience, work
            experience, or skill.
          </div>
          <div className="action">EDIT</div>
          <div>Hover over an entry to edit details or delete the entry.</div>
          <div className="action">PRINT</div>
          <div>
            Move your cursor away from the screen, and click{" "}
            <span className="code">COMMAND + P</span> on mac or{" "}
            <span className="code">CTRL + P</span> on windows to print your
            formatted resume!
          </div>
        </div>
        <div className="learn">
          <div>
            Hover your cursor in the top-right corner of the page to show this
            box agin.
          </div>
          <div>
            Learn more at{" "}
            <a href="https://github.com/edensalt/cv-application">
              https://github.com/edensalt/cv-application
            </a>
          </div>
        </div>
      </div>
      <button className="close" onClick={onExit}>
        X
      </button>
    </div>
  );
};

export default Welcome;
