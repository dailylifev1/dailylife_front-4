import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useNavigate } from 'react-router-dom';

import userApi from '../apis/userApi';
import { SET_TOKEN } from '../reducers/authToken';
import { myInfoActions } from '../reducers/myInfo';

const useLoginForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);
  const [loading, setLoading] = useState();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    // eslint-disable-next-line operator-linebreak
    const result = await userApi.postUserInfoForLogIn({
      userId: formData.userId,
      userPassword: formData.userPassword,
    });
    setLoading(false);
    if (result.ok === true) {
      const response = result.data;
      localStorage.setItem('accessToken', response.data.data.accessToken);
      dispatch(SET_TOKEN(response.data.data.accessToken));
      dispatch(myInfoActions.updateUserNum(response.data.data.userNum));
      navigate('/');
    } else if (result.ok === false) {
      console.log(result.message);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
  };
};

export default useLoginForm;
