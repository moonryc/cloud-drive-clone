import React from 'react';
import {Group, Modal, useMantineTheme, Center} from "@mantine/core";
import {Dropzone} from "@mantine/dropzone";
import { IconUpload, IconPhoto, IconX } from '@tabler/icons';

type UploadModalProps = {
  isOpen: boolean;
  toggleOpen: (state?:boolean)=>void
}
const UploadModal:React.FC<UploadModalProps> = ({isOpen,toggleOpen}) => {
  const theme = useMantineTheme();
  return (
    <Modal centered withCloseButton={false} onClose={toggleOpen} opened={isOpen}>
      <Dropzone
        onDrop={(files) => console.log('accepted files', files)}
        onReject={(files) => console.log('rejected files', files)}
        maxSize={3 * 1024 ** 2}
      >
        <div style={{display:"flex", flexDirection:"column"}}>
        <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
          <Dropzone.Accept>
            <IconUpload
              size={50}
              stroke={1.5}
              color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              size={50}
              stroke={1.5}
              color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
            />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto size={50} stroke={1.5} />
          </Dropzone.Idle>


        <div>
          <Center>
            <p>
              Drag images here or click to select files
            </p>
          </Center>
          <Center>
            <p>
              Attach as many files as you like, each file should not exceed 5mb
            </p>
          </Center>
        </div>
        </Group>
        </div>
      </Dropzone>
    </Modal>
  );
};

export default UploadModal;
