import React from 'react';
import styled from 'styled-components';
import Ranking from './Ranking';
import { useModal } from '../context/WordsProvider';

const ModalArea = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export default function Feedback() {
  const { showModal, setShowModal } = useModal();

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    showModal && (
    <ModalArea onClick={closeModal}>
      <Ranking />
    </ModalArea>
    )
  );
}
