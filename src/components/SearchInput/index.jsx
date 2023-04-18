import { forwardRef } from 'react';
import { Container } from './styles';

export const SearchInput = forwardRef(({icon:Icon, ...rest}, ref) => {
  return(
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} ref={ref} />
    </Container>
  );
});