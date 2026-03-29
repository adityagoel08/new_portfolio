import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para intro">
          AI Product Strategist & GenAI Automation Consultant with <strong>10+ years</strong> of experience shipping real-world AI products.
        </p>
        <p className="para">
          I help businesses deploy AI agents, automate workflows, and reduce operational costs - from idea to production.
        </p>
        <p className="para list">
          🎯 8+ AI products launched | 1,000+ users <br />
          👨🏻‍💻 Expertise in Prompt Engineering, Agentic AI, NLP, Automation Workflows<br />
          📚 Technical Reviewer for O'Reilly's AI Publications
        </p>
        <p className="para">
          Turn AI from hype into measurable impact.
        </p>
      </div>
    </div>
  );
};

export default About;
