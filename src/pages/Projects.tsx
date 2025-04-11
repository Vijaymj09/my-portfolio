import '../styles/projects.css';

const Projects = () => {
  return (
    <section className="projects-section">
      <h1 className="projects-title">My Projects</h1>

      <div className="project-card">
        <h2>Secured Forensic Evidence Management System</h2>
        <p>
          A forensic evidence system leveraging the immutability and transparency of blockchain along with the scalability of the MERN stack.
        </p>
        <ul>
          <li>Provides tamper-proof storage, secure access, and real-time tracking.</li>
          <li>User-friendly interface with strong accountability and legal compliance.</li>
          <li>Built with React, Node.js, Express, MongoDB, and blockchain integration.</li>
        </ul>
      </div>

      <div className="project-card">
        <h2>Sentiment Analysis of Online Reviews</h2>
        <p>
          A Python-based tool for scraping, processing, and analyzing customer reviews from e-commerce platforms.
        </p>
        <ul>
          <li>Used BeautifulSoup, TextBlob, Matplotlib, and Seaborn for NLP and visual insights.</li>
          <li>Automatically classifies reviews as positive, neutral, or negative.</li>
          <li>Helps businesses make data-driven decisions based on customer sentiment.</li>
        </ul>
      </div>

      <div className="project-card">
        <h2>True Feedback</h2>
        <p>
          A modern, secure platform for collecting anonymous feedback using Next.js 14.
        </p>
        <ul>
          <li>Implemented real-time server actions and MongoDB for efficient data flow.</li>
          <li>User authentication secured via JWT and Next-Auth.</li>
          <li>Styled with Tailwind CSS and ShadcnUI for a sleek, responsive UI.</li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
