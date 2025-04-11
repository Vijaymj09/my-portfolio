import '../styles/Interests.css'; // Importing the CSS file for styling

const Interests = () => {
  return (
    <section className="interests-section">
      <h1 className="interests-title">My Interests</h1>
      <p className="interests-intro">
        Outside of academics and projects, I love diving into creative and relaxing activities. Here are a few things I'm passionate about:
      </p>

      <ul className="interests-list">
        <li>🌐 Web Development – Building fast, responsive, and scalable websites.</li>
        <li>🎨 UI/UX Design – Crafting user experiences that feel intuitive and engaging.</li>
        <li>🎯 Technical Events & Hackathons – Always eager to learn, compete, and collaborate.</li>
        <li>🎬 Watching Movies – Especially thrillers, documentaries, and tech-based films.</li>
        <li>📚 Reading Books – I enjoy books on technology, motivation, and fiction.</li>
        <li>🎧 Listening to Music – Music helps me relax and focus while coding.</li>
        <li>🏸 Sports – I enjoy playing and following sports to stay refreshed and balanced.</li>
      </ul>
    </section>
  );
};

export default Interests;
