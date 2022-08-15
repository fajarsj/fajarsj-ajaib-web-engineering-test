import { userActions } from "./user-reducer";

export const getUserData = (params) => {
  return async (dispatch) => {
    dispatch(userActions.getUserRequest());

    const fetchData = async () => {
      const response = await fetch(
        `https://randomuser.me/api/?inc=login,name,email,gender,registered${
          params && `&${params}`
        }`
      );

      if (!response.ok) {
        dispatch(userActions.getUserFailed());
        throw new Error("Could not fetch user data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const userData = await fetchData();
      dispatch(
        userActions.getUser({
          data: userData.results || [],
        })
      );
    } catch (error) {
      dispatch(userActions.getUserFailed());
      throw new Error("Could not fetch user data!");
    }
  };
};
