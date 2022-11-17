import { ActionIcon, Badge, Button, Card, Group } from '@mantine/core';
import React from 'react';
import { IconArrowBarToDown, IconShare, IconTrash } from '@tabler/icons';
import { useDispatch } from 'react-redux';
import { toggleDeleteFileModalOpen } from '../../../redux/features/deleteFile/deleteFileSlice';
import { featureNotYetImplemented } from '../../../utils/featureNotYetImplemented';

type FileCardProps = {
  fileName: string;
};

const WIDTH = 180;

const FileCard: React.FC<FileCardProps> = ({ fileName }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ width: WIDTH, margin: '2rem' }}>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <img
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <p>{fileName}</p>
        </Group>

        <Group position={'center'} grow>
          <ActionIcon onClick={featureNotYetImplemented}>
            <IconArrowBarToDown />
          </ActionIcon>
          <ActionIcon onClick={featureNotYetImplemented}>
            <IconShare />
          </ActionIcon>
          <ActionIcon onClick={() => dispatch(toggleDeleteFileModalOpen())}>
            <IconTrash />
          </ActionIcon>
        </Group>
      </Card>
    </div>
  );
};

export default FileCard;
