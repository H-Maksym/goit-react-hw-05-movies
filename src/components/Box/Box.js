import styled from 'styled-components';
import {
  position,
  space,
  layout,
  flexbox,
  color,
  grid,
  border,
} from 'styled-system';

const Box = styled.div`
  ${position};
  ${space};
  ${layout};
  ${flexbox};
  ${color};
  ${grid};
  ${border};
`;

export default Box;
