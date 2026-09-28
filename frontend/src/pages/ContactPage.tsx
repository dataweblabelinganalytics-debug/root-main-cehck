import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { HeroSection } from '@/components/sections/HeroSection';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { CheckCircle2, AlertCircle, Mail, Clock } from 'lucide-react';
import { submitContact } from '@/services/api';
import { Reveal } from '@/components/motion/Reveal';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: 'General Enquiry',
    subject: '',
    message: '',
    privacy: false
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await submitContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
        projectInterest: formData.interest,
        privacyConsent: formData.privacy,
      });
      if (response.message?.includes('error') || response.errors) {
        throw new Error(response.message || 'Submission failed');
      }
      setStatus('success');
      setFormData({
        name: '', email: '', phone: '', company: '', 
        interest: 'General Enquiry', subject: '', message: '', privacy: false
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again later.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Kendrix</title>
        <meta name="description" content="Get in touch with Kendrix for products, partnerships, or business collaboration." />
      </Helmet>

      <HeroSection
        headline="Let's Build Something Useful."
        description="Interested in Kendrix products, partnerships, automation or business collaboration? Tell us what you're working on."
        className="bg-white pb-8 md:pb-12"
      />

      <section className="bg-[#F6F9FC] py-16 md:py-20">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <Reveal className="flex-grow lg:w-2/3" dir="left">
              <Card className="p-6 md:p-8 shadow-sm">
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#061B3A] mb-4">Message Sent Successfully!</h3>
                    <p className="text-[#64748B] mb-8">Thank you for reaching out. We will get back to you as soon as possible.</p>
                    <Button variant="primary" onClick={() => setStatus('idle')}>Send Another Message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {status === 'error' && (
                      <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-md flex items-center gap-3">
                        <AlertCircle size={20} />
                        <span>{errorMessage}</span>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input required type="text" name="name" value={formData.name} onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                        <input type="text" name="company" value={formData.company} onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">I'm interested in</label>
                      <select name="interest" value={formData.interest} onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                        <option>General Enquiry</option>
                        <option>Kendrix Scheduling Software</option>
                        <option>Kendrix Content Intelligence</option>
                        <option>AI & Automation</option>
                        <option>Partnership</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                      <input required type="text" name="subject" value={formData.subject} onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                      <textarea required name="message" value={formData.message} onChange={handleChange} rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none" />
                    </div>

                    <div className="flex items-start gap-3">
                      <input required type="checkbox" name="privacy" checked={formData.privacy} onChange={handleChange} id="privacy"
                        className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                      <label htmlFor="privacy" className="text-sm text-gray-600">
                        I agree to the <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a> and consent to having my information processed to respond to this inquiry.
                      </label>
                    </div>

                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className="w-full md:w-auto px-8 py-3 bg-[#2563EB] text-white font-medium rounded-md hover:bg-blue-700 hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                    >
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </Card>
            </Reveal>

            {/* Info Sidebar */}
            <Reveal className="lg:w-1/3" dir="right" delay={0.15}>
              <Card className="p-6 md:p-8 bg-[#061B3A] text-white shadow-lg border-0 h-full">
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-[#F59E0B]">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-200 mb-1">Email Us</h4>
                      <a href="mailto:contact@kendrix.com" className="text-white hover:text-blue-300 transition-colors">
                        contact@kendrix.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-[#F59E0B]">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-200 mb-1">Response Time</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        We aim to respond to all inquiries within 24-48 business hours.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactPage;
