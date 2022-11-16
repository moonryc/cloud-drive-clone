import React, { useCallback } from 'react';
import { Button, Group, Modal } from '@mantine/core';
import { useBoolean } from 'react-use';
import {
  toggleDeleteFileModalOpen,
  useIsDeleteFileIsOpenSelector,
} from '../../../redux/features/deleteFile/deleteFileSlice';
import { useDispatch } from 'react-redux';
import { featureNotYetImplemented } from '../../../utils/featureNotYetImplemented';

const DeleteFileModal = () => {
  const isOpen = useIsDeleteFileIsOpenSelector();
  const dispatch = useDispatch();

  const toggleModal = useCallback(() => {
    dispatch(toggleDeleteFileModalOpen());
  }, [dispatch]);

  const handleDelete = useCallback(() => {
    featureNotYetImplemented();
    toggleModal();
  }, [toggleModal]);

  return (
    <Modal
      title={'Delete File'}
      centered
      withCloseButton={false}
      opened={isOpen}
      onClose={toggleModal}
    >
      Are you sure you want to delete INSERT FILE NAME HERE?
      <Group position="right">
        <Button variant="outline" onClick={toggleModal}>
          Cancel
        </Button>
        <Button color={'red'} onClick={handleDelete}>
          Yes
        </Button>
      </Group>
    </Modal>
  );
};

export default DeleteFileModal;
