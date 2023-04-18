import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { Container } from './styles';
import { Tag } from '../Tag';

export function Card({ data, ...rest }) {
  const rate = data.rate;
  const stars = Array.from({ length: 5 }, (_, index) => (
    index < rate ? <AiFillStar key={index} /> : <AiOutlineStar key={index} />
  ));

  return(
    <Container {...rest}>
      <h2>{data.title}</h2>
      <div className='rate'>
        {stars}
      </div>
      <p>{data.description}</p>
      <div>
        {data.tags.map(tag => <Tag key={tag.id} title={tag.name} className="tag" />)}
      </div>
    </Container>
  );
}