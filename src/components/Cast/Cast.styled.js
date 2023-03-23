import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
`;

export const Item = styled.li`
  border-radius: 15px;

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 60, 172, 0.5) 15%,
      rgba(120, 75, 160, 0.5) 35%,
      rgba(43, 134, 197, 0.5) 45%,
      rgba(255, 255, 255, 0.2) 90%
    );
  }
`;

export const Image = styled.img`
  width: 340px;
  height: 360px;
  object-fit: cover;
  border-radius: 15px;
`;

export const Name = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: #000;
  margin: 10px 0;
  width: 25%;
`;

export const Character = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  margin: 10px 0;
  max-width: 50%;
`;
