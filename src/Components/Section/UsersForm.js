import React from "react";
import styled from "styled-components";
import { FaUserPlus, FaChartPie } from "react-icons/fa";

const Container = styled.div`
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

const TableContainer = styled.div`
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const Th = styled.th`
  text-align: left;
  padding: 10px;
  background: #f1f1f1;
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const SmallBox = styled.div`
  flex: 1;
  background-color: ${(props) => props.bgColor || "#ccc"};
  color: white;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Inner = styled.div`
  h3 {
    margin: 0;
    font-size: 24px;
  }
  p {
    margin: 5px 0 0;
    font-size: 12px;
  }
`;

const Icon = styled.div`
  font-size: 24px;
`;

const FormContainer = styled.div`
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
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

const GenderContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const CheckboxContainer = styled.div`
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
  font-size: 14px;
  display: flex;
  gap: 8px;
  margin-right: 510px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;

const Button = styled.button`
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

const UsersForm = () => {
  return (
    <Container>
      <TableContainer>
        <h3>Lista de Usuários</h3>
        <Table>
          <thead>
            <tr>
              <Th>Foto</Th>
              <Th>Nome</Th>
              <Th>E-mail</Th>
              <Th>Admin</Th>
              <Th>Criado em</Th>
              <Th>Ações</Th>
            </tr>
          </thead>
          <tbody id="table-users"></tbody>
        </Table>
      </TableContainer>

      <FormContainer>
        <StatsContainer>
          <SmallBox bgColor="#28a745">
            <Inner>
              <h3 id="number-users">0</h3>
              <p>Usuários</p>
            </Inner>
            <Icon>
              <FaUserPlus />
            </Icon>
          </SmallBox>

          <SmallBox bgColor="#ffc107">
            <Inner>
              <h3 id="number-users-admin">0</h3>
              <p>Administradores</p>
            </Inner>
            <Icon>
              <FaChartPie />
            </Icon>
          </SmallBox>
        </StatsContainer>

        <h2>Novo Usuário</h2>
        <Form>
          <FormGroup>
            <label>Nome</label>
            <input type="text" required />
          </FormGroup>
          <FormGroup>
            <label>Gênero</label>
            <GenderContainer>
              <label>
                <input type="radio" name="gender" value="M" /> Masculino
              </label>
              <label>
                <input type="radio" name="gender" value="F" /> Feminino
              </label>
            </GenderContainer>
          </FormGroup>
          <FormGroup>
            <label>Nascimento</label>
            <input type="date" />
          </FormGroup>
          <FormGroup>
            <label>País</label>
            <select>
              <option value="">Selecione um país</option>
              <option value="Argentina">Argentina</option>
              <option value="Bolivia">Bolívia</option>
              <option value="Brasil">Brasil</option>
              <option value="Colômbia">Colômbia</option>
              <option value="Estados Unidos">Estados Unidos</option>
              <option value="Venezuela">Venezuela</option>
            </select>
          </FormGroup>
          <FormGroup>
            <label>E-mail</label>
            <input type="email" required />
          </FormGroup>
          <FormGroup>
            <label>Senha</label>
            <input type="password" required />
          </FormGroup>
          <FormGroup>
            <label>Foto</label>
            <input type="file" />
          </FormGroup>
          <FormGroup>
            <CheckboxContainer>
              <input type="checkbox" name="admin" />
              <label>Administrador</label>
            </CheckboxContainer>
          </FormGroup>
          <ButtonContainer>
            <Button primary type="submit">
              Salvar
            </Button>
          </ButtonContainer>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default UsersForm;
