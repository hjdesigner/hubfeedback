import styled, { css } from 'styled-components'
import { UserBadge } from '@styled-icons/boxicons-solid'


export const ProfileCard = styled.section`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    padding: ${theme.spaces.small};
    border-radius: 5px;
    border: 1px solid ${theme.colors.gray};
    display: flex;
  `}
`;
export const ProfileAvatarElement = styled.div`
  ${({ theme }) => css`
    width: 20%;
    padding: ${theme.spaces.small};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
export const ProfileAvatarIcon = styled(UserBadge)`
  ${({ theme }) => css`
    max-width: 250px;
    width: 100%;
    fill: ${theme.colors.gray};
  `}
`;
export const ProfileInfo = styled.div`
  ${({ theme }) => css`
    width: 80%;
    padding: ${theme.spaces.small};
    display: flex;
    flex-wrap: wrap;
  `}
`;
export const ProfileName = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fz3};
    color: ${theme.colors.black};
    font-weight: 500;
    margin-top: ${theme.spaces.medium};
    margin-bottom: ${theme.spaces.small};
    width: 100%;
  `}
`;
export const ProfileText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fz2};
    color: ${theme.colors.black};
    font-weight: 300;
    margin-bottom: ${theme.spaces.small};
    width: 100%;
  `}
`;
