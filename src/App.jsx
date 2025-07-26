import Header from "./Header"
import Home from "./apiTest"
import Sidebar from "./Sidebar"
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
