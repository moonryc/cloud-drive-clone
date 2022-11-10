import React, {useEffect, useState} from 'react';
import {useMantineTheme} from "@mantine/core";

type PageLayoutProps ={
  loading?: boolean;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({loading= false, children}) => {

  const theme = useMantineTheme();
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    window.addEventListener("resize", () => setHeight(window.innerHeight));
    return () => {
      window.removeEventListener("resize", () => setHeight(window.innerHeight));
    };
  });

  return (
    <div style={{width:"100%", minHeight:height, display:"flex", flexDirection:"column", background:theme.colors.dark[9]}}>
      <div style={{flexGrow:1}}>
      {children}
      </div>
    </div>
  );
};

export default PageLayout;
