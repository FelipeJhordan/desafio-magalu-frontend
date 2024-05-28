import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../hooks/useAuth';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ email?: string }>({});

  const { login } = useAuth();



  const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return emailPattern.test(email);
  };

  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    if (email) {
      debounceTimeout.current = setTimeout(() => {
        const newErrors: { email?: string } = {};
        if (!validateEmail(email)) {
          newErrors.email = 'Por favor, insira um endereço de e-mail válido.';
        }
        setErrors(newErrors);
      }, 2000);
    } else {
      // Limpa os erros se o campo de e-mail estiver vazio
      setErrors({});
    }

    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [email]);

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!errors.email && login) {
            login(email)
    }
};

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-white p-8 rounded-lg max-w-sm w-full">
        <div className="text-center mb-3">
          <h1 className="text-3xl">
            <span className="text-primary">OS</span>Station
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <input
              className="w-full p-3 text-switch_bg bg-input rounded-lg login-input"
              id="email"
              type="email"
              required
              placeholder="E-MAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <span className="mt-1 text-sm text-red-400">
                {errors.email}
              </span>
            )}
          </div>
          <div className="mb-6">
            <input
              className="w-full p-3 text-switch_bg bg-input rounded-lg login-input"
              id="password"
              type="password"
              required
              placeholder="SENHA"
            />
          </div>
          <div className="mb-6 text-center">
            <button
              className="w-full bg-green-400 hover:bg-green-500 text-gray-800 font-bold py-3 px-4 rounded-lg"
              type="submit"
            >
              ENTRAR
            </button>
          </div>
          <div className="flex justify-end items-center mb-2">
            <div className="inline-flex items-center">
              <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
                <input
                  id="ripple-on"
                  defaultChecked
                  type="checkbox"
                  className="absolute w-10 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 checked:bg-gray-900 peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
                />
                <label
                  htmlFor="ripple-on"
                  className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:bg-primary peer-checked:before:bg-gray-900"
                >
                  <div
                    className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                    data-ripple-dark="true"
                  ></div>
                </label>
              </div>
              <label
                htmlFor="ripple-on"
                className="ml-6 align-middle cursor-pointer select-none tracking-[.12rem]"
              >
                PERMANECER LOGADO
              </label>
            </div>
          </div>
          <div className="text-right pr-2">
            <a className="text-md text-primary hover:text-green-500" href="#">
              cadastro
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
