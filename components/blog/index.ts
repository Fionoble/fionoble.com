import styled, {css} from 'styled-components'

export const PostPreviewCard = styled.div`
  margin: 20px;
  padding: 8px;
  width: 300px;
  height: 300px;
  background-color: #fffdba;
  position: relative;
  flex-grow: 0;
  border: 2px black solid;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.2);
  overflow: hidden;
  text-overflow: elipsis;
  transition: transform 0.3s;

  ${props => {
    return (css`
      transform: rotate(${props.rotation}deg); 

      &:hover {
        transform: rotate(${props.rotation}deg) translateY(5px); 
      }
    `)}
}

`

export const Title = styled.div`
  font-size: 18px;
  font-weight: 900;
`
export const TimeStamp = styled.div`
  font-size: 11px;
  font-weight: 900;
`

export const ImageWrapper = styled.div`
  line-height: 0;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.2);
`

export const PostPreviewContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

export * from './Filter'