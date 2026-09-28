import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectShowcase } from '@/components/sections/ProjectShowcase';
import { CTASection } from '@/components/sections/CTASection';
import { Reveal } from '@/components/motion/Reveal';
import { projects } from '@/data/projects';

export const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Projects | Kendrix</title>
        <meta name="description" content="Explore Kendrix's portfolio of intelligent software products built around real business workflows." />
      </Helmet>

      <section className="bg-white pt-24 pb-12">
        <Container>
          <Reveal className="max-w-3xl">
            <SectionHeading overline="Our Projects" align="left">
              Products built around real workflows.
            </SectionHeading>
            <p className="mt-6 text-xl text-[#64748B] leading-relaxed">
              We design and develop intelligent applications that combine AI, automation, and practical business logic to solve specific operational challenges.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-[#F6F9FC] py-12 md:py-16">
        <Container>
          <div className="space-y-16">
            {projects.map((project, index) => (
              <ProjectShowcase 
                key={project.slug} 
                project={project} 
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        headline="Ready to optimize your workflow?"
        description="Let's discuss how our intelligent solutions can help your business operate more efficiently."
        buttonLabel="Get in Touch"
        buttonHref="/contact"
        variant="dark"
      />
    </>
  );
};

export default ProjectsPage;
