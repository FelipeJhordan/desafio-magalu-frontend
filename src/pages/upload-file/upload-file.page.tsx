import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import './upload-file.page.css';
import 'react-toastify/dist/ReactToastify.css';

import BreadCrumb from '../../components/breadcrump/breadcrumb.component';
import { InputFile } from '../../components/input-file/input-file.component';
import { ToastService } from '../../services/toast/toast.service';
import { HttpService } from '../../services/http/http.service';
import { UploadResponseType } from '../../data/sidebar-links/http-response/upload-response.type';

const UploadFilePage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const httpService = new HttpService()
      if (!file) {
        ToastService.alert('Por favor, selecione um arquivo', 'error');
        setFile(null);
        return
      }
  
      setLoading(true);
  
      const formData = new FormData();
      formData.append('file', file);
  
      const response = await httpService.post<UploadResponseType>(
        'user-orders/upload',
        formData,
        {
          "Content-Type": "multipart/form-data",
        }
      );
      handleToastMessage(response?.data, response.status);
  
      setFile(null);
      setLoading(false);
  };

  const handleToastMessage = (
    response: UploadResponseType,
    statusCode: number
  ) => {
    if (response && response.message === 'SUCCESS') {
      ToastService.alert('Arquivo processado com sucesso!', 'success');
      return;
    }

    if (response && response.message === 'ERROR') {
      ToastService.alert('Arquivo com processado com alguns erros!', 'warning');
      return;
    }

    if (statusCode === 422 || statusCode === 400) {
      ToastService.alert('Arquivo inválido', 'error');
      return;
    }


    ToastService.alert('Erro interno no servidor', 'error');
  };

  return (
    <>
      <BreadCrumb current="UPLOAD" parent="HOME" parentPath="/" />
      <ToastContainer className="absolute" />
      <form onSubmit={handleSubmit}>
        <InputFile setFile={setFile} file={file} isLoading={loading} />
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
