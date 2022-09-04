import styled from 'styled-components';

export const FloatMenu = styled.div`
  float: left;
  z-index: 9999;
  margin-top: 1rem;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  background-color: var(--gray-0);
  border: 2px solid rgba(110, 148, 35, 0.72);
  border-radius: 8px;

  max-height: 220px;
  
`;
