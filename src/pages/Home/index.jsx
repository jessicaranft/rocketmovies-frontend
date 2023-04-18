import { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import { SearchContext } from '../../hooks/search';

import { Container, HomeHeader } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';

export function Home() {
  const [movies, setMovies] = useState([]);
  const searchTitle = new URLSearchParams(location.search).get('title');
  const [search, setSearch] = useState(searchTitle || "");
  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/movie-preview/${id}`);
  }

  useEffect(() => {
    async function fetchMovies(search) {
      const response = await api.get(`/movie_notes?title=${search}`);
      setMovies(response.data);
    }

    fetchMovies(search);
  }, [search]);

  return(
    <Container>
      <SearchContext.Provider value={{ setSearch }}>
        <Header />
      </SearchContext.Provider>

      <HomeHeader>
        <h1>Meus filmes</h1>
        
        <Link to="/create-movie">
          <Button title="Adicionar filme" icon={FiPlus} />
        </Link>
      </HomeHeader>

      <main>
        {movies.length > 0 ? (
          movies.map(movie => (
            <Card key={String(movie.id)} data={movie} onClick={() => handleDetails(movie.id)} />
          ))
        ) : (
          <p>Nenhum filme encontrado.</p>
        )}
      </main>
    </Container>
  );
}