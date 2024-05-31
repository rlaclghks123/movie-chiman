import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const HEADER_DATA = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Movies', link: '/movies' },
];

function Header() {
  return (
    <header>
      <Ul>
        {HEADER_DATA.map((list) => (
          <Li key={list.id}>
            <Link to={list.link}>{list.title}</Link>
          </Li>
        ))}
      </Ul>
    </header>
  );
}

function CommonLayout() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
}

export default CommonLayout;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  height: 50px;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: 5px;

  &:hover {
    border-bottom: 1px solid #86868b;
  }
`;
