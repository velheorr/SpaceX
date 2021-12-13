import { configureStore } from '@reduxjs/toolkit';
import launches from './LaunchSlice'

const srtingMiddleWare = (store) => (next)=> (action)=>{
  if (typeof action === 'string'){
    return next({
      type: action
    })
  }
  return next(action)
}

const store = configureStore({
  reducer: {launches},
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(srtingMiddleWare),
  devTools: process.env.NODE_ENV !== 'production',

})

export default store;