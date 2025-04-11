import '../styles/Education.css'; // Import the CSS file for styling

const Education = () => {
  return (
    <section className="education-section">
      <h1 className="education-title">Education</h1>

      <div className="education-item">
        <h2>Siddaganga Institute of Technology, Tumkur</h2>
        <p><strong>Degree:</strong> B.Tech in Computer Science</p>
        <p><strong>CGPA:</strong> 8.42</p>
        <p><strong>Year:</strong> 2021 – Present</p>
      </div>

      <div className="education-item">
        <h2>Siddaganga PU College, Davangere</h2>
        <p><strong>Senior Secondary (Class XII – PU Board)</strong></p>
        <p><strong>Percentage:</strong> 85.4%</p>
        <p><strong>Year:</strong> 2021</p>
      </div>

      <div className="education-item">
        <h2>Siddaganga CBSE School, Davangere</h2>
        <p><strong>Secondary (Class X – CBSE)</strong></p>
        <p><strong>Percentage:</strong> 79%</p>
        <p><strong>Year:</strong> 2019</p>
      </div>
    </section>
  );
};

export default Education;
