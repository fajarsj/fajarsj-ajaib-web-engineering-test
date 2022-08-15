import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
  },
  reducers: {
    getUser(state, action) {
      const sortUserByRegisteredDate = action.payload.data.sort((a, b) => {
        if (a.registered.date < b.registered.date) {
          return 1;
        }

        if (a.registered.date > b.registered.date) {
          return -1;
        }

        return 0;
      });

      state.data = sortUserByRegisteredDate.map((user) => {
        return {
          username: user.login.username,
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          gender: user.gender,
          registered_date: user.registered.date,
        };
      });
      state.isLoading = false;
    },
    getUserRequest(state) {
      state.isLoading = true;
    },
    getUserFailed(state) {
      state.isLoading = true;
      state.isError = true;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
