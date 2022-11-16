import React, {useMemo} from 'react';
import {Button, Navbar, NavLink} from "@mantine/core";
import {useUsernameSelector} from "../../../redux/features/user/userSlice";
import {useBoolean} from "react-use";
import UploadModal from "../../components/uploadModal/UploadModal";
import {useLocation, useNavigate} from "react-router-dom";
import {routes} from "../../../routes";

type NavAction = {
  displayName: string,
  disabled: boolean;
  onClick: ()=>void;
}

const NavigationNavBar = () => {

  const username = useUsernameSelector()
  const [isModalOpen, toggleModalOpen] = useBoolean(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const navActions:NavAction[] = useMemo(() => (
    [
      {
        displayName: "My Files",
        disabled: pathname === routes.dashBoard.path,
        onClick:()=>navigate(routes.dashBoard.path)
      },
      {
        displayName: "Shared With Others",
        disabled: pathname === routes.dashBoard.sharedWithOthers.path,
        onClick:()=>navigate(routes.dashBoard.sharedWithOthers.path)
      },
      {
        displayName: "Shared With Me",
        disabled: pathname === routes.dashBoard.sharedWithMe.path,
        onClick:()=>navigate(routes.dashBoard.sharedWithMe.path)
      },
    ]
  ), [navigate, pathname]);

  return (
    <>
      <UploadModal isOpen={isModalOpen} toggleOpen={toggleModalOpen}/>
    <Navbar width={{ base: 300 }}  p="xs">
      <Navbar.Section mt={"md"}>
        <Button fullWidth color={"orange"} onClick={toggleModalOpen}>UPLOAD</Button>
      </Navbar.Section>
      {navActions.map((action,index)=>(
        <Navbar.Section grow={index === navActions.length-1} mt={"md"} key={action.displayName}>
          <NavLink variant={"filled"} active={action.disabled} label={action.displayName} onClick={action.onClick}/>
        </Navbar.Section>
      ))}
      <Navbar.Section>Welcome {username}</Navbar.Section>
    </Navbar>
    </>
  );
};

export default NavigationNavBar;
