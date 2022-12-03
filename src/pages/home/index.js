import React from 'react'
import { Profile, Feedback } from 'components'
import * as S from './style'

const HomeTemplate = () => {
  return (
    <S.HomeElement>
      <S.HomeWrapper>
        <S.HomeSections>
          <Profile />
        </S.HomeSections>
        <S.HomeSections>
          <Feedback />
        </S.HomeSections>
      </S.HomeWrapper>
    </S.HomeElement>
  )
}

export default HomeTemplate
