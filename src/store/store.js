import { configureStore } from '@reduxjs/toolkit';


const srtingMiddleWare = (store) => (next)=> (action)=>{
  if (typeof action === 'string'){
    return next({
      type: action
    })
  }
  return next(action)
}

const store = configureStore({
  reducer: {},
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(srtingMiddleWare),
  devTools: process.env.NODE_ENV !== 'production',

})

export default store;