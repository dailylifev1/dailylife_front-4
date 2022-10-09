import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import userApi from '../apis/userApi';
import { SET_TOKEN } from '../reducers/authToken';
import { myInfoActions } from '../reducers/myInfo';

import { useAppDispatch } from 'store/hooks';

interface InitialValues {
  userId: string;
  userPassword: string;
}

const useLoginForm = (initialValues: InitialValues) => {
  const [formData, setFormData] = useState(initialValues);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    userApi
      .postUserInfoForLogIn({
        userId: formData.userId,
        userPassword: formData.userPassword,
      })
      .then((result) => {
        setLoading(false);
        if (result.ok) {
          const response = result.data;
          localStorage.setItem('accessToken', response.data.data.accessToken);
          // dispatch(SET_TOKEN(response.data.data.accessToken));
          dispatch(myInfoActions.updateUserNum(response.data.data.userNum));
          navigate('/');
        } else {
          console.log(result.message);
        }
      })
      .catch((error) => console.log(error));
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
  };
};

export default useLoginForm;
