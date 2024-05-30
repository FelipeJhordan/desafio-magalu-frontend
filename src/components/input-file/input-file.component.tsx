import { useCallback } from 'react';
import { DropzoneState, useDropzone } from 'react-dropzone';

import CloseIcon from '../../assets/icons/close.svg';
import UploadInputIcon from '../../assets/icons/upload-input.svg';
import FileIcon from '../../assets/icons/file.svg';
import { ReactSVG } from 'react-svg';
import { ToastService } from '../../services/toast/toast.service';
import Spinner from '../spinner/spinner.component';

type InputFileProps = {
  setFile: (file: File | null) => void;
  file: File | null;
  isLoading: boolean;
};

type InternalInputFileProps = {
  dropzone: DropzoneState;
};

type HasFileProps = {
  file?: File;
  removeFile: () => void;
  isLoading: boolean;
};

export const InputFile = ({ file, setFile, isLoading }: InputFileProps) => {
  const removeFile = useCallback(() => {
    setFile(null);
  }, [file]);

  const onDrop = useCallback((files: File[]) => {
    setFile(files[0]);
  }, []);

  const dropzone = useDropzone({
    onDrop,
    accept: {
      'text/plain': ['.txt'],
    },
    multiple: false,
    onError: () => ToastService.alert('Erro ao receber o arquivo', 'error'),
    onDropRejected: () => ToastService.alert('Extensão inválida', 'error'),
  });

  if (file) return <HasFile file={file} removeFile={removeFile} isLoading={isLoading} />;

  return <InternalInputFile dropzone={dropzone} />;
};

const InternalInputFile = ({ dropzone }: InternalInputFileProps) => {
  const { getRootProps, getInputProps, isDragActive } = dropzone;

  return (
    <div
      {...getRootProps()}
      className={`w-full h-48 rounded-lg border-input  hover:border-gray-500 bg-input hover:bg-gray-600 transition-all
      ${isDragActive ? 'border-blue-500' : 'border-gray-600'}`}
    >
      <label htmlFor="dropzone-file" className="cursor-pointer w-full h-full">
        <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full h-full">
          <p className="mb-2 pt-3 text-lg text-white">
            Clique ou Solte seu arquivo .txt para poder enviar
          </p>
          <div className="flex mt-2">
            <ReactSVG
              src={UploadInputIcon}
              className={`w-10 h-10 mb-3 ${isDragActive ? 'text-blue-500' : 'text-gray-400'}`}
            />
            <p className="text-primary text-2xl	">Arquivo</p>
          </div>
          {isDragActive ? (
            <p className="font-bold text-lg text-primary">
              Solte para adicionar
            </p>
          ) : (
            <></>
          )}
        </div>
      </label>
      <input {...getInputProps()} className="hidden" />
    </div>
  );
};

const HasFile = ({ file, removeFile, isLoading }: HasFileProps) => {
  return (
    <div className="w-full h-48 rounded-lg border-dashed border-2 border-gray-600 bg-gray-700 flex justify-center items-center">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="bg-white w-45 rounded-md shadow-md flex gap-3 items-center justify-center">
          <ReactSVG src={FileIcon} className="w-5 h-5 my-4 ml-4" />
          <span className="text-sm text-gray-500 my-4">{file?.name}</span>
          <button
            type="button"
            onClick={removeFile}
            className="place-self-start mt-1 p-1"
          >
            <ReactSVG src={CloseIcon} className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};
