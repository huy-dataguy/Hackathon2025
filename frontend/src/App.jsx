
import { Outlet } from 'react-router-dom'
import './App.css'


function App() {

  return (
    <>
      <nav> Navbar </nav>
      <main className='min-h-screen max-w-screen-2xl mx-20 px-4 py-6 font-primary'>
        <Outlet /> {/* This is where the child components will be rendered */}
      </main>
      <footer> Footer</footer>
    </>
  )
}

export default App