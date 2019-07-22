import styled from 'styled-components';

export const Display = styled.div`
  grid-column: span 4;
  background-color: #0008;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  font-size: 2.1em;
  overflow: hidden;
`;

export const Button = styled.button`
  background: ${props => props.operation ? '#fa8231' : '#f0f0f0'};
  border: none;
  border-bottom: solid 1px #888;
  border-right: ${props => props.operation ? 'none' : 'solid 1px #888'};
  color: ${props => props.operation ? '#fff' : ''};
  grid-column: span ${props => props.column ? props.column : 1};
  font-size: 1.4em;
  outline: none;

  :active {
    background-color: ${props => props.operation ? '#fa8231cc' : '#ccc'};
  }
`;