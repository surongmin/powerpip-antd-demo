import './App.css';
import Home from './components/Home'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

function App() {

  return (
    <div className="App">
      <ConfigProvider locale={zhCN}>
        <Home />
      </ConfigProvider>
    </div>
  );
}

export default App;
