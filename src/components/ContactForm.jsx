import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { Send } from 'lucide-react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null); // Store hCaptcha response

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!captchaToken) {
      toast.error("Please complete the hCaptcha verification.");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_yn6rcxo', 
        'template_8eljepo',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'acb.unapologetic@gmail.com'
        },
        'YQDuZnxVR3sdRc03Y'
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setCaptchaToken(null); // Reset CAPTCHA
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-[400px]">
      <h3 className="font-poppins text-2xl font-semibold text-customOrange mb-4 text-center">
        Send us a Message
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows="4"
          className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 resize-none"
        />
        
        {/* hCaptcha Integration */}
        <HCaptcha
          sitekey="0dd82172-4c0c-4216-936a-6796ff3c8dfe" // Replace with your hCaptcha site key
          onVerify={(token) => setCaptchaToken(token)}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-customOrange hover:bg-customBrown text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2"
        >
          {isSubmitting ? 'Sending...' : <>Send Message <Send size={18} /></>}
        </button>
      </form>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default ContactForm;
