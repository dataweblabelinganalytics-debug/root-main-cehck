import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Kendrix</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="bg-[#F6F9FC] min-h-[80vh] flex items-center py-20">
        <Container>
          <motion.div 
            className="flex flex-col items-center text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 bg-blue-100 text-[#2563EB] rounded-2xl flex items-center justify-center mb-8 shadow-sm">
              <Brain size={40} />
            </div>
            
            <h1 className="text-8xl md:text-9xl font-bold text-[#061B3A] mb-4 tracking-tighter opacity-10">
              404
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#061B3A] mb-6 relative -top-12">
              Page Not Found
            </h2>
            
            <p className="text-[#64748B] text-lg mb-10 -mt-6">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
            
            <Button variant="primary" size="lg" href="/">
              Back to Home
            </Button>
          </motion.div>
        </Container>
      </div>
    </>
  );
};

export default NotFoundPage;
