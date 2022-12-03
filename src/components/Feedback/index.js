import React, { useState } from 'react'
import * as S from './style'

const Feedback = () => {
  const [typeFeedback, setTypeFeeback] = useState(true);

  return (
    <S.FeedbackCard>
      <S.FeedbackNav>
        <S.FeedbackNavButton active={typeFeedback ? true : false} onClick={() => setTypeFeeback(true)}>Positive</S.FeedbackNavButton>
        <S.FeedbackNavButton active={!typeFeedback ? true : false} onClick={() => setTypeFeeback(false)}>To Improve</S.FeedbackNavButton>
      </S.FeedbackNav>
      {typeFeedback && (
        <S.FeedbackContent>
          <S.FeedbackContentList>
            <S.FeedbackContentImg>
              <S.FeedbackAvatarIcon />
            </S.FeedbackContentImg>
            <S.FeedbackContentTexts>
              <S.FeedbackContentTitle>You are the best</S.FeedbackContentTitle>
              <S.FeedbackContentText>
                Proident non tempor ex ea enim. Qui proident non id non culpa ex fugiat id. Sunt in aute id voluptate ut minim. Aliquip officia consectetur duis ullamco sit laborum quis quis fugiat quis dolore. Irure et eu non dolor ex ut officia esse minim. Magna est veniam esse id ea nulla laborum ut commodo proident deserunt. Aliquip ut esse ea minim qui deserunt aute consequat irure cupidatat ad.
                <br />
                Voluptate commodo eiusmod nostrud sint est officia aliquip ea nostrud ad. Consectetur pariatur aute magna commodo minim pariatur amet. Ipsum officia irure amet ea elit sint labore labore enim aute eiusmod in aliqua occaecat.
              </S.FeedbackContentText>
              <S.FeedbackContentText>
                by: Henrique Melanda - 06/12/2022
              </S.FeedbackContentText>
            </S.FeedbackContentTexts>
          </S.FeedbackContentList>
          <S.FeedbackContentList>
            <S.FeedbackContentImg>
              <S.FeedbackAvatarIcon />
            </S.FeedbackContentImg>
            <S.FeedbackContentTexts>
              <S.FeedbackContentTitle>You are the best</S.FeedbackContentTitle>
              <S.FeedbackContentText>
                Proident non tempor ex ea enim. Qui proident non id non culpa ex fugiat id. Sunt in aute id voluptate ut minim. Aliquip officia consectetur duis ullamco sit laborum quis quis fugiat quis dolore. Irure et eu non dolor ex ut officia esse minim. Magna est veniam esse id ea nulla laborum ut commodo proident deserunt. Aliquip ut esse ea minim qui deserunt aute consequat irure cupidatat ad.
                <br />
                Voluptate commodo eiusmod nostrud sint est officia aliquip ea nostrud ad. Consectetur pariatur aute magna commodo minim pariatur amet. Ipsum officia irure amet ea elit sint labore labore enim aute eiusmod in aliqua occaecat.
              </S.FeedbackContentText>
              <S.FeedbackContentText>
                by: Henrique Melanda - 06/12/2022
              </S.FeedbackContentText>
            </S.FeedbackContentTexts>
          </S.FeedbackContentList>
        </S.FeedbackContent>
      )}
      {!typeFeedback && (
        <S.FeedbackContent>
          <S.FeedbackContentList>
            <S.FeedbackContentImg>
              <S.FeedbackAvatarIcon />
            </S.FeedbackContentImg>
            <S.FeedbackContentTexts>
              <S.FeedbackContentTitle>You aren't the best</S.FeedbackContentTitle>
              <S.FeedbackContentText>
                Proident non tempor ex ea enim. Qui proident non id non culpa ex fugiat id. Sunt in aute id voluptate ut minim. Aliquip officia consectetur duis ullamco sit laborum quis quis fugiat quis dolore. Irure et eu non dolor ex ut officia esse minim. Magna est veniam esse id ea nulla laborum ut commodo proident deserunt. Aliquip ut esse ea minim qui deserunt aute consequat irure cupidatat ad.
                <br />
                Voluptate commodo eiusmod nostrud sint est officia aliquip ea nostrud ad. Consectetur pariatur aute magna commodo minim pariatur amet. Ipsum officia irure amet ea elit sint labore labore enim aute eiusmod in aliqua occaecat.
              </S.FeedbackContentText>
              <S.FeedbackContentText>
                by: Henrique Melanda - 06/12/2022
              </S.FeedbackContentText>
            </S.FeedbackContentTexts>
          </S.FeedbackContentList>
          <S.FeedbackContentList>
            <S.FeedbackContentImg>
              <S.FeedbackAvatarIcon />
            </S.FeedbackContentImg>
            <S.FeedbackContentTexts>
              <S.FeedbackContentTitle>You aren't the best</S.FeedbackContentTitle>
              <S.FeedbackContentText>
                Proident non tempor ex ea enim. Qui proident non id non culpa ex fugiat id. Sunt in aute id voluptate ut minim. Aliquip officia consectetur duis ullamco sit laborum quis quis fugiat quis dolore. Irure et eu non dolor ex ut officia esse minim. Magna est veniam esse id ea nulla laborum ut commodo proident deserunt. Aliquip ut esse ea minim qui deserunt aute consequat irure cupidatat ad.
                <br />
                Voluptate commodo eiusmod nostrud sint est officia aliquip ea nostrud ad. Consectetur pariatur aute magna commodo minim pariatur amet. Ipsum officia irure amet ea elit sint labore labore enim aute eiusmod in aliqua occaecat.
              </S.FeedbackContentText>
              <S.FeedbackContentText>
                by: Henrique Melanda - 06/12/2022
              </S.FeedbackContentText>
            </S.FeedbackContentTexts>
          </S.FeedbackContentList>
        </S.FeedbackContent>
      )}
      
    </S.FeedbackCard>
  )
}

export default Feedback
