import React, { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation(); // mevcut konumu al

    const evermoreRef = useRef(null);
    const moreRef = useRef(null);

    const handleLoginClick = () => {
      navigate('/login');
    };

    const handleRegisterClick = () => {
        navigate('/register');
      };

    const scrollToEverMore = () => {
      evermoreRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToMore = () => {
      moreRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Header'ı göstermemek istediğiniz path'leri buraya ekleyin
    const hiddenPaths = ['/login', '/register', '/hiddenpage'];

    // Mevcut path, hiddenPaths içindeyse header gösterilmez
    if (hiddenPaths.includes(location.pathname)) {
      return null;
    }

    return (
      <header className="fixed p-4 z-10 max-w-full rounded-none bg-black bg-opacity-0 py-2 px-4 text-my-navgri backdrop-blur-xl text-white w-full flex justify-between items-center ">
          <div className="flex items-center m-8 ml-32 ">
              <a href="/" className="mr-4">
                  <img src="../../assets/logo/beyazlogo.png" alt="Beyaz Logo" className="h-8" />
              </a>
              <ul className="flex ml-16">
                  <li className="mx-6">
                      <button onClick={scrollToEverMore} className="text-white font-semibold hover:text-gray-300">
                          What is EverMore?
                      </button>
                  </li>
                  <li className="mx-8">
                      <button onClick={scrollToMore} className="text-white font-semibold hover:text-gray-300">
                          More
                      </button>
                  </li>
              </ul>
          </div>
          <div className="flex mr-32">
              <button onClick={handleLoginClick} className="mx-6 text-white font-bold py-2 px-4 rounded">
                  Sign In
              </button>
              <button onClick={handleRegisterClick} className="bg-gradient-to-r from-green-500 to-purple-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
                  Sign Up
              </button>
          </div>
      </header>
    );
};

export default Header;
