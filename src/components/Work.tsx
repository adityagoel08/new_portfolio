import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "ResolveAI",
    category: "AI Agent Platform",
    features: [
      "RAG-based GenAI based Agent Support Copilot for real-time assistance",
      "Improving efficiency by 60-70% for over 300+ active users",
      "Seamless integration with existing enterprise workflows",
      "Real-time data synchronization and intelligent indexing",
    ],
    image: "/images/ResolveAI.png",
  },
  {
    title: "DataTalk",
    category: "Agentic AI Data Assistant Platform",
    features: [
      "Natural language → SQL powered conversational analytics",
      "5-10x faster data access for non-technical users",
      "Integrated with LLMs, Agents, Cloud, structured databases & APIs",
      "Built-in guardrails for accuracy and hallucination control",
    ],
    image: "/images/DataTalk.png",
  },
  {
    title: "PulseIQ",
    category: "Customer Intelligence Platform",
    features: [
      "NLP-driven analysis of customer feedback (tickets, chats, reviews)",
      "Automated sentiment, clustering & theme detection",
      "Reduced manual analysis effort by 80%",
      "Enabled faster product and CX decision loops",
    ],
    image: "/images/PulseIQ.png",
  },
  {
    title: "MediFlow AI",
    category: "Healthcare AI System",
    features: [
      "AI-powered processing of medical documents & workflows",
      "NLP-based summarization with high accuracy & explainability",
      "Designed with human-in-the-loop validation",
      "Improved operational efficiency in high-stakes environments",
    ],
    image: "/images/MediFlow.png",
  },
  {
    title: "RetailSense",
    category: "Consumer Intelligence Platform",
    features: [
      "Customer behavior modeling using transaction & interaction data",
      "Advanced segmentation and lifecycle analysis",
      "Enabled personalized targeting and recommendations",
      "Improved engagement and conversion metrics",
    ],
    image: "/images/RetailSense.png",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Key Features</span>
                          <ul className="features-list">
                            {project.features.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
