import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import { SearchContext } from '../../hooks/search';

import { Container, Navigation, Form } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { TagItem } from '../../components/TagItem';

export function CreateMovie() {
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const searchTitle = new URLSearchParams(location.search).get('title');
  const [search, setSearch] = useState(searchTitle || "");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewMovie() {
    if (newTag) {
      return alert("Você inseriu um marcador, mas não clicou para adicionar. Clique no botão de + para adicionar, ou deixe o campo em branco.");
    }

    if (!title) {
      return alert("Digite o título do filme.");
    }

    if (!rate) {
      return alert("Digite a nota do filme.");
    }

    await api.post("/movie_notes", {
      title,
      rate,
      description,
      tags
    });

    alert("Filme adicionado com sucesso!");
    navigate(-1);
  }

  function handleClearTags() {
    setTags([]);
    setNewTag("");
  }

  function handleBack() {
    navigate(-1);
  }

  return(
    <Container>
      <SearchContext.Provider value={{ setSearch }}>
        <Header />
      </SearchContext.Provider>

      <Navigation>
        <ButtonText title="Voltar" onClick={handleBack} />
      </Navigation>

      <main>
        <Form>
          <header>
            <h1>Novo filme</h1>
          </header>

          <div className="col-2">
            <Input
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
              value={title}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              onChange={e => setRate(e.target.value)}
              value={rate}
            />
          </div>

          <Textarea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
            value={description}
          />

          <h2>Marcadores</h2>
          <div className="tags">
            {
              tags.map((tag, index) => (
                <TagItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }
            <TagItem
              isNew
              placeholder="Novo marcador"
              onChange={e => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />
          </div>

          <div className="col-2">
            <Button title="Limpar marcadores" onClick={handleClearTags} inverted />
            <Button title="Salvar alterações" onClick={handleNewMovie} />
          </div>

        </Form>
      </main>
    </Container>
  );
}