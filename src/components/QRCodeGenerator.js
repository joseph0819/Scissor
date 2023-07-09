// import React from 'react'

// const QRCodeGenerator = () => {
//   return (
//     <div>
//       <div>
//         <div className='flex flex-col sm:grid sm:grid-cols-2 sm:grid-flow-col gap-4 '>

// <div>
// Unlock the power of convenience and connectivity with our cutting-edge QR code generator page. Say goodbye to tedious manual entry and embrace seamless information transfer at your fingertips. With our innovative tool, you can effortlessly transform any text, URL, or contact details into a captivating QR code. Whether you're promoting your business, sharing essential links, or enhancing your personal brand, our QR code generator provides a gateway to effortless sharing and limitless possibilities. Empower your digital presence and make an unforgettable impression with our user-friendly and dynamic QR code generator. Elevate your communication to new heights, one code at a time.
// </div>
// <div>
//   welcome
// </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default QRCodeGenerator


import React, { useState } from 'react';
import NavBar from './Navbar';
import Footer from './Footer';

const QrGenerator = () => {

  const [url, setUrl] = useState('');
  const [qrSource, setQrSource] = useState(
    'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=created%20by%20joseph'
  );

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const generateQr = () => {
    if (!url) {
      alert('Enter a URL/text');
      return;
    }

    const source = `http://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
      url
    )}&size=150x150`;
    setQrSource(source);
    setUrl('');
  };

  return (
    <>
    <NavBar/>
    <div className=" mt-10 flex flex-col items-center justify-center p-8">
      <div className="container mx-auto max-w-2xl max-h-full p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-500 text-center">QR Code Generator</h1>
        <input
          type="text"
          className="border border-gray-300 px-3 py-2 rounded-md mb-4 w-full outline-none "
          placeholder="Enter URL/text..."
          value={url}
          onChange={handleInputChange}
        />
        <div className="border border-lightBlue-500 rounded-md p-4 mb-4">
  <img className="mx-auto mb-4 w-40 h-40 sm:w-80 sm:h-80" src={qrSource} alt="Qr Code" title="QR" />
  <button
    className="bg-customBlue w-full text-white py-2 px-4 rounded-md hover:opacity-60 mt-2 sm:mt-8"
    onClick={generateQr}
  >
    Generate
  </button>
</div>

        
      </div>
      <div className='my-6 flex justify-center text-center font-bold text-gray-400 text-lg'>
      Say goodbye to tedious manual entry and embrace seamless information transfer at your fingertips.
      </div>
    </div>
    <Footer/>
    </>  
  );
}

export default QrGenerator;
