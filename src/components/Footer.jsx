function Footer() {
    return (
      <footer style={styles.footer}>
        <p>© 2025. All Rights Reserved.</p>
        <a href="https://www.linkedin.com/in/vrushalphadnis/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
          <img
            src="/linkedin-icon.png" // Add a LinkedIn icon in public folder
            alt="LinkedIn"
            style={styles.icon}
          />
        </a>
      </footer>
    );
  }
  
  const styles = {
    footer: {
      textAlign: 'center',
      padding: '20px',
      borderTop: '1px solid #ccc',
      marginTop: '40px',
    },
    icon: {
      width: '24px',
      marginTop: '10px',
    },
  };
  
  export default Footer;
  