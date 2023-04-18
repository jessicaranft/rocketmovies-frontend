import { useState } from 'react';
import { FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { Container, Form, Avatar } from './styles';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Profile() {
  const { user, updateProfile } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarfile] = useState(null);

  const navigate = useNavigate();

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    };

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
  }

  async function handleUpdateAvatar(e) {
    const file = e.target.files[0];
    setAvatarfile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  function handleBack() {
    navigate(-1);
  }

  return(
    <Container>
      <header>
        <ButtonText title="Voltar" onClick={handleBack} />
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt={`Foto de ${user.name}`} />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" onChange={handleUpdateAvatar} />
          </label>
        </Avatar>

        <Input
          type="text"
          placeholder="Seu nome"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          type="email"
          placeholder="Seu email"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Senha atual"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Nova senha"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}