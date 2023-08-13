import React, { useState } from 'react';
import './Aadhar.scss'; // You can create a CSS file to style the component

const Aadhar = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e: Event) => {
    const file = e.target?.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="w-screen h-screen bg-primary2 flex justify-center items-center flex-col gap-2">
      <input
        type="text"
        placeholder="Enter Aadhar number"
        className="font-poppins py-2 px-3 rounded-sm outline-none border-2 border-primary1"
      />
      <h2 className="font-poppins text-white">Upload Aadhar File</h2>
      <input type="file" onChange={handleFileChange} />
      {/* {selectedFile && (
        <div>
          <h3>Selected File:</h3>
          <p>{selectedFile.name}</p>
          <p>Size: {selectedFile.size} bytes</p>
        </div>
      )} */}
    </div>
  );
};

export default Aadhar;
