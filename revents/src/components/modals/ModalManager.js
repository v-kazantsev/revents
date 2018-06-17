import React from 'react';
import { connect } from 'react-redux';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const modalLookup = {
  LoginModal,
  SignupModal
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
