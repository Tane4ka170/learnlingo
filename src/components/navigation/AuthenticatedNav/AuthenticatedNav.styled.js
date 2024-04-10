import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavList = styled.div`
  gap: 28px;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${({ theme }) => theme.primaryBlack};
`;

export const StyledLink = styled(Link)`
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.primaryBlack};
  align-items: center;
  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.primaryYellow};
  }

  &:active {
    color: ${({ theme }) => theme.primaryYellow};
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
`;

export const UserList = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 1140px) {
    gap: 16px;
  }
`;

export const LogButton = styled.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  color: #121417;
  background: none;
  min-width: 73px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    text-decoration: underline;
    color: #2b2e35;
  }
`;

export const Username = styled.li`
  border-radius: 12px;
  padding: 14px 14px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.primaryYellow};
`;

export const LogIcon = styled.img`
  width: 20px;
  height: 20px;
  stroke: ${({ theme }) => theme.primaryYellow};
`;

export const RegisterButton = styled.button`
  border-radius: 12px;
  padding: 14px 39px;
  width: 166px;
  height: 48px;
  background: ${({ theme }) => theme.primaryBlack};
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background: #8a8a89;
  }
`;
