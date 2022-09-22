import styled from 'styled-components';

export const StyledMoviesGalleryItem = styled.li`
  height: 100%;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
    /* cursor: zoom-in; */
  }
`;

export const MoviesItem = styled.img`
  width: 100%;
  height: 290px;
  object-fit: cover;
`;

export const StyledText = styled.p`
  color: ${p => p.theme.colors.text.primaryText};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.text};
  padding-left: 20px;
`;
