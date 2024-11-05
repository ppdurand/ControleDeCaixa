import { ConfigProvider } from "antd";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ConfigProvider
      theme={
        {
          token: {
            colorPrimary: "#3A457C"
          }
        }
      }>
        <Outlet />
      </ConfigProvider>
    </div>
  );
}

export default App;
