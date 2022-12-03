import styled, { css } from 'styled-components'
import { UserBadge } from '@styled-icons/boxicons-solid'

export const FeedbackCard = styled.section`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    padding: ${theme.spaces.medium};
    border-radius: 5px;
    border: 1px solid ${theme.colors.gray};
    display: flex;
    flex-wrap: wrap;
  `}
`;
export const FeedbackNav = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    margin-top: ${theme.spaces.medium};
    margin-bottom: ${theme.spaces.xLarge};
  `}
`;
export const FeedbackNavButton = styled.div`
  ${({ theme, active }) => css`
    font-size: ${theme.fontSizes.fz1};
    color: ${active ? theme.colors.red : theme.colors.black};
    font-weight: 400;
    padding: 0 ${theme.spaces.medium};
    margin-right:${theme.spaces.medium};
    border: 0;
    background-color: transparent;
    cursor: pointer;
    position: relative;
    transition: all .25s ease-in-out;

    &::after {
      content: '';
      width: 100%;
      height: 3px;
      position: absolute;
      left: 0;
      bottom: -8px;
      background-color: ${active ? theme.colors.red : theme.colors.blackLight};
      transition: all .25s ease-in-out;
    }

    &:hover {
      color: ${theme.colors.red};

      &::after {
        background-color: ${theme.colors.red};
      }
    }
  `}
`;
export const FeedbackContent = styled.ul`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: ${theme.spaces.medium} 0;
  `}
`;
export const FeedbackContentList = styled.li`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    padding-bottom: ${theme.spaces.small};
    margin-bottom: ${theme.spaces.large};
    box-shadow: rgb(0 0 0 / 15%) 0 1px 1px 1px;
  `}
`;
export const FeedbackContentImg = styled.div`
  width: 15%;
`;
export const FeedbackContentTexts = styled.div`
  width: 85%;
`;
export const FeedbackContentTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fz2};
    color: ${theme.colors.black};
    font-weight: 500;
    margin-top: ${theme.spaces.medium};
    margin-bottom: ${theme.spaces.small};
    width: 100%;
  `}
`;
export const FeedbackContentText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fz1};
    color: ${theme.colors.black};
    font-weight: 300;
    margin-bottom: ${theme.spaces.small};
    width: 100%;
    line-height: 25px;
  `}
`;
export const FeedbackAvatarIcon = styled(UserBadge)`
  ${({ theme }) => css`
    max-width: 150px;
    width: 100%;
    fill: ${theme.colors.gray};
  `}
`;
