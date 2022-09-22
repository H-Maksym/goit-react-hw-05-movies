import styled from 'styled-components';

export const StyledReviewsList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  grid-gap: 40px;
`;

export const StyledReviewsListItem = styled.li`
  border-bottom: 1px dashed;
  border-color: orange;
  padding-bottom: 20px;
`;

export const StyledSecondaryTitle = styled.h3`
  color: ${p => p.theme.colors.text.primaryText};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.body};
`;

export const StyledText = styled.p`
  color: ${p => p.theme.colors.text.primaryText};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.text};
  padding-left: 20px;
`;
