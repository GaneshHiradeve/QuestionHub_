import { server } from '../reducer/userReducer.js';

import axios from 'axios';

export const userLogin = (email, password) => async dispatch => {
  try {
    dispatch({ type: 'userloginRequest' });

    const { data } = await axios.post(
      `${server}/login`,
      {
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({ type: 'userloginSuccess', payload: data });
  } catch (err) {
    dispatch({ type: 'userloginFail', payload: err.response.data.message });
  }
};

export const userRegister =
  (name, email, password, confirmpassword) => async dispatch => {
    try {
      dispatch({ type: 'userRegisterRequest' });

      const { data } = await axios.post(
        `${server}/register`,
        {
          name,
          email,
          password,
          confirmpassword,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      dispatch({ type: 'userRegisterSuccess', payload: data });
    } catch (err) {
      dispatch({
        type: 'userRegisterFail',
        payload: err.response.data.message,
      });
    }
  };

export const getuserProfile = () => async dispatch => {
  try {
    dispatch({ type: 'getuserprofile' });

    const { data } = await axios.get(`${server}/profile`, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    dispatch({ type: 'getuserprofileSuccess', payload: data.user });
  } catch (err) {
    dispatch({
      type: 'getuserprofileFail',
      payload: err.response.data.message,
    });
  }
};

export const userLogout = () => async dispatch => {
  try {
    dispatch({ type: 'logoutuser' });

    const { data } = await axios.get(`${server}/logout`, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    dispatch({ type: 'logoutuserSuccess', payload: data });
  } catch (err) {
    dispatch({ type: 'logoutuserFail', payload: err.response.data.message });
  }
};

