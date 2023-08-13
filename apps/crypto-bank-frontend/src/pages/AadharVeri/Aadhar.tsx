import React, { useState } from 'react';
import './Aadhar.scss'; // You can create a CSS file to style the component

import { Web3Storage, getFilesFromPath } from 'web3.storage';
import { useNavigate } from 'react-router-dom';
const Aadhar = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const navigate = useNavigate();

  // const [files, setFiles] = useState(null);
  const [url, setUrl] = useState('');
  const [isUpl, setIsUpl] = useState(false);

  const handleFileChange = (e: Event) => {
    // const file = e.target?.files[0];
    setSelectedFile(e.target?.files[0]);
  };

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDM5NTJiMjcyMGQwNDAyMTdDMENDNDFjYjRkNDEyM0U3RjUwZkUyN0YiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTE4OTY0OTc4MDcsIm5hbWUiOiJzdGF0dXNjb2RlMCJ9.spGBtXNiSjfLQTJlPjrQ-vwkvlX7Tw-S2vgxMpIGXhM';

  function getAccessToken() {
    return token;
  }

  function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() });
  }

  const handleUpload = async () => {
    try {
      const client = makeStorageClient();
      const cid = await client.put([selectedFile]);
      setUrl(`https://dweb.link/ipfs/${cid}`);
      setIsUpl(false);
      console.log('stored file with cid:', cid);
      if (cid) {
        navigate('/home');
      }
    } catch (error) {
      console.error('Error storing file:', error);
    }
  };

  return (
    <div className="w-screen h-screen bg-main-bg flex justify-center items-center flex-col gap-2">
      <input
        type="text"
        placeholder="Enter Aadhar number"
        className="font-poppins py-2 px-3 rounded-sm outline-none border-2 border-primary1"
      />
      <h2 className="font-poppins text-white">Upload Aadhar File</h2>
      <input type="file" onChange={handleFileChange} />
      <button
        className="font-poppins text-white font-bolda border-2 border-gray-500 py-2 px-3 rounded-lg"
        onClick={handleUpload}
      >
        Upload
      </button>
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
