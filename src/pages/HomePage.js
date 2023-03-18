import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HomePage = () => {
  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])
  const StyledLink = styled(NavLink)`
    color: #212121;

    &.active {
      color: orangered;
    }
  `;

  return (
    <div>
      <div>
        <StyledLink>HomePage!</StyledLink>
      </div>
    </div>
  );
};

export default HomePage;
