import React from 'react';
import {LoadingOverlay} from "@mantine/core";

const LoadingPage = () => {
  return (
    <div>
      <LoadingOverlay visible={true} radius={"lg"}/>
    </div>
  );
};

export default LoadingPage;
