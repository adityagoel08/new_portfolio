import "./styles/CaseStudies.css";

const cases = [
  {
    company: "JPMorgan",
    title: "COiN (Contract Intelligence)",
    description: "An AI platform analyzing complex legal contracts using NLP to extract key data points and clauses, drastically reducing manual review time for thousand of documents.",
    innovations: [
      "Saves ~360,000 hours/year of manual legal review",
      "Document intelligence → Massive cost arbitrage",
      "Automated extraction of critical clauses & data points",
      "Enterprise-grade NLP for high-stakes regulatory compliance"
    ]
  },
  {
    company: "Amazon",
    title: "Rufus (AI Shopping Assistant)",
    description: "A generative AI-powered conversational shopping assistant that helps customers discover products, compare features, and get personalized recommendations through natural language.",
    innovations: [
      "Conversational shopping + product discovery",
      "Answers complex queries like 'best shoes for hiking in rain'",
      "Personalized recommendations based on customer history",
      "Integrated search and product comparison engine"
    ]
  },
  {
    company: "Walmart",
    title: "AI Supply Chain & Inventory Brain",
    description: "A predictive analytics system that forecasts demand and automates restocking, optimizing inventory across thousands of locations to reduce costs and improve availability.",
    innovations: [
      "Predictive restocking + demand forecasting",
      "Reduces stockouts and logistics costs through AI",
      "Real-time inventory mapping across global supply chain",
      "Automated replenishment workflows for thousands of SKUs"
    ]
  },
  {
    company: "Coca-Cola",
    title: "GenAI Marketing Engine",
    description: "Utilizing OpenAI and proprietary data to generate creative ad assets and personalized marketing content at a global scale, driving engagement through localized storytelling.",
    innovations: [
      "Uses OpenAI + proprietary data for ad creatives",
      "Scales campaigns globally with instant personalization",
      "Automated brand-aligned image and copy generation",
      "Data-driven creative optimization for diverse markets"
    ]
  },
  {
    company: "AbbVie",
    title: "AI Drug Discovery Platforms",
    description: "Leveraging machine learning to accelerate the discovery of new molecular candidates and optimize clinical trial designs, significantly shortening R&D timelines.",
    innovations: [
      "ML for molecule discovery + trial optimization",
      "Reduces R&D timelines for life-saving medications",
      "Accelerated clinical trial recruitment and success rates",
      "Predictive modeling of drug interactions and efficacy"
    ]
  },
  {
    company: "GE Digital",
    title: "Predictive Maintenance AI",
    description: "Advanced AI systems that monitor equipment health and predict failures before they occur, minimizing downtime and optimizing maintenance schedules for industrial assets.",
    innovations: [
      "Prevents equipment failure through early detection",
      "Reduces downtime by 30–50% for industrial operations",
      "Predictive analytics for multi-system asset health",
      "Automated maintenance alerts and optimization"
    ]
  }
];

const CaseStudies = () => {
  return (
    <div className="case-studies-section section-container" id="case-studies">
      <div className="case-studies-container">
        <h2>
          <span>Innovation</span> & <br />
          Case Studies
        </h2>

        <div className="case-grid">
          {cases.map((item, index) => (
            <div className="case-card" key={index}>
              <div className="case-company">{item.company}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div className="case-innovation-box">
                <h5>Key Innovations</h5>
                <ul className="innovation-list">
                  {item.innovations.map((innovation, i) => (
                    <li key={i}>{innovation}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
