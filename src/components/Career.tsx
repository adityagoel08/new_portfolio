import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Decision Scientist</h4>
                <h5>Mu Sigma</h5>
              </div>
              <h3>2016</h3>
            </div>
            <p>
              Developed predictive models, clustering, and time-series forecasts
              for healthcare clients. Enabled data-driven decisions through
              segmentation and analytics. Delivered insights using large-scale
              datasets, improving campaign effectiveness and business performance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Quant Analytics Associate</h4>
                <h5>JPMorgan Chase</h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              Built ML-driven pricing and forecasting products with $200M+ impact.
              Led teams delivering optimization models, dashboards, and data
              pipelines. Supported $1B+ deals via pricing strategy. Focused on
              decision systems, predictive modeling, and scalable financial analytics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Data Science Consultant</h4>
                <h5>EY (Ernst & Young)</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Delivered AI/ML solutions across NLP, geospatial, and optimization.
              Built ANPR system using deep learning, designed knowledge graphs,
              and automated analytics workflows. Generated $100K+ savings and improved
              customer insights for Fortune clients through scalable, production-ready systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Assistant Director – AI & Innovation</h4>
                <h5>Global Bank, Wealth & Personal Banking</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Led enterprise GenAI initiatives across banking use cases. Built AI products
              (Agentic AI + RAG) for conversational data copilot, summarization, and climate use cases.
              Developed deep learning models and scaled adoption via training
              and mentorship. Focused on production-grade AI systems and
              measurable business impact.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Product Manager & GenAI Consultant</h4>
                <h5>Independent / Consulting</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Build and scale AI products (0→1→PMF) using GenAI, RAG, and agentic
              systems. Delivered AI copilots, conversational analytics, and
              automation solutions across domains. Focus on problem discovery,
              MVPs, and production deployment driving real business outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
