import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type AuthState = {
  isLoggedIn: boolean
  username: string
  password: string
}

const initialState: AuthState = {
  isLoggedIn: false,
  username: "",
  password: ""
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.username = ""
      state.password = ""
    },
    setusername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setpassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  }
})

export const { login, logout, setusername, setpassword } = authSlice.actions
export default authSlice.reducer
