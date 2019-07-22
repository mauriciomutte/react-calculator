import styled from 'styled-components';

export const Calculator = styled.div`
  display: grid;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 120px repeat(5, 1fr);
  height: 400px;
  overflow: hidden;
  width: 285px;
`;