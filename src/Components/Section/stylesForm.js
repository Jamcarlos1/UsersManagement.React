import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px;
    background-color: #f8f9fa;
  }
`;

export const TableContainer = styled.div`
  flex: 2;
  background: white;
  padding: 0;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  h3 {
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 500;
    color: #444;
  }
  tr {
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 400;
    color: #333;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  td:nth-child(3) {
    padding-right: 40px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Th = styled.th`
  text-align: left;
  padding: 10px;
  background: #f1f1f1;
`;

export const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f9fa;
  }
`;

export const ActionButton = styled.button`
  padding: 4px 8px;
  margin: 2px;
  border: none;

  cursor: pointer;
  color: #fff;
  background-color: ${({ primary }) => (primary ? "#007bff" : "#dc3545")};

  &:hover {
    opacity: 0.8;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const SmallBox = styled.div`
  flex: 1;
  background-color: ${(props) => props.bgColor || "#ccc"};
  color: white;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Inner = styled.div`
  h3 {
    margin: 0;
    font-size: 24px;
  }
  p {
    margin: 5px 0 0;
    font-size: 12px;
  }
`;

export const Icon = styled.div`
  font-size: 24px;
`;

export const FormContainer = styled.div`
  flex: 1;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  h2 {
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 500;
    color: #444;
    font-size: 19px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  color: #333;

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }

  input,
  select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
`;

export const GenderContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const CheckboxContainer = styled.div`
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
  font-size: 14px;
  display: flex;
  gap: 8px;
  margin-right: 510px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;

export const Button = styled.button`
  background: ${(props) => (props.primary ? "#28a745" : "#ccc")};
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
