import React from 'react'
import Logo from '../assets/Logo.svg'
import {AiOutlineArrowUp} from 'react-icons/ai'
import facebook from '../assets/i.fi-social-facebook.svg'
import linkedIn from '../assets/i.fi-social-linkedin.svg'
import twitter from '../assets/i.fi-social-twitter.svg'
import instagram from '../assets/svg.feather.svg'
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom'

const Footer = () => {
    const handleScrollToTop = () => {
        scroll.scrollToTop();
      };
  return (
    <div className='mt-4 bg-[#f9fbfd] py-8 mx-4'>
        <div className='flex justify-between sm:hidden'>
     <Link to='/'>  <img
    class="h-8 w-auto lg:block "
    src={Logo}
        alt="scissor"
              />
</Link> 
              <div>
                <button onClick={handleScrollToTop}> <p className='flex items-center'>back to top <AiOutlineArrowUp/> </p></button>
               
            
              </div>
        </div>
        <div className='hidden sm:block text-gray-600'>
     <div className=' grid grid-cols-5 grid-flow-col gap-4'>
     <div className='row-span-4 col-span-1 '>
   <Link to='/'><img
    class=" h-8 w-auto lg:block fill:red mb-6"
    src={Logo}
        alt="scissor"
              /></Link>  
              <div className='flex gap-4'>
<img src={twitter} alt="twitter" className='w-6 h-6' />
<img src={instagram} alt="instagram" className='w-6 h-6' />
<img src={linkedIn} alt="linkedIn" className='w-6 h-6' />
<img src={facebook} alt="facebook" className='w-6 h-6' />
              </div>
              
        </div> 
        <div className=' row-span-2 col-span-1'>
        <div>
   <h4 className='text-xl font-semibold'>Why Scissor?</h4>
   <p>Scissor 101 </p> <p>Integrations & API</p> <p>Pricing</p> 
   </div>
        </div>
       
        <div className=' row-span-2 col-span-1'>
        <h4 className='text-xl font-semibold'>Resources</h4>
   <p>Blog </p>
   <p>Resource Library </p>
   <p>Developers</p>
   <p>App Connectors</p>
   <p>Support</p>
   <p>Trust Center</p>
   <p>Browser Extension</p>
   <p>Mobile App</p>
        </div>
        <div className=' row-span-2 col-span-1'>
        <h4 className='text-xl font-semibold'>Solutions</h4>
   <p>Social Media </p>
   <p>Customer Service </p>
   <p> For Developers</p>
   
        </div>
        <div className=' row-span-2 col-span-1'>
        <h4 className='text-xl font-semibold'>Features</h4>
   <p>Branded Links</p>
   <p>Mobile Links</p>
   <p>Campaign</p>
   <p>Management &</p>
   <p>Analytics</p>
   <p>QR Code generation</p>
        </div>
        <div className='row-span-2 col-span-1'>
        <h4 className='text-xl font-semibold'>Products</h4>
   <p>Link Management</p>
   <p>QR Codes</p>
   <p>Link-in-bio</p>
        </div>
        <div className=' row-span-2 col-span-1'>
        <h4 className='text-xl font-semibold'>Legal</h4>
   <p>Privacy Policy </p>
   <p>Cookie Policy </p>
   <p>Terms of Service </p>
   <p>Acceptable Use Policy </p>
   <p>Code of Conduct </p>
        </div>
        <div className='row-span-4 col-span-1'>
        <h4 className='text-xl font-semibold'>Company</h4>
   <p>About Scissor</p>
   <p>Careers</p>
   <p>Partners</p>
   <p>Press</p>
   <p>Contact</p>
   <p>Reviews</p>
        </div>
        

     </div>
     </div>
    </div>
  )
}

export default Footer
