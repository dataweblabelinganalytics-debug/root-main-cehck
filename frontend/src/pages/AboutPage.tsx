import { Helmet } from 'react-helmet-async';
import { Target, Compass, Eye, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { HeroSection } from '@/components/sections/HeroSection';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/motion/Reveal';
import { StaggerContainer, StaggerItem } from '@/components/motion/StaggerContainer';

const values = [
  "Practical Innovation",
  "Reliability",
  "Human-Centered Design",
  "Responsible AI",
  "Scalability",
  "Continuous Improvement"
];

export const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Kendrix | AI & Automation Company</title>
        <meta name="description" content="Kendrix is an AI and automation company creating software products that solve operational problems for businesses worldwide." />
      </Helmet>

      {/* Hero */}
      <HeroSection
        overline="About Kendrix"
        headline="Building practical intelligence into everyday work."
        description="Kendrix is an AI and automation company creating software products that solve operational problems for businesses worldwide."
        className="bg-white"
      />

      {/* Company Story */}
      <section className="bg-[#F6F9FC] py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal className="max-w-3xl mx-auto space-y-6 text-[#64748B] text-lg leading-relaxed">
            <p>
              We believe that the best technology is invisible. It works quietly in the background, making complex processes feel simple and turning chaotic data into clear insights. At Kendrix, our goal is to build software that achieves exactly this for real-world business operations.
            </p>
            <p>
              We started with a simple observation: despite the rapid advancement in AI and automation, many businesses still struggle with disconnected workflows, repetitive tasks, and isolated data. We build products that bridge this gap, offering practical intelligence where it matters most.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Our Aim / Mission / Vision */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
              <Card hoverable className="h-full p-8 border border-gray-100 shadow-sm bg-gray-50/50">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 transition-transform group-hover:scale-105">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#061B3A] mb-4">Our Aim</h3>
                <p className="text-[#64748B] leading-relaxed">
                  To create intelligent software that reduces repetitive work, simplifies complex operations and helps people and businesses use technology more effectively.
                </p>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card hoverable className="h-full p-8 border border-gray-100 shadow-sm bg-gray-50/50">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-6">
                  <Compass size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#061B3A] mb-4">Our Mission</h3>
                <p className="text-[#64748B] leading-relaxed">
                  To design practical AI and automation systems that solve real workflow problems while remaining reliable, understandable and easy for people to use.
                </p>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card hoverable className="h-full p-8 border border-gray-100 shadow-sm bg-gray-50/50">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-6">
                  <Eye size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#061B3A] mb-4">Our Vision</h3>
                <p className="text-[#64748B] leading-relaxed">
                  To build Kendrix into a globally trusted technology company originating from India, creating intelligent software products that improve how businesses operate, communicate and make decisions.
                </p>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      {/* Long-term Philosophy */}
      <section className="bg-[#061B3A] text-white py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading align="center" className="text-white">
              <span className="text-white">Our Long-term Philosophy</span>
            </SectionHeading>
          </Reveal>
          
          <StaggerContainer className="max-w-3xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Save time",
              "Reduce friction",
              "Increase clarity",
              "Improve decisions",
              "Automate repetitive processes",
              "Keep humans in meaningful control"
            ].map((item, idx) => (
              <StaggerItem key={idx} className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
                <CheckCircle2 className="text-[#F59E0B] flex-shrink-0" size={20} />
                <span className="font-medium">{item}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-[#F6F9FC] py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading overline="Core Principles" align="center">
              Our Values
            </SectionHeading>
          </Reveal>
          
          <StaggerContainer className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <StaggerItem key={idx}>
                <Card hoverable className="p-6 text-center h-full flex items-center justify-center bg-white shadow-sm">
                  <span className="font-semibold text-[#061B3A]">{value}</span>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
};

export default AboutPage;
