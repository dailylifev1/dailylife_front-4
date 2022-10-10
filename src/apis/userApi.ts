
import { methodFormat, getAccessToken } from '../common/utils';

import client from './client';

const PATH = 'api/users';
const userApi = {
  getUserInfo: methodFormat(async (userNum: string) => {
    const accessToken = getAccessToken();

    const response =
      process.env.REACT_APP_HOST !== undefined
        ? await client.post(`/api/users/details/${userNum}`, null, {
            headers: {
              'X-ACCESS-TOKEN': accessToken,
            },
          })
        : '';
    return response;
  }),
  postUserInfoForSignUp: methodFormat(async ({ userInfo }) => {
    const options = {
      params: {
        userId: userInfo.userId,
        userPassword: userInfo.password,
        userEmail: userInfo.email,
        userName: userInfo.username,
        userPhoneNumber: userInfo.phoneNumber,
      },
    };
    const response = await client.post(`/${PATH}/join`, options);
    return response;
  }),
  postUserInfoForLogIn: methodFormat(async ({ userId, userPassword }) => {
    const payload = {
      userId,
      userPassword,
    };
    const response = await client.post(`/${PATH}/login`, payload);
    return response;
  }),
  verifyUser: methodFormat(async () => {
    const response = await client.post(`${PATH}/getUserNum`, {}, {
      headers: {
        'X-ACCESS-TOKEN': getAccessToken()
      }
    });
    return response;
  })
};

export default userApi;
