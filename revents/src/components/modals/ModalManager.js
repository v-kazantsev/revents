import React from 'react';
import { connect } from 'react-redux';
import TestModal from './TestModal';

const modalLookup = {
  TestModal
}

const mapStateToProps = state => ({
  currentModal: state.modal
})

const ModalManager = ({currentModal}) => {
  let renderedModal;
  if (currentModal) {
    const {modalType, modalProps} = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderedModal = <ModalComponent {...modalProps} />
  }
  return <span>{renderedModal}</span>
};

export default connect(mapStateToProps)(ModalManager);
