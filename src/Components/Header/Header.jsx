import React from "react";
import { FaBars } from "react-icons/fa";
import avatar5 from "../../Assets/Img/avatar5.png";
import {
  LogoLg,
  LogoContainer,
  LogoMini,
  HeaderContainer,
  LeftContainer,
  MenuIcon,
  UserInfo,
  UserAvatar,
  UserName,
} from "./styles";

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
