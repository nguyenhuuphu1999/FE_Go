import { createSlice } from '@reduxjs/toolkit'
import homeStayApi from '../api/homeStayApi'

const homeStaySlice = createSlice({
  name: 'homeStay',
  initialState: {
    typeApartment: [],
  },
  reducers: {
    fetchHomeStaySuccess(state, action) {
      state = action.payload
      return state
    },
  },
})

const { fetchHomeStaySuccess } = homeStaySlice.actions

// async action
export const fetchHomeStay = () => async dispatch => {
  const res = await homeStayApi.getAll()
  return dispatch(fetchHomeStaySuccess(res))
}

export default homeStaySlice.reducer
