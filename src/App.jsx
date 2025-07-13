import Header from "./Header"

import Sidebar from "./Sidebar"
function App() {

  return (
    <div>
      <Header />
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <h1>Dashboard</h1>
        </div>
      </div>
    </div>
  )
}

export default App
