import Header from "./Component/Header"
import Home from "./Component/apiTest"
import Sidebar from "./Component/Sidebar"
function App() {

  return (
    <div>
      <Header />
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <Home />
        </div>
      </div>
    </div>
  )
}

export default App
