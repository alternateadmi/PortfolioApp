import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { getNeuButtonStyles, getNeuInputStyles, getNeuCardStyles } from '../utils/neumorphism';

interface ContactSectionProps {
  isDarkMode: boolean;
}

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactSection: React.FC<ContactSectionProps> = ({ isDarkMode }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonPress = () => {
    setActiveButton('submit');
    setTimeout(() => setActiveButton(null), 300);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    handleButtonPress();
    
    try {
      // This is a mock request that would be replaced with an actual fetch to your Java backend
      // e.g., const response = await fetch('https://your-api.com/contact', { method: 'POST', body: JSON.stringify(data) })
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network request
      
      // Simulate successful request
      setSubmitStatus('success');
      setStatusMessage('Message sent successfully! I will get back to you soon.');
      reset();
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (fieldName: string) => {
    return `w-full p-4 ${getNeuInputStyles(isDarkMode, focusedInput === fieldName)} ${
      errors[fieldName as keyof FormData] ? 'border border-red-500' : ''
    }`;
  };

  return (
    <section 
      id="contact" 
      className={`py-20 ${
        isDarkMode ? 'bg-neugray-800 text-neugray-100' : 'bg-neugray-100 text-neugray-800'
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`p-8 ${getNeuCardStyles(isDarkMode)}`}
          >
            {submitStatus === 'idle' ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block mb-2 font-medium">Name</label>
                    <input
                      type="text"
                      className={inputClasses('name')}
                      {...register('name', { required: 'Name is required' })}
                      onFocus={() => setFocusedInput('name')}
                      onBlur={() => setFocusedInput(null)}
                    />
                    {errors.name && (
                      <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      className={inputClasses('email')}
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: { 
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                          message: 'Invalid email address' 
                        }
                      })}
                      onFocus={() => setFocusedInput('email')}
                      onBlur={() => setFocusedInput(null)}
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block mb-2 font-medium">Subject</label>
                  <input
                    type="text"
                    className={inputClasses('subject')}
                    {...register('subject', { required: 'Subject is required' })}
                    onFocus={() => setFocusedInput('subject')}
                    onBlur={() => setFocusedInput(null)}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-red-500 text-sm">{errors.subject.message}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label className="block mb-2 font-medium">Message</label>
                  <textarea
                    rows={5}
                    className={inputClasses('message')}
                    {...register('message', { required: 'Message is required' })}
                    onFocus={() => setFocusedInput('message')}
                    onBlur={() => setFocusedInput(null)}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${getNeuButtonStyles(isDarkMode, activeButton === 'submit')} px-6 py-3 flex items-center justify-center w-full md:w-auto`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send size={16} className="ml-2" />
                    </span>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                {submitStatus === 'success' ? (
                  <div className="flex flex-col items-center">
                    <CheckCircle size={48} className="text-green-500 mb-4" />
                    <p className="text-xl font-medium mb-4">{statusMessage}</p>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className={`${getNeuButtonStyles(isDarkMode, false)} px-6 py-3`}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <AlertCircle size={48} className="text-red-500 mb-4" />
                    <p className="text-xl font-medium mb-4">{statusMessage}</p>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className={`${getNeuButtonStyles(isDarkMode, false)} px-6 py-3`}
                    >
                      Try Again
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;