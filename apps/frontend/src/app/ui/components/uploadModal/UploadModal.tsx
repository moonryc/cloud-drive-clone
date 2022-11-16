import React from 'react';
import {Modal} from "@mantine/core";

type UploadModalProps = {
  isOpen: boolean;
  toggleOpen: (state?:boolean)=>void
}
const UploadModal:React.FC<UploadModalProps> = ({isOpen,toggleOpen}) => {

  return (
    <Modal onClose={toggleOpen} opened={isOpen}>
      test
    </Modal>
  );
};

export default UploadModal;
