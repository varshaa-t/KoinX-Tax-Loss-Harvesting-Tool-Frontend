import './App.css'
import DisclaimerSection from './components/DisclaimerSection'
import Navbar from './components/Navbar'
import Title from './components/Title'

function App() {

  return (
    <div className='bg-primary-gray font-inter h-screen'>
      <Navbar/>
      <Title/>
      <DisclaimerSection/>
    </div>
  )
}

export default App
