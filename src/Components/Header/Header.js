import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import avatar5 from "../../Assets/Img/avatar5.png";

const LogoContainer = styled.a`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 300;
  background-color: #367fa9;
  color: #fff;
  border-bottom: 0 solid transparent;
  display: block;
  float: left;
  height: 45px;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  width: 230px;
  padding: 0 13px;
  overflow: hidden;
  text-decoration: none;

  @media (max-width: 768px) {
    width: 100%;
    float: none;
  }
`;
const LogoMini = styled.span`
  display: none;
  font-size: 14px;
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
`;

const LogoLg = styled.span`
  display: block;
  font-size: 18px;
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;

  @media (max-width: 768px) {
    margin: 0;
    align-items: center;
  }
`;

const HeaderContainer = styled.header`
  background-color: #3c8dbc;
  color: white;
  padding: 3px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
      width: 100%;
      float: none;
    }
  }
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MenuIcon = styled.div`
  font-size: 17px;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
  }
`;

const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    margin-right: 25px;
    cursor: pointer;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;

const UserName = styled.span`
  font-size: 16px;
  font-weight: bold;
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <>
      <LogoContainer href="/" className="logolt">
        <LogoMini>HCODE</LogoMini>
        <LogoLg>HCODE</LogoLg>
      </LogoContainer>

      <HeaderContainer>
        <LeftContainer>
          <MenuIcon>
            <FaBars />
          </MenuIcon>
        </LeftContainer>

        <UserInfo>
          <UserAvatar src={avatar5} alt="Usuário" />
          <UserName>Carlos Junior</UserName>
        </UserInfo>
      </HeaderContainer>
    </>
  );
};

export default Header;
