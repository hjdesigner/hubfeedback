import styled, { css } from 'styled-components'
import { Exit } from '@styled-icons/boxicons-regular';

export const HeaderElement = styled.header`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.white};
    padding: ${theme.spaces.medium} ${theme.spaces.small};
    box-shadow: rgb(0 0 0 / 8%) 0 1px 1px;
  `}
`; 
export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderTitle = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fz2};
    color: ${theme.colors.black};
    font-weight: 500;
  `}
`;
export const HeaderPerson = styled.div`
  display: flex;
  align-items: center;
`;
export const HeaderPersonText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fz1};
    color: ${theme.colors.black};
    font-weight: 300;
  `}
`;
export const HeaderLogout = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spaces.small};
  `}
`;
export const HeaderLogoutIcon = styled(Exit)`
  transition: all .25s ease-in-out;
`;
export const HeaderLogoutButton = styled.button`
  width: 22px;
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  ${HeaderLogoutIcon}:hover {
    ${({ theme }) => css`
      fill: ${theme.colors.red};
    `}
  }
`;
