import React, { useEffect } from 'react';
import {AppShell, Header,} from "@mantine/core";
import PageLayout from "../../layouts/PageLayout";
import NavigationNavBar from "../../layouts/NavigationNavBar/NavigationNarBar";
import {routes} from "../../../routes";
import {Route, Routes} from "react-router-dom";
import MyFilesPage from "../sub-pages/MyFilesPage";
import SharedWithOthersPage from "../sub-pages/SharedWithOthersPage";
import SharedWithMePage from "../sub-pages/SharedWithMePage";

const HomePage = () => {

  useEffect(() => {
    let apifetch = async () => {
    let response = await fetch(`http://localhost:3333/api`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    const data: any = await response.json()
    console.log(data)
    }
    apifetch()
  }, [])



  return (
    <PageLayout>
    <AppShell
      padding="md"
      navbar={<NavigationNavBar/>}
      header={<Header height={60} p="xs">Cloud Drive Clone</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
    <Routes>
        <Route path={"/"} index element={<MyFilesPage/>}/>
        <Route path={"/sharedWithOthers"} element={<SharedWithOthersPage/>}/>
        <Route path={"/sharedWithMe"} element={<SharedWithMePage/>}/>
    </Routes>
    </AppShell>
    </PageLayout>
  );
};

export default HomePage;
