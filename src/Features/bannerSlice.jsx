import { createSlice } from "@reduxjs/toolkit";
const bannerSlice = createSlice({
  name:"banner",
  initialState:{
    banFlow:{},
    flow:false,

  },
  reducers:{
    bannerReducer(state,action){
      state.banFlow = action.payload    
      if(state.banFlow === false){
        state.flow = true
      }else{
        state.flow = false
      }
    }
  }
})
export const {bannerReducer} = bannerSlice.actions
export default bannerSlice.reducer