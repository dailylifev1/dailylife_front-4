import { ChangeEvent, FormEvent, useState } from 'react';

import userApi from '../apis/userApi';

import { validate } from 'common/utils';

interface InitialValue<T> {
  userId: T;
  phoneNumber?: T;
  name?: T;
  password: T;
  email: T;
}

const useForm = (initialValues: InitialValue<string>) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    formType: string,
  ) => {
    const { name, value } = event.target;

    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevState) => ({
      ...prevState,
      ...validate(values[formType], formType),
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    const isValidate = Object.keys(errors).length === 0;
    console.log(errors);
    if (isValidate) {
      userApi
        .postUserInfoForSignUp({
          userId: values.userId,
          userPassword: values.password,
          userEmail: values.email,
          userName: values.name,
          userPhoneNumber: values.phoneNumber,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      alert('회원가입 형식이 올바르지 않습니다. 다시 확인해주세요.');
    }
    event.preventDefault();
  };

  return {
    values,
    handleChange,
    handleSubmit,
    errors,
  };
};

export default useForm;
