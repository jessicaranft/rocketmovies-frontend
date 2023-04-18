import { Container } from './styles';

export function Button({ title, icon:Icon, inverted, ...rest }) {
  return(
    <Container type="button" inverted={inverted} {...rest}>
      {Icon && <Icon size={20} />}
      {title}
    </Container>

  );
}