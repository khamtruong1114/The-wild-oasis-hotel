import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";
import styled from "styled-components";

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4px 4.8px 6.4px;
`;

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
