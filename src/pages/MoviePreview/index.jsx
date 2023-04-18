import { useState, useEffect } from 'react';
import { AiFillStar, AiOutlineStar, AiOutlineClockCircle } from 'react-icons/ai';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

import { SearchContext } from '../../hooks/search';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { Container, Navigation, MovieHeader } from './styles';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function MoviePreview() {
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  const { user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const searchTitle = new URLSearchParams(location.search).get('title');
  const [search, setSearch] = useState(searchTitle || "");

  const rate = data ? data.rate : null;
  const stars = Array.from({ length: 5 }, (_, index) => (
    index < rate ? <AiFillStar key={index} /> : <AiOutlineStar key={index} />
  ));

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover este filme?");

    if (confirm) {
      await api.delete(`/movie_notes/${params.id}`);
      handleBack();
    }
  }
  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movie_notes/${params.id}`);
      setData(response.data);
    }

    fetchMovie();
  }, []);

  return (
    <Container>
      <SearchContext.Provider value={{ setSearch }}>
        <Header />
      </SearchContext.Provider>

      <Navigation>
        <ButtonText title="Voltar" onClick={handleBack}/>
      </Navigation>

      { data &&
        <main>
          <MovieHeader>
            <div className="movie-title">
              <h1>{data.title}</h1>
              {stars}
            </div>

            <div className="author">
              <img src={avatarUrl} alt={`Foto de ${user.name}`} />
              <span>Por {user.name}</span>
              <AiOutlineClockCircle />
              <span>{format(new Date(data.created_at), 'dd/MM/yy \'às\' HH:mm')}</span>
            </div>
          </MovieHeader>

          {data.tags &&
            <div>
              {
                data.tags.map(tag => (
                  <Tag key={String(tag.id)} title={tag.name} className="tag" />
                ))
              }
            </div>
          }

          <p>
            {data.description}
          </p>

          <Button title="Excluir filme" onClick={handleRemove} />
        </main>
      }


      
    </Container>
  );
}