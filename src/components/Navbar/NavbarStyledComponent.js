import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

export const Span = styled.span`
  font-weight: bold;
  font-size: 20px;
  color: white;
  margin-left: 10px;
`;

export const NavItems = styled.ul`
  display: flex;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: white;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.1);
  }
`;

export const GitHubButton = styled.a`
  background: linear-gradient(90deg, #ff7eb3, #ff758c);
  padding: 10px 16px;
  color: white;
  border-radius: 25px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 8px rgba(255, 117, 140, 0.6);

  &:hover {
    background: linear-gradient(90deg, #ff758c, #ff7eb3);
    box-shadow: 0 0 12px rgba(255, 117, 140, 1);
  }
`;

export const ButtonContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;
`;

export const MobileLink = styled.a`
  color: white;
  font-size: 22px;
  margin: 16px 0;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.1);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;
