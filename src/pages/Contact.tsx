import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send, MapPin } from "lucide-react";
import PageLayout from "../components/PageLayout";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const subject = encodeURIComponent(`New Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:scienceexperts06@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "umangdabhi3004@gmail.com",
      href: "mailto:umangdabhi3004@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 70430 45865",
      href: "tel:+917043045865",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gujarat, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/UmangDabhi",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/umang-dabhi-20b215246/",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <PageLayout title="Contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-primary-800/50 backdrop-blur-sm border border-primary-600/20 rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold text-primary-400 mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary-200 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary-900/50 border border-primary-600/30 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent text-primary-200 placeholder-primary-400 transition-all duration-200"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary-200 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary-900/50 border border-primary-600/30 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent text-primary-200 placeholder-primary-400 transition-all duration-200"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary-200 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-primary-900/50 border border-primary-600/30 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent text-primary-200 placeholder-primary-400 transition-all duration-200 resize-none"
                placeholder="Your message here..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-3 bg-primary-400 hover:bg-primary-300 text-primary-900 font-semibold rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Send className="h-5 w-5" />
              <span>Send Message</span>
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
          {/* Contact Details */}
          <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-600/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-primary-400 mb-6">Get in Touch</h2>
            <p className="text-primary-200 mb-8 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach
              out!
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-3 hover:bg-primary-600/20 rounded-lg transition-all duration-200 group"
                >
                  <div className="p-2 bg-primary-400/20 rounded-lg group-hover:bg-primary-400/30 transition-all duration-200">
                    <item.icon className="h-5 w-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-300">{item.label}</p>
                    <p className="text-primary-200 font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-600/20 rounded-lg p-8">
            <h3 className="text-xl font-bold text-primary-400 mb-6">Connect with Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`p-4 bg-primary-900/50 border border-primary-600/20 rounded-lg hover:border-primary-400/30 transition-all duration-200 text-primary-300 ${social.color}`}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Available for Work */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-primary-400/10 to-primary-200/10 border border-primary-400/30 rounded-lg p-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-primary-200 font-semibold">Available for Work</span>
            </div>
            <p className="text-primary-300 text-sm">
              Currently open to new opportunities and freelance projects. Let's build something amazing together!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Contact;
