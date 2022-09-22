import styled from 'styled-components';

export const StyledListGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 40px;
  padding-top: 10px;
`;

export const StyledListItemGallery = styled.li`
  border-radius: 10px 10px 0 0;
  height: 100%;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
    /* cursor: zoom-in; */
  }
`;

export const StyledImageGallery = styled.img`
  border-radius: 10px 10px 0 0;
`;
