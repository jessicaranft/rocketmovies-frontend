import { useState, useEffect, useRef, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { SearchContext } from '../../hooks/search';
import { api } from '../../services/api';

import { Container, Brand, Profile, Logout } from './styles';
import { SearchInput } from '../SearchInput';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Header() {
  const { setSearch } = useContext(SearchContext);
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = useRef(null);
  const [searchInput, setSearchInput] = useState("");

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  function handleSearch(e) {
    setSearchInput(e.target.value);
    
    if (e.target.value.length > 0) {
      navigate(`/?title=${e.target.value}`);
    } else {
      navigate("/");
    }
  }

  useEffect(() => {
    setSearch(searchInput);
    const searchParams = new URLSearchParams(location.search);
    const title = searchParams.get("title");
    setSearchInput(title || "");
    inputRef.current.focus();
  }, [location.search, setSearch, searchInput]);

  return(
    <Container>
      <Link to="/">
        <Brand to="/">RocketMovies</Brand>
      </Link>

      <SearchInput
        placeholder="Pesquisar pelo título"
        onChange={handleSearch}
        value={searchInput}
        ref={inputRef}
      />

      <Profile>
        <div>
          <Link to="/profile">
            <strong>{user.name}</strong>
          </Link>
          
          <Logout onClick={handleSignOut}>
            sair
          </Logout>
        </div>

        <Link to="/profile">
          <img src={avatarUrl} alt={`Foto de ${user.name}`} />
        </Link>
      </Profile>

    </Container>
  );
}