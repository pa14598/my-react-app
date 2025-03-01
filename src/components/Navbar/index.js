import React from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink, Overlay } from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <>
      <Nav>
        <NavbarContainer>
        <NavLogo to='/'>
  <a style={{
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    cursor: "pointer",
    fontSize: "1.8rem",
    fontWeight: "bold",
    background: "linear-gradient(45deg, #ff8a00, #e52e71)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    transition: "transform 0.3s ease-in-out"
  }}
    onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
    onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
  >
    <DiCssdeck size="3rem" style={{ color: "#ff8a00", filter: "drop-shadow(0px 0px 10px #ff8a00)" }} />
    <Span style={{ paddingLeft: "8px", background: "linear-gradient(90deg, #ff8a00, #e52e71)", 
    WebkitBackgroundClip: "text", 
    WebkitTextFillColor: "transparent", 
    fontWeight: "bold" }}>
    Pavan Kumar
    </Span>

    <img src="https://static.vecteezy.com/system/resources/thumbnails/038/516/357/small_2x/ai-generated-eagle-logo-design-in-black-style-on-transparant-background-png.png" 
         alt="Eagle Logo" 
         style={{ width: "50px", height: "50px", marginRight: "10px", filter: "invert(1)" }} />
  </a>
</NavLogo>





          <MobileIcon onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavItems>
            <NavLink href="#about">About</NavLink>
            <NavLink href='#skills'>Skills</NavLink>
            <NavLink href='#experience'>Experience</NavLink>
            <NavLink href='#projects'>Projects</NavLink>
            <NavLink href='#education'>Education</NavLink>
          </NavItems>
          <ButtonContainer>
            <GitHubButton href={Bio.github} target="_blank">GitHub Profile</GitHubButton>
          </ButtonContainer>
        </NavbarContainer>
      </Nav>

      {/* Mobile Menu with Overlay */}
      {isOpen && (
        <>
          <Overlay onClick={() => setIsOpen(false)} />
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(false)}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => setIsOpen(false)}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => setIsOpen(false)}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => setIsOpen(false)}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => setIsOpen(false)}>Education</MobileLink>
            <GitHubButton href={Bio.github} target="_blank">GitHub Profile</GitHubButton>
          </MobileMenu>
        </>
      )}
    </>
  );
};

export default Navbar;
