import React, { useState, useEffect } from "react";
import { FaUserPlus, FaChartPie } from "react-icons/fa";
import defaultAvatar from "../../Assets/Img/avatar5.png";
import { useRef } from "react";
import {
  Container,
  TableContainer,
  Table,
  Th,
  UserImage,
  TableRow,
  ActionButton,
  FormContainer,
  StatsContainer,
  SmallBox,
  Inner,
  Icon,
  Form,
  FormGroup,
  GenderContainer,
  CheckboxContainer,
  ButtonContainer,
  Button,
} from "./stylesForm";

class Utils {
  static dateFormat(date) {
    date = new Date(date);
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return (
      date.getDate() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getFullYear() +
      " " +
      date.getHours() +
      ":" +
      minutes
    );
  }
}

const UsersForm = () => {
  const fileInputRef = useRef(null);
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    gender: "M",
    birth: "",
    country: "",
    email: "",
    password: "",
    photo: "",
    admin: false,
    createdAt: new Date().toISOString(),
    updatedAt: null,
  });
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, photo: reader.result });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let lastId = Number(localStorage.getItem("lastUserId")) || 0;
    let updatedUsers;
    if (editingIndex !== null) {
      updatedUsers = users.map((user, index) =>
        index === editingIndex
          ? {
              ...formData,
              id: user.id,
              createdAt: user.createdAt,
              updatedAt: new Date().toISOString(),
            }
          : user
      );
      setEditingIndex(null);
    } else {
      const newId = lastId + 1;
      updatedUsers = [...users, { ...formData, id: newId }];
      localStorage.setItem("lastUserId", newId);
    }
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setFormData({
      name: "",
      gender: "M",
      birth: "",
      country: "",
      email: "",
      password: "",
      admin: false,
      createdAt: new Date().toISOString(),
      updatedAt: null,
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const deleteUser = (index) => {
    if (window.confirm("Deseja realmente excluir?")) {
      const updatedUsers = users.filter((_, i) => i !== index);
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  };

  const editUser = (index) => {
    setFormData(users[index]);
    setEditingIndex(index);
  };

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
          <tbody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <td>
                  <UserImage src={user.photo || defaultAvatar} alt="User" />
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.admin ? "Sim" : "Não"}</td>
                <td>
                  {user.updatedAt
                    ? `Editado em: ${Utils.dateFormat(user.updatedAt)}`
                    : Utils.dateFormat(user.createdAt)}
                </td>
                <td>
                  <ActionButton primary onClick={() => editUser(index)}>
                    Editar
                  </ActionButton>
                  <ActionButton onClick={() => deleteUser(index)}>
                    Excluir
                  </ActionButton>
                </td>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <FormContainer>
        <StatsContainer>
          <SmallBox bgColor="#28a745">
            <Inner>
              <h3>{users.length}</h3>
              <p>Usuários</p>
            </Inner>
            <Icon>
              <FaUserPlus />
            </Icon>
          </SmallBox>
          <SmallBox bgColor="#ffc107">
            <Inner>
              <h3>{users.filter((user) => user.admin).length}</h3>
              <p>Administradores</p>
            </Inner>
            <Icon>
              <FaChartPie />
            </Icon>
          </SmallBox>
        </StatsContainer>

        <h2>{editingIndex !== null ? "Editar Usuário" : "Novo Usuário"}</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <label>Nome</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label>Gênero</label>
            <GenderContainer>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="M"
                  checked={formData.gender === "M"}
                  onChange={handleChange}
                />
                Masculino
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="F"
                  checked={formData.gender === "F"}
                  onChange={handleChange}
                />
                Feminino
              </label>
            </GenderContainer>
          </FormGroup>
          <FormGroup>
            <label>Nascimento</label>
            <input
              type="date"
              name="birth"
              value={formData.birth}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>País</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
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
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label>Senha</label>
            <input
              type="password"
              required
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Foto</label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
          </FormGroup>
          <FormGroup>
            <CheckboxContainer>
              <input
                type="checkbox"
                name="admin"
                checked={formData.admin}
                onChange={handleChange}
              />
              <label>Administrador</label>
            </CheckboxContainer>
          </FormGroup>
          <ButtonContainer>
            <Button primary type="submit">
              {editingIndex !== null ? "Salvar Alterações" : "Salvar"}
            </Button>
          </ButtonContainer>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default UsersForm;
