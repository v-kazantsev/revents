import { SubmissionError } from 'redux-form';
import { closeModal } from './modalActions';

export const login = (credentials) => {
  return async (dispatch, _getState, {getFirebase}) => {
    const firebase = getFirebase();
    try {
      await firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
      dispatch(closeModal());
    } catch (error) {
      console.log(error);
      throw new SubmissionError({
        _error: error.message
      })
    }
  }
};

export const registerUser = (user) => (
  async (dispatch, _getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    try {
      let newUser = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
      try {
      await newUser.updateProfile({
        displayName: user.displayName
      });
      } catch (error) {
        console.log(error)
      };
      let newUserProfile = {
        displayName: user.displayName,
        createdAt: firestore.FieldValue.serverTimestamp()
      };
      await firestore.set(`users/${newUser.uid}`, {...newUserProfile});
      dispatch(closeModal());
    } catch (error) {
      console.log(error);
      throw new SubmissionError({
        _error: error.message
      })
    }
  }
)
