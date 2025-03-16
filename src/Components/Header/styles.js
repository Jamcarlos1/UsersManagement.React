import styled from "styled-components";

export const LogoContainer = styled.a`
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
export const LogoMini = styled.span`
  display: none;
  font-size: 14px;
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
`;

export const LogoLg = styled.span`
  display: block;
  font-size: 18px;
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;

  @media (max-width: 768px) {
    margin: 0;
    align-items: center;
  }
`;

export const HeaderContainer = styled.header`
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
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuIcon = styled.div`
  font-size: 17px;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
  }
`;

export const UserAvatar = styled.img`
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

export const UserName = styled.span`
  font-size: 16px;
  font-weight: bold;
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;

  @media (max-width: 768px) {
    display: none;
  }
`;
