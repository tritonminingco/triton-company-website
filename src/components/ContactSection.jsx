import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Github, Calendar, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@tritonmining.io'],
      action: 'mailto:rachel@tritonmining.io'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (239) 428-3414', 'Mon-Fri 9AM-6PM PST'],
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['7901 4th St N STE 300, St. Pete Beach, Florida 33702', 'United States'],
      action: 'https://maps.google.com'
    },
    {
      icon: Github,
      title: 'GitHub',
      details: ['github.com/tritonmining', 'Open Source Projects'],
      action: 'https://github.com/tritonminingco'
    }
  ];

  const quickActions = [
    {
      title: 'Schedule a Demo',
      description: 'See our technology in action',
      icon: Calendar,
      action: 'https://calendly.com/tritonminingco',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Press Inquiries',
      description: 'Media and press contacts',
      icon: Mail,
      action: 'mailto:contacts@tritonmining.io',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Partnership',
      description: 'Collaborate with us',
      icon: Send,
      action: 'mailto:contact@tritonmining.io',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-ocean-dark/50 to-ocean-dark">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl font-orbitron"
          >
            <span className="gradient-text">Get in Touch</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto text-lg leading-relaxed sm:text-xl text-ocean-text/80"
          >
            Ready to learn more about sustainable ocean mining? We'd love to hear from you. 
            Get in touch with our team or schedule a demo to see our technology in action.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="p-8 border bg-ocean-dark/50 backdrop-blur-sm border-ocean-primary/20 rounded-xl"
          >
            <h3 className="mb-6 text-2xl font-semibold font-orbitron text-ocean-text">
              Send us a Message
            </h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-400" />
                <h4 className="mb-2 text-xl font-semibold font-orbitron text-ocean-text">
                  Message Sent!
                </h4>
                <p className="text-ocean-text/70">
                  Thank you for your message. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-ocean-text">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 transition-colors duration-300 border rounded-lg bg-ocean-dark/50 border-ocean-primary/30 text-ocean-text placeholder-ocean-text/60 focus:outline-none focus:border-ocean-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-ocean-text">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 transition-colors duration-300 border rounded-lg bg-ocean-dark/50 border-ocean-primary/30 text-ocean-text placeholder-ocean-text/60 focus:outline-none focus:border-ocean-primary"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block mb-2 text-sm font-medium text-ocean-text">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 transition-colors duration-300 border rounded-lg bg-ocean-dark/50 border-ocean-primary/30 text-ocean-text placeholder-ocean-text/60 focus:outline-none focus:border-ocean-primary"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-ocean-text">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 transition-colors duration-300 border rounded-lg resize-none bg-ocean-dark/50 border-ocean-primary/30 text-ocean-text placeholder-ocean-text/60 focus:outline-none focus:border-ocean-primary"
                    placeholder="Tell us about your interest in sustainable ocean mining..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center w-full space-x-2 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div>
              <h3 className="mb-6 text-2xl font-semibold font-orbitron text-ocean-text">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.action}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start p-4 space-x-4 transition-colors duration-300 rounded-lg bg-ocean-dark/30 hover:bg-ocean-dark/50 group"
                  >
                    <div className="flex-shrink-0">
                      <info.icon className="w-6 h-6 transition-colors duration-300 text-ocean-primary group-hover:text-ocean-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium transition-colors duration-300 text-ocean-text group-hover:text-ocean-primary">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-ocean-text/70">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="mb-6 text-xl font-semibold font-orbitron text-ocean-text">
                Quick Actions
              </h3>
              
              <div className="space-y-4">
                {quickActions.map((action, index) => (
                  <motion.a
                    key={action.title}
                    href={action.action}
                    whileHover={{ scale: 1.02 }}
                    className={`block p-4 rounded-lg bg-gradient-to-r ${action.color} bg-opacity-10 border border-current border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group`}
                  >
                    <div className="flex items-center space-x-4">
                      <action.icon className="w-6 h-6 text-current transition-transform duration-300 group-hover:scale-110" />
                      <div>
                        <h4 className="font-medium transition-colors duration-300 text-ocean-text group-hover:text-current">
                          {action.title}
                        </h4>
                        <p className="text-sm transition-colors duration-300 text-ocean-text/70 group-hover:text-current/70">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="p-6 rounded-lg bg-ocean-dark/30">
              <h4 className="mb-4 font-semibold font-orbitron text-ocean-text">
                Office Hours
              </h4>
              <div className="space-y-2 text-sm text-ocean-text/70">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
