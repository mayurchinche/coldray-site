function About() {
    return (
      <div style={styles.container}>
        {/* <img src="/logo.png" alt="ColdRay Logo" style={styles.logo} /> */}
  
        <p style={styles.description}>
          Coldray Plasma Labs incorporated in Pune, India in 2025 is a deep tech startup focused on the development and manufacturing of equipment and devices that utilize plasma technologies.
        </p>
  
        <p style={styles.description}>
          It is incubated at the AIC-IPR Plasmatech Innovation Foundation, an esteemed entity under the Department of Atomic Energy, Government of India.
        </p>
  
        <p style={styles.description}>
          Coldray Plasma Labs, under the technical guidance of Institute of Plasma Research (IPR) aims to design and develop cutting edge products harnessing the power of plasma, to improve quality of life and aid and augment industrial output.
        </p>
      </div>
    );
  }
  
  const styles = {
    container: {
      padding: '40px 20px',
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center',
    },
    text: {
      marginBottom: '20px',
      lineHeight: '1.6',
      fontSize: '1rem',
    },
    description: {
      marginBottom: '20px',
      fontSize: '1.125rem',
      lineHeight: '2',
      color: '#444',
    },
  };
  
  export default About;
  