import React from 'react';
import ReactDOM from 'react-dom';
import {ConfigProvider} from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import './css/index.css';
import {createStore} from "redux";
import {reducer} from "./reducer";
import {Provider} from "react-redux";
import App from './App';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
      <ConfigProvider locale={zhCN} prefixCls={"photoWall"}>
          <Provider store={store}>
              <App />
          </Provider>
      </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

