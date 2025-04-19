function Home() {
  return (
    <div style={styles.container}>

      <p style={styles.heading}>COLDRAY PLASMA LABS</p>


      <p style={styles.central}>Coming Soon !</p>

      <p style={styles.description}>
        We are working on something interesting, and will launch soon.
        <br />
        If you wish to reach out to us, please visit the Contact Us for details.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: '60px 20px',
    maxWidth: '700px',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: "'Helvetica Neue', sans-serif",
  },
  heading: {
    fontSize: '3rem',
    color: '#222',
    letterSpacing: '2px',
    fontFamily: 'GoodTime, sans-serif',
    fontWeight: '300', // keeps it NOT bold
    marginBottom: '20px',
    textTransform: 'uppercase',
  },
  description: {
    marginBottom: '20px',
    fontSize: '1.125rem',
    lineHeight: '2',
    color: '#444',
  },
  central: {
    fontSize: '1.5rem',
    lineHeight: '1.8',
    color: '#444',
    marginBottom: '10px',
  },
};

export default Home;
