import styled from 'styled-components';

// export const StyledVideo = styled.video`
//   display: flex;
//   top: 0;
//   left: 0;
//   z-index: 0;
//   width: 100%;
// `;

export const StyledVideo = styled.div`
  position: relative;
  padding-bottom: 55%;
  padding-top: 25px;
  height: 0;
  width: 100%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-top: -60px;
  }
`;
