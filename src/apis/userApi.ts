import { getAccessToken, methodFormat } from '../common/utils';
import client from './client';

const PATH = 'api/users';
const userApi = {
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
