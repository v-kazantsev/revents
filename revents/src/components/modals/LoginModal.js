import React from 'react';
import { Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modalActions';
import LoginForm from '../auth/Login/LoginForm';

const mapDispatchToProps = {
  closeModal
}

const LoginModal = ({closeModal}) => (
  <Modal open={true} onClose={closeModal} size='mini'>
    <Modal.Header>Please log in</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <LoginForm />
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default connect(null, mapDispatchToProps)(LoginModal);
