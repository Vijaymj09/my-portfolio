import '../styles/Profile.css'; // Importing CSS styles for the Profile component
const Profile = () => {
  return (
    <section className="profile-section">
      <img
        src="src/IMG_20250102_182116_154.webp"
        alt="Vijay M J"
        className="profile-pic"
      />
      <h1>Hi, I'm Vijay M J 👋</h1>
      <h2>Full Stack Web Developer </h2>
      <p className="profile-bio">
        I'm a passionate Full Stack Web Developer with strong problem-solving skills and a keen interest in building scalable and secure web applications. My recent projects include developing a blockchain-powered forensic evidence management system and an anonymous feedback platform using the latest tech stack like Next.js, MongoDB, Tailwind CSS, and Next-Auth.
        <br /><br />
        I enjoy turning complex problems into clean, efficient solutions, and I'm always eager to explore new technologies — especially in the fields of Web3, security, and user experience.
      </p>
    </section>
  );
};

export default Profile;
