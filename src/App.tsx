import './App.css'
import DisclaimerSection from './components/DisclaimerSection'
import HarvestingCard from './components/HarvestingCard'
import Navbar from './components/Navbar'
import Title from './components/Title'

function App() {

  return (
    <div className='bg-primary-gray font-inter h-screen'>
      <Navbar/>
      <Title/>
      <DisclaimerSection/>
      <div className='flex space-x-6 justify-between mt-6 mx-10 sm:mx-12 md:mx-20'>
        <HarvestingCard 
          title='Pre Harvesting'
          variant='primary'
        />
        <HarvestingCard 
          title='After Harvesting'
          variant='secondary'
        />
      </div>
    </div>
  )
}

export default App
