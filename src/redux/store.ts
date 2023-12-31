import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'
import sickReducer from './sickSlice'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    sicks: sickReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
