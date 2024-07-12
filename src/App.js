import React from 'react';
import map from './assets/Map.png';
import add from './assets/Add.svg';
import Menu from './assets/Menu.svg';
import Chevron from './assets/Chevron.svg';
import close from './assets/Close.svg';
import Back from './assets/Back.svg';
import { motion } from 'framer-motion';
import map1 from './assets/1.png';
import map2 from './assets/2.png';
import map3 from './assets/3.png';
import del from './assets/del.svg';


const trip = ["Kochi - Los Angels", "Dubai trip", "Kochi - Los Angels"]


const Header = ({ closed, setClosed, category, setCategory }) => {

  const handleClick = (category) => {
    if (closed) {
      setCategory('')
    } else {
      setCategory(category)
    }
    setClosed(!closed)
  }

  return (
    <div className={`${closed ? 'p-5 flex flex-row w-full items-center gap-2' : 'p-5 flex flex-row w-full justify-between'}`}>
      {category !== 'Map style' ? (
        <>
          <motion.img
            src={closed ? close : Menu}
            alt="logo"
            className="w-14 h-14"
            onClick={() => handleClick('Route Setting')}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: closed ? 90 : 0 }}
            transition={{ stiffness: 800, damping: 17 }}
          />
          {(closed) ? (<p className='text-base font-bold text-white'>{category}</p>
          ) : (
            <>
              <div className='text-white text-center flex flex-col gap-1 justify-center'>
                <p className='text-base font-bold' onClick={() => setCategory('Show location')}>Kochi - Los Angels</p>
                <p className='text-xs'>2 Points</p>
              </div>
              <img src={add} alt='logo' className='w-14 h-14' onClick={() => handleClick('Map style')} />
            </>

          )}
        </>
      ) : (
        <>
          <p className='text-white text-lg mx-auto'>Map style</p>
        </>
      )}
    </div>
  )
}

const Button = ({ closed, category, setCategory, setClosed }) => {

  const handleClick = (category) => {
    if (closed) {
      setCategory('')
    } else {
      setCategory(category)
    }
    setClosed(!closed)
  }

  return (
    <div className={`relative mx-5 overflow-hidden`}>
      <motion.div
        className='absolute  w-full bg-[#B97FFF] rounded-full p-5 flex flex-row items-center justify-center'
        initial={{ x: '100%', opacity: 100 }}
        animate={{ x: (closed && category === 'Save route') ? '0%' : '100%' }}
        transition={{ duration: 0.5 }}>
        <p className='text-white font-bold text-lg'>Save</p>
      </motion.div>
      <motion.div className='absolute w-full bg-[#EB4E4E] rounded-full p-5 flex flex-row items-center justify-center'
        initial={{ x: '100%', opacity: 100 }}
        animate={{ x: (closed && category === 'Delete route') ? '0%' : '100%' }}
        transition={{ duration: 0.5 }}>
        <p className='text-[#22242B] font-bold text-lg'>Delete</p>
      </motion.div>
      <motion.div className='absolute w-full bg-[#B97FFF] rounded-full p-5 flex flex-row items-center justify-center'
        initial={{ x: '100%', opacity: 100 }}
        animate={{ x: (closed && category === 'Load route') ? '0%' : '100%' }}
        transition={{ duration: 0.5 }}>
        <p className='text-white font-bold text-lg'>Load</p>
      </motion.div>
      <motion.div className='absolute w-full flex flex-row items-center justify-between gap-3'
        initial={{ x: '100%', opacity: 100 }}
        animate={{ x: (closed && category === 'Route Setting') ? '0%' : (((category === 'Delete route' || category === 'Save route' || category === 'Load route') && closed) ? '-100%' : '100%') }}
        transition={{ duration: 0.5 }}>
        <div className='flex flex-1 p-5 bg-[#EB4E4E] text-[#22242B] font-bold text-base rounded-full justify-center' onClick={() => setCategory('Delete route')}>Delete</div>
        <div className='flex flex-1 p-5 bg-[#2B2C2F] bg-opacity-80 text-white font-bold text-base rounded-full justify-center' onClick={() => setCategory('Save route')}>Save</div>
        <div className='flex flex-1 p-5 bg-[#2B2C2F] bg-opacity-80 text-white font-bold text-base rounded-full justify-center' onClick={() => setCategory('Load route')}>Load</div>
      </motion.div>
      <motion.div className='absolute w-full flex flex-row items-center justify-between gap-3'
        initial={{ x: '100%', opacity: 100 }}
        animate={{ x: (closed && category === 'Map style') ? '0%' : '100%' }}
        transition={{ duration: 0.5 }}>
        <img src={close} alt='logo' className='w-14 h-14' onClick={() => handleClick('')} />
        <div className='flex flex-1 p-5 bg-[#B97FFF] bg-opacity-80 text-white font-bold text-base rounded-full justify-center' onClick={() => handleClick('')}>Apply</div>

      </motion.div>
      <motion.div
        className='relative bg-white rounded-full p-5 flex flex-row items-center justify-between'
        initial={{ x: '0%', opacity: 100 }}
        animate={{ x: closed ? '-100%' : '0%' }}
        transition={{ duration: 0.5 }}>
        <p className='text-[#1B1E24] font-bold text-lg'>Create video</p>
        <img src={Chevron} alt='logo' className='w-5 h-5' />
      </motion.div>
    </div>
  )
}

const Body = ({ category }) => {
  const [trip, setTrip] = React.useState(["Kochi - Los Angels", "Dubai trip", "Kochi - Los Angels"])
  const [flag, setFlag] = React.useState(-1)

  const handleClick = (index) => {
    setFlag(-1)
    setTrip(trip.filter((_, i) => i !== index))
  }
  return (
    <>
      {(category === 'Save route') &&
        <div className='p-5 pt-0'>
          <input type='text' className='bg-[#1B1E24] text-white p-5 rounded-full w-full' placeholder='Enter route name' />
        </div>
      }
      {category === 'Load route' &&
        trip.map((item, index) => (
          <div key={index} className='bg-[#2B2C2F] rounded-full mx-5 p-5 flex flex-row items-center justify-between mb-5'>
            <p className='text-white font-bold text-base'>{item}</p>
            <input type="checkbox" className=' h-5 w-5 text-[#000000] rounded-full border-2' />
          </div>
        ))
      }
      {category === 'Map style' && (
        <div className='p-5 flex flex-row gap-3'>
          <img src={map1} alt='logo' className='w-full' />
          <img src={map2} alt='logo' className='w-full' />
          <img src={map3} alt='logo' className='w-full' />

        </div>
      )}
      {category === 'Show location' && (
        <div className='flex flex-col gap-2 h-[60vh] mx-5'>
          {trip.map((item, index) => (
            <div className={`flex flex-row items-center gap-4 `}
              onClick={() => flag !== index ? setFlag(index) : setFlag(-1)}
              key={index}
            >
              <div
                className={`relative w-full bg-[#2B2C2F] rounded-full p-5 flex flex-row items-center justify-between overflow-hidden `}>
                <p className={`text-white font-bold text-lg ${(flag === index) && 'transform -translate-x-12 duration-500 ease-in-out'}`}>{item}</p>
                <div className={`absolute text-white font-bold text-lg bg-red-700 h-full p-5 transform duration-500 ease-in-out !z-50 ${(flag === index) ? 'transform right-0 ' : '-right-[100%]'}`}
                  onClick={() => handleClick(index)}
                >Delete</div>
              </div>
              <img src={del} alt='logo' className='h-15 mx-auto'
              />
            </div>

          ))}
        </div>
      )}
    </>
  )
}

function App() {


  const [closed, setClosed] = React.useState(false);
  const [category, setCategory] = React.useState('Route Setting')
  const maxHeight = category === 'Save route' || category === 'Load route' || category === 'Show location' ? '90vh' : '50vh';


  return (
    <div className="bg-cover bg-center h-screen " style={{ backgroundImage: `url(${map})` }}>
      <div className="relative h-full">
        <motion.div
          key={category}
          className="absolute bottom-0 w-screen pb-8"
          style={{
            background: 'linear-gradient(to right, #131418 0%, #000000 96%)',
          }}
          initial={{ maxHeight: '30vh' }}
          animate={{ maxHeight }}
          exit={{ maxHeight: '30vh' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <div className='w-14 pb-2 bg-[#35383F] mx-auto rounded-b-full' />
          <Header closed={closed} setClosed={setClosed} category={category} setCategory={setCategory} />
          <Body category={category} />

          <Button closed={closed} category={category} setCategory={setCategory} setClosed={setClosed} />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
