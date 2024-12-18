import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4 animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help and answer any question you might have. We look
            forward to hearing from you!
          </p>
        </div>

        {/* Main Content Area */}
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden grid md:grid-cols-2 gap-0">
          {/* Contact Information Side */}
          <div className="bg-green-700 text-white p-10 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

              <div className="flex items-center space-x-4">
                <MapPin className="w-8 h-8 text-green-200" />
                <div>
                  <p className="font-semibold">Our Address</p>
                  <p className="text-green-100">Bhatidanda, Dhulikhel, Nepal</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="w-8 h-8 text-green-200" />
                <div>
                  <p className="font-semibold">Phone Number</p>
                  <p className="text-green-100">+977 9860428022</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="w-8 h-8 text-green-200" />
                <div>
                  <p className="font-semibold">Email Address</p>
                  <p className="text-green-100">agrinepal@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="p-10">
            {submitted ? (
              <div className="text-center space-y-6">
                <CheckCircle2 className="w-24 h-24 mx-auto text-green-600" />
                <h2 className="text-3xl font-bold text-green-800">
                  Thank You!
                </h2>
                <p className="text-gray-600">
                  Your message has been submitted. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-3xl font-bold text-green-800 mb-4">
                  Send Us a Message
                </h2>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-green-500 transition duration-300"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-green-500 transition duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-green-500 transition duration-300"
                    placeholder="Type your message here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-4 rounded-lg font-semibold hover:bg-green-800 transition duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16  shadow-xl rounded-2xl overflow-hidden ">
          <h2 className="text-3xl font-bold text-green-800 p-6 pb-4">
            Find Us on the Map
          </h2>
          <div className="w-full aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1480.5823016526392!2d85.5764281!3d27.6184994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb09b35b5aaaab%3A0xce41e68d0122fbc6!2sBhattidanda!5e1!3m2!1sen!2snp!4v1734107428701!5m2!1sen!2snp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
