import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';

export const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Kendrix</title>
        <meta name="description" content="Terms of Service for Kendrix software and products." />
      </Helmet>

      <div className="bg-white py-20 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-slate prose-blue prose-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-[#061B3A] mb-4">Terms of Service</h1>
            <p className="text-gray-500 font-medium mb-12">Last updated: September 2026</p>

            <div className="space-y-10 text-[#64748B] leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-[#061B3A] mb-4">1. Terms of Use</h2>
                <p>
                  By accessing or using the services provided by Kendrix, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#061B3A] mb-4">2. Intellectual Property</h2>
                <p>
                  The service and its original content, features, and functionality are and will remain the exclusive property of Kendrix and its licensors. The service is protected by copyright, trademark, and other laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#061B3A] mb-4">3. Disclaimer</h2>
                <p>
                  Your use of the service is at your sole risk. The service is provided on an "AS IS" and "AS AVAILABLE" basis. The service is provided without warranties of any kind, whether express or implied.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#061B3A] mb-4">4. Limitation of Liability</h2>
                <p>
                  In no event shall Kendrix, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#061B3A] mb-4">5. Changes</h2>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any material changes before they take effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#061B3A] mb-4">6. Contact</h2>
                <p>
                  If you have any questions about these Terms, please contact us at: <a href="mailto:legal@kendrix.com" className="text-blue-600 hover:underline">legal@kendrix.com</a>
                </p>
              </section>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default TermsPage;
