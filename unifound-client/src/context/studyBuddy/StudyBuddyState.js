import React, { useReducer } from 'react';
import axios from 'axios';
import StudyBuddyContext from './studyBuddyContext';
import studyBuddyReducer from './studyBuddyReducer';

import { GET_STUDY_LISTINGS, CREATE_ERROR, CREATE_FAIL, CREATE_SUCCESS } from '../types';

const StudyBuddyState = (props) => {
  const initialState = {
    studyBuddyListings: []
  };

  const [state, dispatch] = useReducer(studyBuddyReducer, initialState);

  // Get All Study Listings
  const getStudyListings = async () => {
    try {
      const res = await axios.get('/studybuddy');

      dispatch({
        type: GET_STUDY_LISTINGS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: CREATE_ERROR,
        payload: err.response.data.error
      });
    }
  };

  // Create Study Listing
  const createStudyListing = async (studyBuddyListing, user) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post(`/studybuddy/${user.id}`, studyBuddyListing, config);

      dispatch({
        type: CREATE_SUCCESS,
        payload: res.data
      });
      console.log(res.data);
    } catch (err) {
      dispatch({
        type: CREATE_FAIL,
        payload: err.response.data.error
      });
    }
  };

  return (
    <StudyBuddyContext.Provider
      value={{
        studyBuddyListings: state.studyBuddyListings,
        createStudyListing,
        getStudyListings
      }}
    >
      {props.children}
    </StudyBuddyContext.Provider>
  );
};

export default StudyBuddyState;
