import React from 'react';
import { Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modalActions';
import SignupForm from '../auth/Signup/SignupForm';

const mapDispatchToProps = {
  closeModal
}

const SignupModal = ({closeModal}) => (
  <Modal open={true} onClose={closeModal} size='mini'>
    <Modal.Header>Please sign up</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <SignupForm />
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default connect(null, mapDispatchToProps)(SignupModal);
