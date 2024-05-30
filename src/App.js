import './App.css';
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import exit from './images/exit.png';

function App() {
  const [selectedItem, setSelectedItem] = useState(null)
  const items = [
    {
      id: 'image_1',
      image: 'https://i.ibb.co/RPPy5Pk/img1.jpg',
    },
    {
      id: 'image_2',
      image: 'https://i.ibb.co/ngNjBSj/img2.jpg',
    },
    {
      id: 'image_3',
      image: 'https://i.ibb.co/MMvJpDj/img3.jpg',
    },
    {
      id: 'image_4',
      image: 'https://i.ibb.co/YBZRRcz/img4.jpg',
    }
  ]


  return (
    <div className='App'>
      <div className='gallery'>
        {items.map(item => (
          <motion.div key={item.id}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
            className={item.id + ' image'}
            layoutId={item.id}
            onClick={() => setSelectedItem(item)}
          >
          </motion.div>

        ))}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='container'
            >
              <motion.div
                className='preview'
                layoutId={selectedItem.id}
                style={{
                  backgroundImage: `url(${selectedItem.image})`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              >
                <motion.img
                  className='close_item'
                  src={exit}
                  alt="exit"
                  onClick={() => setSelectedItem(null)}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className='text'><p>Tap to open image</p></div>
    </div>
  );
}

export default App;
