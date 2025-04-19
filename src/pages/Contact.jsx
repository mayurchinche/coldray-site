function Contact() {
    return (
      <div style={styles.container}>
        {/* <img src="/logo.png" alt="ColdRay Logo" style={styles.logo} /> */}
        
        <p style={styles.central}>Contact Us</p>
  
        <p style={styles.description}>Coldray Plasma Labs Pvt. Ltd.</p>
        <p style={styles.description}>Pashan Road Pune – 411008, India</p>
        <p style={styles.description}>
          <a href="mailto:vrushal@coldray.in" style={styles.email}>
            vrushal@coldray.in
          </a>
        </p>
      </div>
    );
  }
  
  const styles = {
    container: {
      padding: '40px 20px',
      maxWidth: '600px',
      margin: '0 auto',
      textAlign: 'center',
    },

    description: {
      marginTop:'10px',
      marginBottom: '10px',
      fontSize: '1.125rem',
      lineHeight: '2',
      color: '#444',
    },
    central: {
      marginTop: '50px',
      aling:'center',
      letterSpacing: '1px',
      fontSize: '1.5rem',
      fontWeight: '300', // keeps it NOT bold
      color: '#222',
      fontFamily: 'GoodTime, sans-serif',
      lineHeight: '1.8',
      marginBottom: '10px',
    },

    text: {
      marginBottom: '10px',
      fontSize: '1rem',
    },
    email: {
      color: 'black',
      textDecoration: 'underline',
    },
  };
  
  export default Contact;
  