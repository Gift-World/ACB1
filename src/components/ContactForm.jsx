import { useState } from 'react';
// import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_yn6rcxo', // Replace with your EmailJS service ID
        'template_8eljepo', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'acb.unapologetic@gmail.com'
        },
        'YQDuZnxVR3sdRc03Y' // Replace with your EmailJS public key
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="w-[400px] "
    >
      <h3 className="font-poppins text-2xl font-semibold text-customOrange mb-4 text-center">
        Send us a Message
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 text-white placeholder-gray-400"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 text-white placeholder-gray-400"
          />
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows="4"
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 text-white placeholder-gray-400 resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-customOrange hover:bg-customBrown text-white font-semibold py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            'Sending...'
          ) : (
            <>
              Send Message
              <Send size={18} />
            </>
          )}
        </button>
      </form>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default ContactForm;