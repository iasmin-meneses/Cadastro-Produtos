import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";

import axios from "axios";
import Avatar from '../../assets/peoples-2.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'

import ContainerItens from "../../components/ContainerItens";
import  H1  from "../../components/Title";
import Button from "../../components/Button";

import { Container, Image, User }
  from "./styles";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("https://api-register-users-neon.vercel.app/users");

      setUsers(newUsers);
    }

    fetchUsers()
  }, [])

  async function deleteUser(userId) {
    await axios.delete(`https://api-register-users-neon.vercel.app/users/${userId}`)

    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers);
  }

    function goBackPage(){
      navigate('/')
    }

  return (
    <Container>
      <Image alt="logo-image" src={Avatar} />
      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="Lata de lixo" />
              </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>
          <img alt="seta" src={Arrow} />Voltar
        </Button>
      </ContainerItens>
    </Container>

  );

}
export default Users
