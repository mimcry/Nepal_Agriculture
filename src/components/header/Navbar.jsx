import React, { useState, useEffect, useRef } from 'react';
import { Search, Home, ShoppingCart, Book, Phone, User } from 'lucide-react';
import logo from '../Images/logo.webp';
import { Link } from 'react-router-dom';
import { isLoggedInAtom } from '../../state/authAtom';
import { useAtom } from 'jotai';
import MyDropdown from './Dropdown';

const NavItem = ({ href, children, icon: Icon }) => (
  <a
    href={href}
    className="flex flex-col items-center p-2 text-white hover:text-green-600 transition-colors"
  >
    <Icon className="w-6 h-6" />
    <span className="text-xs mt-1">{children}</span>
  </a>
);

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn] = useAtom(isLoggedInAtom);
  const [isOpen, setIsOpen] = useState(false); // Track the dropdown visibility
  const dropdownRef = useRef(null); // Ref to handle dropdown positioning
  const avatarRef = useRef(null); // Ref for the avatar image

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to toggle the dropdown visibility
  const handleAvatarClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop and Tablet Navbar */}
      <nav
        className={`bg-[#387B36] shadow-md hidden sm:block transition-all duration-300 ${
          isScrolled ? 'fixed top-0 left-0 right-0 z-50' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <Link to="/">
              <div className="flex items-center mt-2 cursor-pointer">
                <img
                  src={logo}
                  alt="Agri Nepal"
                  className="w-10 h-10 rounded-full"
                />
                <span className="ml-2 text-xl font-semibold text-white">
                  Agri Nepal
                </span>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <NavItem href="/" icon={Home}>
                HOME
              </NavItem>
              <NavItem href="/marketplace" icon={ShoppingCart}>
                MARKETPLACE
              </NavItem>
              <NavItem href="/resources" icon={Book}>
                RESOURCES
              </NavItem>
              <NavItem href="/contactus" icon={Phone}>
                CONTACT
              </NavItem>
            </div>
            <div className="flex items-center relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" />
              </div>
              {isLoggedIn ? (
                <div className="ml-3 ">
                  <MyDropdown />
                </div>
              ) : (
                <Link to="/login">
                  <button className="ml-4 px-4 py-2 bg-white text-[#387B36] rounded-lg hover:translate hover:scale-105 transition-colors">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Tab Navigation */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-[#387B36] shadow-md z-50">
        <div className="flex justify-around py-2">
          <NavItem href="/" icon={Home}>
            Home
          </NavItem>
          <NavItem href="/marketplace" icon={ShoppingCart}>
            Market
          </NavItem>
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="flex flex-col items-center p-2 text-white hover:text-green-600 transition-colors"
          >
            <Search className="w-6 h-6" />
            <span className="text-xs mt-1">Search</span>
          </button>
          <NavItem href="/resources" icon={Book}>
            Resources
          </NavItem>
          <NavItem href="/profile" icon={User}>
            Profile
          </NavItem>
        </div>
      </nav>

      {/* Mobile Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4 sm:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-white transition-all"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <button
            onClick={() => setIsSearchOpen(false)}
            className="mt-4 w-full bg-green-500 text-white py-2 rounded-full hover:bg-green-600 transition-colors"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
