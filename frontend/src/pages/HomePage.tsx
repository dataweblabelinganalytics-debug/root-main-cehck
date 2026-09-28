import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Brain, Zap, Cog, BarChart3, CheckCircle2, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { ProjectShowcase } from '@/components/sections/ProjectShowcase';
import { CTASection } from '@/components/sections/CTASection';
import { WorkflowVisualization } from '@/components/visualizations/WorkflowVisualization';
import { Reveal } from '@/components/motion/Reveal';
import { StaggerContainer, StaggerItem } from '@/components/motion/StaggerContainer';
import { AnimatedCounter } from '@/components/motion/AnimatedCounter';
import { projects } from '@/data/projects';
import { Card } from '@/components/ui/Card';
import { viewport } from '@/config/motion';

const whatWeDoFeatures = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Software that analyzes information, identifies patterns and assists with intelligent decision-making."
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Systems that eliminate repetitive work and connect workflows across operations."
  },
  {
    icon: Cog,
    title: "Business Software",
    description: "Practical SaaS products built around actual business operations and real workflows."
  },
  {
    icon: BarChart3,
    title: "Data Intelligence",
    description: "Turning operational information into usable, actionable insights for better decisions."
  }
];

const philosophyItems = [
  { title: "Real workflow problems first", desc: "We start with the problem, not the technology." },
  { title: "Automation before complexity", desc: "Simplify first, then automate." },
  { title: "AI where intelligence matters", desc: "Purposeful application of AI for real value." },
  { title: "Human control where judgment matters", desc: "Keeping humans in the loop for key decisions." },
  { title: "Scalable architecture", desc: "Built to grow alongside your business operations." },
  { title: "Clear user experience", desc: "Intuitive interfaces that require zero training." }
];

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Kendrix | AI, Automation & Intelligent Software</title>
        <meta name="description" content="Kendrix designs intelligent software that combines automation, data and AI to simplify complex workflows and help businesses work more efficiently." />
      </Helmet>

      {/* Section 1 - Hero */}
      <HeroSection
        badge="Built in India. Designed for the world."
        headline="AI and Automation Built for Real Work."
        description="Kendrix designs intelligent software that combines automation, data and AI to simplify complex workflows and help businesses work more efficiently."
        primaryCTA={{ label: "Explore Our Projects", href: "/projects" }}
        secondaryCTA={{ label: "Contact Us", href: "/contact" }}
        className="bg-white"
      >
        <WorkflowVisualization />
      </HeroSection>

      {/* Section 2 - What Kendrix Does */}
      <section className="bg-[#F6F9FC] py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading overline="What We Do" align="center">
              We build software that turns complex workflows into intelligent systems.
            </SectionHeading>
          </Reveal>
          <div className="mt-12">
            <FeatureGrid features={whatWeDoFeatures} />
          </div>
        </Container>
      </section>

      {/* Section 3 - Our Projects */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading overline="Our Projects" align="center">
              Products built around real workflows.
            </SectionHeading>
          </Reveal>
          
          <div className="mt-12 space-y-8">
            {projects.slice(0, 2).map((project, index) => (
              <ProjectShowcase 
                key={project.slug} 
                project={project} 
                index={index}
                visual={
                  index === 0 ? (
                    <Card className="p-6 bg-white shadow-xl rounded-xl border border-gray-100 h-full min-h-[300px] flex flex-col relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-2 bg-[#2563EB]" />
                      <h4 className="font-bold text-[#061B3A] mb-4">Today's Overview</h4>
                      <motion.div 
                        className="grid grid-cols-2 gap-4 mb-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport.once}
                        variants={{
                          hidden: {},
                          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
                        }}
                      >
                        <motion.div 
                          className="bg-blue-50 p-4 rounded-lg"
                          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                        >
                          <span className="text-sm text-blue-600 font-medium">Bookings</span>
                          <p className="text-2xl font-bold text-[#061B3A]">
                            <AnimatedCounter target={42} />
                          </p>
                        </motion.div>
                        <motion.div 
                          className="bg-amber-50 p-4 rounded-lg"
                          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                        >
                          <span className="text-sm text-amber-600 font-medium">In Queue</span>
                          <p className="text-2xl font-bold text-[#061B3A]">
                            <AnimatedCounter target={12} />
                          </p>
                        </motion.div>
                        <motion.div 
                          className="bg-emerald-50 p-4 rounded-lg"
                          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                        >
                          <span className="text-sm text-emerald-600 font-medium">In Service</span>
                          <p className="text-2xl font-bold text-[#061B3A]">
                            <AnimatedCounter target={8} />
                          </p>
                        </motion.div>
                      </motion.div>
                      <div className="flex-1 border border-gray-100 rounded-lg p-4">
                        <h5 className="text-sm font-semibold text-gray-500 mb-3 flex items-center gap-2">
                          Live Queue
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                          </span>
                        </h5>
                        <div className="space-y-3">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">#{i}</div>
                              <div className="h-2 bg-gray-200 rounded-full flex-1" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  ) : (
                    <Card className="p-6 bg-[#061B3A] text-white shadow-xl rounded-xl border-0 h-full min-h-[300px] flex flex-col">
                      <h4 className="font-bold mb-6">Content Pipeline</h4>
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4 p-3 bg-white/10 rounded-lg">
                          <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center">
                            <Zap size={20} className="text-[#F59E0B]" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium mb-1">Source Analysis</div>
                            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                              <motion.div 
                                className="bg-[#2563EB] h-full"
                                initial={{ width: '0%' }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                              />
                            </div>
                          </div>
                          <span className="text-xs font-bold text-emerald-400">DONE</span>
                        </div>
                        <div className="flex items-center gap-4 p-3 bg-white/10 rounded-lg">
                          <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center">
                            <Brain size={20} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium mb-1">Content Generation</div>
                            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                              <motion.div 
                                className="bg-[#2563EB] h-full"
                                initial={{ width: '0%' }}
                                whileInView={{ width: '65%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                              />
                            </div>
                          </div>
                          <span className="text-xs font-bold text-blue-300">65%</span>
                        </div>
                        <div className="grid grid-cols-3 gap-3 mt-4">
                          {['Blog', 'Social', 'Email'].map((platform, i) => (
                            <motion.div 
                              key={platform} 
                              className="bg-white/5 border border-white/10 rounded p-2 text-center text-xs font-medium text-gray-300"
                              initial={{ opacity: 0, y: 8 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                            >
                              {platform}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  )
                }
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Section 4 - How We Think */}
      <section className="bg-[#F6F9FC] py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading overline="Our Philosophy">
              Technology Should Solve Work, Not Create More of It.
            </SectionHeading>
          </Reveal>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {philosophyItems.map((item, index) => (
              <StaggerItem key={index} className="flex gap-4">
                <div className="mt-1 flex-shrink-0 text-[#2563EB]">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#061B3A] mb-2">{item.title}</h4>
                  <p className="text-[#64748B] leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Section 5 - Built in India */}
      <section className="bg-white py-20 md:py-24">
        <Container>
          <Reveal className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div 
              className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6 relative overflow-hidden border border-orange-100"
              whileInView={{ scale: [0.8, 1.05, 1], opacity: [0, 1, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,transparent_100%)]" />
              <MapPin className="text-[#F59E0B] relative z-10" size={28} />
            </motion.div>
            
            <h2 
              className="text-[#061B3A] font-bold leading-tight mb-6"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
            >
              Built in India. Built for Global Problems.
            </h2>
            
            <p className="text-[#64748B] text-lg md:text-xl leading-relaxed">
              Kendrix is proudly built in India with the ambition to create software that can serve businesses, teams and users anywhere in the world.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Section 6 - Contact CTA */}
      <CTASection
        headline="Have a workflow worth improving?"
        description="Whether you're interested in Kendrix products, automation or potential collaboration, we'd like to hear from you."
        buttonLabel="Contact Us"
        buttonHref="/contact"
        variant="light"
      />
    </>
  );
};

export default HomePage;
