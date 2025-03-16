import styled from "styled-components";

export const ContentHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f4f4f4;
  border-bottom: 2px solid #ddd;
  position: relative;
  padding: 15px;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const HeaderTop = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.h1`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: #444;
  margin: 0;
  margin-left: 10px;
  margin-bottom: 3px;
  margin-right: 12px;

  @media (max-width: 991px) {
    font-size: 20px;
  }
`;

export const Subtitle = styled.p`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 15px;
  font-weight: 300;
  color: #777;
  margin: 0;
`;

export const BreadcrumbContainer = styled.nav`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #444;
  text-decoration: none;

  @media (max-width: 991px) {
    position: relative;
    margin-top: 5px;
    top: 0;
    right: 0;
    float: none;
    padding-left: 10px;
    width: 100%;
    background: #d2d6de;
    font-size: 13px;
    padding: 9px 1px;
    border-radius: 2px;
  }
`;

export const BreadcrumbItem = styled.span`
  display: flex;
  align-items: center;

  @media (max-width: 991px) {
    margin-left: 8px;
  }

  &:not(:last-child)::after {
    content: " > ";
    margin: 0 4px;
    color: #aaa;

    @media (max-width: 991px) {
      color: #97a0b3;
    }
  }

  a {
    text-decoration: none;
    color: #444;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
  }
`;
