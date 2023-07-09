import React from 'react'
import PricingCard from '../../components/PricingCard'
import gradientline from '../../assets/gradient-line.svg'

const Pricing = () => {

    const freeData = ['Unlimited URL Shortening', 'Basic Link Analytics', 'Customizable Short Links', 'Standard Support', 'Ad-supported']
    const professionalData = ['Enhanced Link Analytics', 'Custom Branded Domains', 'Advanced Link Customization', 'Priority Support', 'Add-free Experience']
    const teamsData = ['Team Collaboration', 'User Roles and Permissions', 'Enhanced Security', 'API Access', 'Dedicated Account Manager']
  return (

    <div>
      <div className='flex flex-col justify-center text-center p-2 mb-4 text-gray-700'>
       
        <div className='flex flex-col justify-center text-center '>
        <div className='flex  justify-center text-center'>
      <img src={gradientline} alt="gradientline" className='w-18 h-10 mr-2'/>
<h2 className=' text-lg sm:text-2xl font-bold tracking-wider '>A <span className='text-customBlue'>price perfect</span> for your needs.</h2></div> 
      <p className='hidden sm:block text-sm font-semibold'>From catering for your personal, business, event, socials needs, you can be</p>
      <p className='hidden sm:block sm:text-sm font-semibold'>rest assured we have you in mind in our pricing. </p>
      <p className=' max-w-[270px] sm:hidden mx-auto text-sm font-semibold'>From catering for your personal, business, event, socials needs, you can be</p>
      <p className='max-w-[270px] sm:hidden mx-auto  text-sm font-semibold'>rest assured we have you in mind in our pricing. </p>
      
      
      </div>
      </div>
    <div className='sm:flex sm:justify-between'>
        <PricingCard plan="Basic" header="Free" planText="Free for all users" cardList={freeData}/>
        <PricingCard plan="Professional" header="$15/month" planText="Ideal for business creators" cardList={professionalData} whiteBackground={true}/>
        <PricingCard plan="Teams" header="$25/month" planText="Share with up to 10 users" cardList={teamsData}/>


    </div>
    </div>
  )
}

export default Pricing;