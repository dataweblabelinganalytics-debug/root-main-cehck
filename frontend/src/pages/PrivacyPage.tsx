import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';

export const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Kendrix</title>
        <meta name="description" content="Privacy Policy for Kendrix software and services." />
      </Helmet>

      <div className="bg-white py-20 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-slate prose-blue prose-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-[#061B3A] mb-4">Privacy Policy</h1>
            <p className="text-gray-500 font-medium mb-12">Last updated: September 2026</p>

            <div className="space-y-10 text-[#64748B] leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-[#061B3A] mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                  We collect information that you provide directly to us, such as when you create or modify your account, request support, or communicate with us. This information may include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information</li>
                  <li>Company details</li>
                  <li>Communication records</li>
                  <li>Usage data of our software products</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#061B3A] mb-4">2. How We Use Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Respond to comments, questions, and customer service requests</li>
                  <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#061B3A] mb-4">3. Data Storage and Security</h2>
                <p>
                  We implement reasonable security measures to protect your personal information. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#061B3A] mb-4">4. Third Parties</h2>
                <p>
                  We may share information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf. We do not sell your personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#061B3A] mb-4">5. Your Rights</h2>
                <p>
                  Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. Contact us to exercise these rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#061B3A] mb-4">6. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:privacy@kendrix.com" className="text-blue-600 hover:underline">privacy@kendrix.com</a>
                </p>
              </section>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PrivacyPage;
