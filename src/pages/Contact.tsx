import '../styles/Contact.css'; // Import the CSS file for styling

const Contact = () => {
  return (
    <section className="contact-section">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-text">
        I’d love to hear from you! Whether you have a question, a project idea, or just want to say hi —
        feel free to reach out.
      </p>

      <div className="contact-details">
        <p><strong>Name:</strong> Vijay M J</p>
        <p><strong>Email:</strong> <a href="mailto:karthimj09@gmail.com">karthimj09@gmail.com</a></p>
        <p><strong>Phone:</strong> +91 6363112431</p>
        <p><strong>Location:</strong> Tumkur, Karnataka, India</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/vijaymj09" target="_blank" rel="noopener noreferrer">linkedin.com/in/vijaymj09</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/Vijaymj09" target="_blank" rel="noopener noreferrer">github.com/Vijaymj09</a></p>
      </div>
    </section>
  );
};

export default Contact;
