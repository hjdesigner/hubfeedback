import React from "react";
import * as S from './style';

const Header = () => {
  return (
    <S.HeaderElement>
      <S.HeaderWrapper>
        <S.HeaderTitle>Hub Feedback</S.HeaderTitle>
        <S.HeaderPerson>
          <S.HeaderPersonText>Hi Henrique Melanda</S.HeaderPersonText>
          <S.HeaderLogout>
            <S.HeaderLogoutButton>
              <S.HeaderLogoutIcon />
            </S.HeaderLogoutButton>
          </S.HeaderLogout>
        </S.HeaderPerson>
      </S.HeaderWrapper>
    </S.HeaderElement>
  )
}

export default Header;
