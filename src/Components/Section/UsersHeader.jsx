import React from "react";
import { FaHome } from "react-icons/fa";
import {
  ContentHeader,
  HeaderTop,
  Title,
  Subtitle,
  BreadcrumbContainer,
  BreadcrumbItem,
} from "./stylesHeader";

const UsersHeader = () => {
  return (
    <ContentHeader>
      <HeaderTop>
        <Title>Usuários</Title>
        <Subtitle>Gerenciamento de usuários do sistema</Subtitle>
      </HeaderTop>
      <BreadcrumbContainer>
        <BreadcrumbItem>
          <a href="/">
            <FaHome /> Home
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem>Usuários</BreadcrumbItem>
      </BreadcrumbContainer>
    </ContentHeader>
  );
};

export default UsersHeader;
