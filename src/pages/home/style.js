import styled, { css } from 'styled-components'

export const HomeElement = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: ${theme.spaces.medium} ${theme.spaces.small};
    margin-top: ${theme.spaces.large};
  `}
`; 
export const HomeWrapper = styled.main`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
`;
export const HomeSections = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spaces.large};
    width: 100%;
  `}
`;
