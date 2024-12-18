import React from 'react';
import {
  Leaf,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-green-800 to-green-900 text-white py-16 ">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="w-10 h-10 mr-3 text-green-300" />
              <h2 className="text-2xl font-bold">Agri Nepal</h2>
            </div>
            <p className="text-green-200 text-sm">
              Empowering agricultural communities through innovation, knowledge,
              and sustainable practices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-green-600 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Categories', href: '/categories' },
                { name: 'Success Stories', href: '/stories' },
                { name: 'Weather', href: '/weather' },
                { name: 'Consultations', href: '/consultations' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-green-200 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-green-600 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-green-300" />
                <span className="text-green-200">Bhatidanda, Nepal</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-green-300" />
                <span className="text-green-200">agrinepal@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-green-300" />
                <span className="text-green-200">+977-9860428022</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-green-600 pb-2">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: 'https://facebook.com/agrinepal' },
                { Icon: Twitter, href: 'https://twitter.com/agrinepal' },
                { Icon: Instagram, href: 'https://instagram.com/agrinepal' },
                {
                  Icon: Linkedin,
                  href: 'https://linkedin.com/company/agrinepal',
                },
              ].map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300 hover:text-white transition-colors duration-300"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-sm text-green-300">
                Stay updated with the latest agricultural innovations and
                community stories.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-green-700 pt-6 text-center">
          <p className="text-green-300 text-sm">
            &copy; {currentYear} Agri Nepal. All Rights Reserved |
            <a
              href="/privacy"
              className="ml-2 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>{' '}
            |
            <a
              href="/terms"
              className="ml-2 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
