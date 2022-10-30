import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Modal } from "native-base";
const UIModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Body>{children}</Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default UIModal;

const styles = StyleSheet.create({});
