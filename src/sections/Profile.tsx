import './Profile.css';

const Profile = () => {
  return (
    <section className="profile-section">
      <img
        src="/your-photo.jpg"
        alt="Vijay M J"
        className="profile-pic"
      />
      <h1>VIjay M J</h1>
      <h2>Frontend Developer | React Enthusiast</h2>
      <p className="profile-bio">
        Passionate about building beautiful and functional web experiences. Skilled in React, JavaScript, and UI/UX principles.
      </p>
    </section>
  );
};

export default Profile;
