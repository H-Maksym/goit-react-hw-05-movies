import styled from 'styled-components';

export const StyledMoviesImg = styled.img`
  width: 100%;
  height: auto;
`;

export const StyledPrimaryTitle = styled.h2`
  color: ${p => p.theme.colors.text.sectionTitle};
  font-size: ${p => p.theme.fontSizes.xxl};
  /* margin-bottom: ${p => `${p.theme.space[5]}px`}; */
  line-height: ${p => p.theme.lineHeights.sectionTitle};
`;

export const StyledSecondaryTitle = styled.p`
  color: ${p => p.theme.colors.text.primaryText};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.body};
`;

export const StyledText = styled.p`
  color: ${p => p.theme.colors.text.primaryText};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.text};
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-bottom: 4px solid;
  border-color: orange;
`;

export const StyledListItem = styled.li`
  color: ${p => p.theme.colors.text.primaryText};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.medium};

  &:hover {
    color: ${p => p.theme.colors.text.sectionTitle};
  }
`;
