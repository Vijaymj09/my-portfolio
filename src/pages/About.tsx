import '../styles/About.css'; // Import the CSS file for styling
const About = () => {
  return (
    <section className="about-section">
      <h1 className="about-title">About Me</h1>
      <p className="about-text">
        I'm <strong>Vijay M J</strong>, a B.Tech Computer Science student at Siddaganga Institute of Technology with a CGPA of 8.42. My journey in tech is driven by curiosity and the joy of building things that work — and work well.
      </p>

      <p className="about-text">
        I have experience building full stack projects with technologies like <strong>Next.js</strong>, <strong>MongoDB</strong>, <strong>React</strong>, and <strong>Tailwind CSS</strong>. I'm also deeply interested in blockchain applications, and recently worked on a secure forensic evidence system leveraging the immutability of blockchain.
      </p>

      <p className="about-text">
        I enjoy writing clean code, learning new tools, and collaborating with others to bring ideas to life. I'm always improving my skills in UI/UX, backend APIs, and security — and yes, I love debugging!
      </p>

      <p className="about-text">
        When I’m not coding, you’ll find me playing sports, attending tech events, or tinkering with new project ideas.
      </p>

      <p className="about-text call-to-action">
        Want to see what I’ve built? 👉 <a href="#projects">Check out my projects</a> or <a href="#contact">get in touch</a>!
      </p>
    </section>
  );
};

export default About;
