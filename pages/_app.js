import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'

import store from '../redux/store'

import './index.scss'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

const makeStore = () => store

export default createWrapper(makeStore).withRedux(MyApp)
