import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapp = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 15px;
  border: 1px solid #2b86c5;
  border-radius: 5px;
  background-color: #ff3cac;
  background-image: linear-gradient(
    225deg,
    #2b86c5 0%,
    #784ba0 50%,
    #ff3cac 100%
  );
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin: 15px 20px 15px 0;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: 1px;
  opacity: 0.8;
  min-width: 120px;
  max-width: 150px;
  &:hover,
  &:focus {
    opacity: 1;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 5px;
    margin: 10px 10px 10px 0;
    min-width: 100px;
  }
`;
