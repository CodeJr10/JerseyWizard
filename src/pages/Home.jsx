/* eslint-disable react/no-unescaped-entities */

import { AnimatePresence, motion } from 'framer-motion';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

import { CustomButton } from '../components';
import state from '../store';
import { useSnapshot } from 'valtio';

const Home = () => {
const snap = useSnapshot(state);

return (
  <AnimatePresence>
    {snap.intro && (
      <motion.section className="home" {...slideAnimation('left')}>
        <motion.header {...slideAnimation('down')}>
          <img src="./threejs.png" alt="logo"  className='w-8 h-8 object-contain'/>
        </motion.header>

        < motion.div className='home-content' {...headContainerAnimation}>
         <motion.div {...headTextAnimation}>
        <h1 className="head-text">
          MATCH<br className="xl:block hiddem" /> DAY.
        </h1> </motion.div>
       <motion.div className='flex flex-col gap-5' {...headContentAnimation}>
         <p className="max-w-md font-normal text-gray-600 text-base">
              Create your unique and exclusive jersey with YOUR FAVORITE NUMBER  using our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
              </p>


              <CustomButton
              type="filled"
              title="Customize It"
              handleClick={()=> state.intro = false}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              
              />
       </motion.div>
         </motion.div>


      </motion.section>
    )}
  </AnimatePresence>
)
}

export default Home