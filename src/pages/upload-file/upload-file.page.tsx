import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import './upload-file.page.css';
import 'react-toastify/dist/ReactToastify.css';

import BreadCrumb from '../../components/breadcrump/breadcrumb.component';
import { InputFile } from '../../components/input-file/input-file.component';

const UploadFilePage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    console.log(file)
    e.preventDefault();

  
};

  return (
    <>
      <BreadCrumb current="UPLOAD" parent="HOME" parentPath="/" />
      <ToastContainer className="absolute" />
      <form onSubmit={handleSubmit}>
        <InputFile setFile={setFile} file={file} />
        <div className="w-full mt-5 flex justify-end">
          <button
            className="w-60 bg-green-400 hover:bg-green-500 text-gray-800 font-bold py-3 px-4 rounded-lg"
            type="submit" 
          >
            ENVIAR
          </button>
        </div>
      </form>
    </>
  );
};

export default UploadFilePage;
