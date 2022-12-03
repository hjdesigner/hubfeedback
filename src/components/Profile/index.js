import React from 'react'
import * as S from './style'

const Profile = () => {
  return (
    <S.ProfileCard>
      <S.ProfileAvatarElement>
        <S.ProfileAvatarIcon />
      </S.ProfileAvatarElement>
      <S.ProfileInfo>
        <S.ProfileName>
          Henrique Rodrigues Dos Santos Melanda
        </S.ProfileName>
        <S.ProfileText>
          Sênior Front End Developer
        </S.ProfileText>
        <S.ProfileText>
          In the company since 06/12/2022
        </S.ProfileText>
        <S.ProfileText>
          Squad The Best
        </S.ProfileText>
      </S.ProfileInfo>
    </S.ProfileCard>    
  )
}

export default Profile
