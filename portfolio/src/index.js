import { ConfigProvider } from 'antd';
import 'antd/dist/antd';
import ptBR from 'antd/lib/locale/pt_BR';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider locale={ ptBR }>
      <App />  
    </ConfigProvider> 
  </React.StrictMode>
);


reportWebVitals();
