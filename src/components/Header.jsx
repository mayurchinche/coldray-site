import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Centered Logo */}
        <div style={styles.logoContainer}>
          <img src="/logo.png" alt="ColdRay Logo" style={styles.logo} />
        </div>

        {/* Nav on Right */}
        <nav style={styles.navLinks}>
          <NavLink to="/" style={navLinkStyle} end>Home</NavLink>
          <NavLink to="/about" style={navLinkStyle}>About Us</NavLink>
          <NavLink to="/contact" style={navLinkStyle}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
const styles = {
  header: {
    width: '100%',
    padding: '10px 30px',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr', // center logo, right nav, left spacing
    alignItems: 'center',
    position: 'relative',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    gridColumn: 2,
  },
  logo: {
    height: '200px',
    maxWidth: '100%',
    objectFit: 'contain',
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '30px',
    gridColumn: 3,
  },
};

const navLinkStyle = ({ isActive }) => ({
  textDecoration: 'none',
  color: 'black',
  fontSize: '16px',
  paddingBottom: '2px',
  borderBottom: isActive ? '2px solid black' : 'none',
});

export default Header;
