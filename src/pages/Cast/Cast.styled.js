import styled from 'styled-components';

export const StyledListGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 40px;
  padding-top: 10px;
`;
