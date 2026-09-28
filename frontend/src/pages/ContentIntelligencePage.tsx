import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from '@/components/motion/StaggerContainer';
import { scaleIn } from '@/config/motion';
import { ContentPipeline } from '@/components/visualizations/ContentPipeline';
import { ContentIntelligenceDashboard } from '@/components/visualizations/ContentIntelligenceDashboard';
import { TabSection } from '@/components/sections/TabSection';
import {
  ArrowRight,
  ArrowDown,
  Users,
  Youtube,
  Upload,
  Instagram,
  Mic,
  Cloud,
  MonitorPlay,
  FileText,
  FileBox,
  BrainCircuit,
  MessageSquare,
  Quote,
  Clock,
  Target,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  BarChart,
  UserCheck,
  RotateCcw,
  History,
  Briefcase,
  Layers,
  GraduationCap,
  Newspaper,
  Building,
  Zap,
  Repeat,
  ShieldCheck,
  Network,
  FileVideo,
  ChevronDown,
  Linkedin,
  Twitter,
  Send,
  LineChart
} from 'lucide-react';
// Assuming FlowDiagram is a simple component we can mock or if it doesn't exist, we'll build a simplified version here.
// As user requested, "import from '@/components/sections/FlowDiagram'". We will assume it exists or fallback gracefully.
import { FlowDiagram } from '@/components/sections/FlowDiagram'; 

export const ContentIntelligencePage: React.FC = () => {
  return (
    <main className="w-full overflow-hidden">
      <Helmet>
        <title>Kendrix AI Content Intelligence | Content Repurposing Platform</title>
        <meta name="description" content="Kendrix is an AI-powered content intelligence platform that understands your long-form content deeply and repurposes it into platform-specific, source-grounded posts." />
      </Helmet>

      {/* SECTION 1: Hero */}
      <section className="py-16 md:py-20 lg:py-24 bg-white relative">
        <Container className="flex flex-col items-center text-center max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5 }}>
            <Badge variant="outline" className="mb-6 bg-blue-50 text-blue-700 border-blue-200 px-3 py-1 text-sm font-semibold">
              In Development
            </Badge>
            <p className="text-sm md:text-base font-bold tracking-widest text-[#64748B] uppercase mb-4">
              Kendrix AI Content Intelligence & Repurposing Platform
            </p>
            <h1 
              className="font-extrabold text-[#061B3A] tracking-tight mb-6 leading-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Create once. Understand deeply.<br className="hidden md:block" /> Repurpose everywhere.
            </h1>
            <p className="text-lg md:text-xl text-[#64748B] max-w-3xl mx-auto mb-10 leading-relaxed">
              Kendrix takes long-form original content such as YouTube videos, podcasts, webinars, interviews and uploaded media, analyzes what the content actually says, extracts important ideas and turns those ideas into platform-specific content.
            </p>
            
            <div className="w-full overflow-hidden mb-12">
              <ContentPipeline />
            </div>
            
            <Button size="lg" href="/contact" className="bg-[#2563EB] hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-xl group">
              Contact Us <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* SECTION 2: Key Philosophy */}
      <section className="py-16 md:py-20 bg-[#061B3A] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-[#061B3A] to-[#061B3A]"></div>
        <Container className="relative z-10 flex flex-col items-center text-center">
          <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 
              className="font-bold text-white text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
            >
              Kendrix understands content <br className="hidden md:block" />before generating content.
            </h2>
          </motion.div>
        </Container>
      </section>

      {/* SECTION 3: Problem */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#F6F9FC]">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5 }}>
            <SectionHeading 
              title="Great content often contains more value than one publication captures."
              align="center"
              className="max-w-3xl mx-auto"
            />
            <p className="text-center text-[#64748B] max-w-2xl mx-auto mb-16 text-lg">
              One long-form source contains incredible untapped potential: Ideas, Insights, Quotes, Statistics, Examples, Stories, Hooks, Questions, CTAs, and Short-form opportunities.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
              <Card className="p-8 bg-white border-2 border-blue-100 shadow-md text-center shrink-0 w-64 rounded-2xl relative z-10">
                <FileVideo className="w-16 h-16 text-[#2563EB] mx-auto mb-4" />
                <h3 className="font-bold text-xl text-[#061B3A]">1 Long-Form Source</h3>
                <p className="text-sm text-gray-500 mt-2">Webinar, Video, Podcast</p>
              </Card>
              
              <div className="hidden md:flex flex-col items-center">
                <ArrowRight className="w-10 h-10 text-gray-400" />
              </div>
              <div className="flex md:hidden flex-col items-center">
                <ChevronDown className="w-10 h-10 text-gray-400" />
              </div>

              <StaggerContainer speed="fast" className="grid grid-cols-2 sm:grid-cols-3 gap-4 grow">
                {[
                  { label: "Insights", icon: Lightbulb, color: "text-amber-500", bg: "bg-amber-50" },
                  { label: "Quotes", icon: Quote, color: "text-purple-500", bg: "bg-purple-50" },
                  { label: "Hooks", icon: Target, color: "text-rose-500", bg: "bg-rose-50" },
                  { label: "Stories", icon: FileText, color: "text-blue-500", bg: "bg-blue-50" },
                  { label: "Stats", icon: BarChart, color: "text-emerald-500", bg: "bg-emerald-50" },
                  { label: "Questions", icon: MessageSquare, color: "text-indigo-500", bg: "bg-indigo-50" }
                ].map((item, i) => (
                  <StaggerItem key={i}>
                    <Card className={`p-4 flex flex-col items-center justify-center text-center border shadow-sm rounded-xl ${item.bg}`}>
                      <item.icon className={`w-8 h-8 mb-2 ${item.color}`} />
                      <span className="font-medium text-[#061B3A] text-sm">{item.label}</span>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* SECTION 4: Content Input */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5 }}>
            <SectionHeading title="Content Ingestion" />
            <p className="text-[#64748B] max-w-3xl mb-12 text-lg">
              Start with the content you already create. We support common media formats and have more integrations on the roadmap.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Current */}
              <Card className="p-6 bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-md transition-shadow">
                <Youtube className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="font-bold text-[#061B3A] mb-1">YouTube URL</h3>
                <p className="text-sm text-gray-500">Public or unlisted videos</p>
              </Card>
              <Card className="p-6 bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-md transition-shadow">
                <Upload className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-bold text-[#061B3A] mb-1">Direct Upload</h3>
                <p className="text-sm text-gray-500">MP4, MP3, WAV files</p>
              </Card>

              {/* Future */}
              {[
                { icon: Mic, title: "Podcasts", desc: "RSS Feeds" },
                { icon: MonitorPlay, title: "Webinars", desc: "Zoom, Teams" },
                { icon: Instagram, title: "Social Video", desc: "Instagram, FB" },
                { icon: Cloud, title: "Cloud Storage", desc: "Drive, Dropbox" },
                { icon: FileBox, title: "Documents", desc: "PDF, Word" },
                { icon: FileText, title: "Blogs", desc: "Articles, URLs" },
              ].map((item, i) => (
                <Card key={i} className="p-6 bg-gray-50 border border-dashed border-gray-300 rounded-xl relative overflow-hidden opacity-70">
                  <Badge className="absolute top-4 right-4 bg-gray-200 text-gray-700 hover:bg-gray-300 pointer-events-none text-xs">
                    Coming Soon
                  </Badge>
                  <item.icon className="w-10 h-10 text-gray-400 mb-4" />
                  <h3 className="font-bold text-gray-700 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* SECTION 5: Processing Pipeline */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#F6F9FC]">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5 }}>
            <SectionHeading title="Intelligent Processing Pipeline" align="center" />
            <p className="text-center text-[#64748B] max-w-3xl mx-auto mb-12 text-lg">
              Every piece of content goes through our rigorous, multi-stage background processing architecture. You upload, we go to work.
            </p>

            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <FlowDiagram steps={[
                { title: 'CREATED', description: 'Job queued' },
                { title: 'INGESTING', description: 'Downloading media' },
                { title: 'TRANSCRIBING', description: 'Audio to text' },
                { title: 'ANALYZING', description: 'Extracting intelligence' },
                { title: 'GENERATING', description: 'Creating platform posts' },
                { title: 'VALIDATING', description: 'Quality & relevance checks' },
                { title: 'PERSISTING', description: 'Saving structured data' },
                { title: 'COMPLETED', description: 'Ready for review' },
              ]} />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* SECTION 6: Transcription */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5 }}>
            <SectionHeading title="From Media to Understanding" />
            <p className="text-[#64748B] max-w-3xl mb-8 text-lg">
              We convert your rich media into highly accurate text transcripts.
            </p>
            
            <div className="flex flex-col md:flex-row items-center gap-4 mb-10 overflow-x-auto pb-4">
              <Badge variant="outline" className="px-4 py-2 text-base rounded-full bg-gray-50">Video/Audio</Badge>
              <ArrowRight className="text-gray-400 rotate-90 md:rotate-0" />
              <Badge variant="outline" className="px-4 py-2 text-base rounded-full bg-blue-50 text-blue-700 border-blue-200">Speech-to-Text AI</Badge>
              <ArrowRight className="text-gray-400 rotate-90 md:rotate-0" />
              <Badge variant="outline" className="px-4 py-2 text-base rounded-full bg-green-50 text-green-700 border-green-200">Time-stamped Transcript</Badge>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg max-w-4xl">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                <p className="text-[#061B3A] font-medium text-lg leading-relaxed">
                  The transcript becomes source material, but Kendrix does not immediately begin writing posts. <span className="font-bold text-amber-700">It first analyzes the source.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* SECTION 7: Content Intelligence (MAJOR SECTION) */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#F6F9FC]">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5 }}>
            <SectionHeading title="Content Intelligence Engine" align="center" />
            <p className="text-center text-[#64748B] max-w-3xl mx-auto mb-16 text-lg">
              This is the brain of Kendrix. Before a single social post is drafted, our intelligence engine maps the DNA of your content, extracting its core value.
            </p>

            <div className="mb-16">
              <ContentIntelligenceDashboard />
            </div>

            <StaggerContainer speed="fast" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {[
                { title: "Primary Topic", icon: Target, desc: "The overarching theme" },
                { title: "Subtopics", icon: Layers, desc: "Detailed discussion areas" },
                { title: "Key Insights", icon: Lightbulb, desc: "Valuable takeaways" },
                { title: "Claims", icon: ShieldCheck, desc: "Assertions made" },
                { title: "Quotes", icon: Quote, desc: "Impactful direct statements" },
                { title: "Important Moments", icon: Clock, desc: "High-value timestamps" },
                { title: "Hooks", icon: Zap, desc: "Attention-grabbing concepts" },
                { title: "CTA Opportunities", icon: ArrowRight, desc: "Natural calls to action" },
                { title: "Content Opportunities", icon: Repeat, desc: "Repurposing angles" },
                { title: "Sensitive Signals", icon: AlertTriangle, desc: "Content warnings" }
              ].map((item, idx) => (
                <StaggerItem key={idx}>
                  <Card className="p-5 bg-white border border-gray-100 hover:border-blue-200 transition-colors h-full">
                    <item.icon className="w-6 h-6 text-[#2563EB] mb-3" />
                    <h4 className="font-bold text-[#061B3A] text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </Container>
      </section>

      {/* SECTION 8: Source Grounding */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5 }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Every Output Grounded in Source" />
              <p className="text-[#64748B] mb-6 text-lg">
                Generated content remains connected to what the creator actually said. This fundamentally reduces unsupported or fabricated information (hallucinations) common in generic AI tools.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                  <span className="text-[#061B3A]">Verifiable claims with exact timestamps.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                  <span className="text-[#061B3A]">Maintains factual accuracy of original ideas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                  <span className="text-[#061B3A]">Allows creators to trace AI outputs back to their own words.</span>
                </li>
              </ul>
            </div>
            
            <Card className="p-8 bg-slate-50 border-2 border-slate-200 rounded-2xl">
              <div className="flex flex-col space-y-6">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <Badge variant="outline" className="mb-2 bg-purple-50 text-purple-700">Generated Output</Badge>
                  <p className="font-medium text-[#061B3A]">"AI adoption in enterprise requires cultural shift, not just technical implementation."</p>
                </div>
                
                <div className="flex justify-center -my-2 relative z-10">
                  <div className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Grounded at 14:23
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <Badge variant="outline" className="mb-2 bg-blue-100 text-blue-800">Source Transcript</Badge>
                  <p className="text-sm text-gray-700 italic">"The biggest mistake companies make is buying the software and thinking they're done. If you don't change the culture, the tech doesn't matter."</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* SECTION 9 & 10: Quotes & Hooks */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#061B3A] text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <Quote className="w-8 h-8 text-[#F59E0B]" /> Powerful Quotes, Ready to Use
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Kendrix automatically identifies the most impactful, punchy statements from your long-form content, perfect for image carousels or short text posts.
              </p>
              
              <Card className="bg-slate-800/50 border border-slate-700 p-6 backdrop-blur-sm rounded-xl">
                <Quote className="w-10 h-10 text-slate-600 mb-4 opacity-50" />
                <p className="text-xl font-medium text-white mb-6 leading-relaxed">
                  "Data without a story is just a spreadsheet. Data with a story is a strategy."
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#F59E0B] font-medium">Extract Confidence: 96%</span>
                  <span className="text-slate-400 flex items-center gap-1"><Clock className="w-4 h-4" /> 22:15</span>
                </div>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-[#2563EB]" /> Multiple Hooks from One Idea
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                For every core insight, Kendrix generates multiple hooks designed for different platforms and audience segments.
              </p>
              
              <div className="space-y-4">
                <div className="bg-slate-700/30 p-3 rounded text-sm text-slate-300 mb-4 border-l-2 border-slate-500">
                  <span className="font-bold text-white">Idea:</span> Most marketing teams measure the wrong metrics.
                </div>
                
                <Card className="bg-slate-800/80 border-l-4 border-l-blue-500 border-y-slate-700 border-r-slate-700 p-4">
                  <p className="text-white text-sm font-medium">"Stop celebrating vanity metrics. Here are the 3 numbers that actually prove marketing ROI:"</p>
                </Card>
                <Card className="bg-slate-800/80 border-l-4 border-l-purple-500 border-y-slate-700 border-r-slate-700 p-4">
                  <p className="text-white text-sm font-medium">"I spent 5 years tracking the wrong data. It almost killed my agency. Here's what changed:"</p>
                </Card>
                <Card className="bg-slate-800/80 border-l-4 border-l-emerald-500 border-y-slate-700 border-r-slate-700 p-4">
                  <p className="text-white text-sm font-medium">"Question for CMOs: Are your metrics driving revenue or just ego?"</p>
                </Card>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* SECTION 11: Creator Voice */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5 }}>
            <SectionHeading title="Your Voice. Your Brand." align="center" />
            <p className="text-center text-[#64748B] max-w-2xl mx-auto mb-16 text-lg">
              Generic AI sounds like generic AI. Kendrix uses your Custom Creator Profile to ensure generated content sounds exactly like you.
            </p>

            <div className="max-w-3xl mx-auto">
              <Card className="overflow-hidden border border-gray-200 shadow-md rounded-2xl">
                <div className="bg-[#061B3A] p-6 text-white flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-2xl font-bold">
                    CP
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Creator Profile Settings</h3>
                    <p className="text-blue-200 text-sm">Applied to all generated content</p>
                  </div>
                </div>
                
                <div className="p-6 bg-white grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Tone</h4>
                    <p className="font-medium text-[#061B3A]">Professional but conversational</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Style</h4>
                    <p className="font-medium text-[#061B3A]">Punchy, short paragraphs</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Avoid</h4>
                    <p className="font-medium text-red-600 bg-red-50 px-2 py-1 rounded inline-block">Corporate jargon, hyperbole</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Emoji Usage</h4>
                    <p className="font-medium text-[#061B3A]">Minimal (max 1-2 per post)</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Target Audience</h4>
                    <p className="font-medium text-[#061B3A]">Senior Data Professionals</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">CTA Style</h4>
                    <p className="font-medium text-[#061B3A]">Soft, value-driven</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* SECTION 12: Platform-Specific Generation */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#F6F9FC]">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5 }}>
            <SectionHeading title="Platform-Native Content" />
            
            <div className="bg-blue-600 text-white p-4 rounded-lg mb-10 inline-block font-medium shadow-md">
              IMPORTANT: Kendrix does NOT generate one generic post and copy it across platforms.
            </div>

            <TabSection 
              tabs={[
                {
                  id: 'linkedin',
                  label: 'LinkedIn',
                  icon: Linkedin,
                  content: (
                    <Card className="p-6 md:p-8 bg-white shadow-sm border-t-4 border-t-[#0A66C2]">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-xl font-bold text-[#061B3A]">LinkedIn Architecture</h3>
                        <Badge className="bg-[#0A66C2] hover:bg-[#0A66C2]">Optimized</Badge>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Strong text hook</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Longer professional narrative</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Whitespace formatting</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Actionable takeaway</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Targeted 3-5 hashtags</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-sm font-mono text-gray-600 h-48 overflow-y-auto">
                          Most companies buy AI tools and expect immediate ROI.<br/><br/>
                          They're measuring the wrong thing.<br/><br/>
                          In our latest webinar, we analyzed 50 enterprise deployments. The companies that succeeded didn't focus on software adoption—they focused on culture change.<br/><br/>
                          ...
                        </div>
                      </div>
                    </Card>
                  )
                },
                {
                  id: 'twitter',
                  label: 'X (Twitter)',
                  icon: Twitter,
                  content: (
                    <Card className="p-6 md:p-8 bg-white shadow-sm border-t-4 border-t-black">
                       <div className="flex justify-between items-start mb-6">
                        <h3 className="text-xl font-bold text-[#061B3A]">X (Twitter) Architecture</h3>
                        <Badge className="bg-black hover:bg-gray-800 text-white">Optimized</Badge>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Punchy, concise phrasing</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Thread creation (1/x)</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Provocative hooks</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Minimal hashtags</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-sm font-mono text-gray-600 h-48 overflow-y-auto flex flex-col gap-4">
                          <div className="border-b pb-2">
                            Stop celebrating vanity metrics. Here are the 3 numbers that actually prove marketing ROI 🧵 (1/4)
                          </div>
                          <div className="border-b pb-2">
                            1. Customer Acquisition Cost (CAC) trend over time. Not just the static number. (2/4)
                          </div>
                        </div>
                      </div>
                    </Card>
                  )
                },
                {
                  id: 'instagram',
                  label: 'Instagram',
                  icon: Instagram,
                  content: (
                    <Card className="p-6 md:p-8 bg-white shadow-sm border-t-4 border-t-[#E4405F]">
                       <div className="flex justify-between items-start mb-6">
                        <h3 className="text-xl font-bold text-[#061B3A]">Instagram Architecture</h3>
                        <Badge className="bg-[#E4405F] hover:bg-[#E4405F]">Optimized</Badge>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Carousel concepts</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Visually descriptive captions</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Emoji-friendly formatting</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Extensive hashtag clustering</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-sm font-mono text-gray-600 h-48 overflow-y-auto">
                          [Slide 1 Idea: Bold text "The 3 metrics that matter"]<br/><br/>
                          If you're tracking vanity metrics, you're flying blind ✈️🙈<br/><br/>
                          Swipe to see the only 3 metrics our agency uses to measure true ROI 👉<br/><br/>
                          #marketingroi #growthstrategy #b2bmarketing...
                        </div>
                      </div>
                    </Card>
                  )
                }
              ]} 
            />

            <div className="mt-8 flex items-center justify-center gap-4 text-sm font-medium text-gray-500">
              <span>Roadmap:</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">YouTube Descriptions</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">Newsletter Drafts</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">Short-form Video Scripts</span>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* SECTION 13: Metadata & SECTION 14: Validation */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <SectionHeading title="Structured Metadata" />
              <p className="text-[#64748B] mb-8 text-lg">
                Every generated asset comes with fully structured metadata, ready for search optimization and campaign tracking.
              </p>
              
              <div className="space-y-4">
                <Card className="p-4 border-l-4 border-l-blue-500">
                  <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">Suggested Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Enterprise AI</Badge>
                    <Badge variant="secondary">Change Management</Badge>
                    <Badge variant="secondary">Tech Adoption</Badge>
                  </div>
                </Card>
                <Card className="p-4 border-l-4 border-l-purple-500">
                  <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">Hashtags</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-purple-700 font-medium">#B2BTech #Leadership #AIStrategy</span>
                  </div>
                </Card>
                <Card className="p-4 border-l-4 border-l-green-500">
                  <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">Calls to Action (CTAs)</h4>
                  <p className="text-sm font-medium text-gray-700">"Watch the full 45-min masterclass via link in bio."</p>
                </Card>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <SectionHeading title="Quality Before Publication" />
              <p className="text-[#64748B] mb-8 text-lg">
                Kendrix runs automated validation checks on every piece of generated content to ensure it meets high standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Source Relevance",
                  "Platform Fit",
                  "Creator Voice",
                  "Factual Confidence",
                  "Generic Language Check",
                  "Repetition Check",
                  "Sensitive Content"
                ].map((check, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-sm font-medium text-[#061B3A]">{check}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* SECTION 15: Content Scoring */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#061B3A] text-white">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5 }}>
            <SectionHeading title="Diagnostic Content Signals" align="center" className="text-white" />
            <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12 text-lg">
              Get immediate feedback on content quality before you publish. 
              <br/><span className="text-sm italic text-amber-400">Note: These are diagnostic signals. No score guarantees platform performance.</span>
            </p>

            <Card className="max-w-2xl mx-auto bg-slate-800 border-slate-700 p-6 md:p-8 rounded-2xl">
              <div className="space-y-6">
                {[
                  { label: "Source Relevance", score: 92, color: "bg-green-500" },
                  { label: "Platform Fit", score: 88, color: "bg-blue-500" },
                  { label: "Creator Voice Fit", score: 95, color: "bg-purple-500" },
                  { label: "Clarity", score: 90, color: "bg-cyan-500" },
                  { label: "Originality", score: 85, color: "bg-amber-500" },
                  { label: "Factual Confidence", score: 91, color: "bg-emerald-500" },
                ].map((metric, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-200">{metric.label}</span>
                      <span className="font-bold text-white">{metric.score}/100</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className={`${metric.color} h-2 rounded-full`} style={{ width: `${metric.score}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* SECTION 16: Human Review */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5 }}>
            <SectionHeading title="The Creator Stays in Control" align="center" />
            <p className="text-center text-[#64748B] max-w-3xl mx-auto mb-12 text-lg font-medium">
              AI helps the creator. The creator remains in control.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
              <div className="flex flex-col items-center p-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3 shadow-sm">
                  <BrainCircuit className="w-8 h-8" />
                </div>
                <span className="font-bold text-sm text-[#061B3A]">AI Generates</span>
              </div>
              
              <ArrowRight className="hidden md:block w-6 h-6 text-gray-300" />
              <ChevronDown className="block md:hidden w-6 h-6 text-gray-300" />
              
              <div className="flex flex-col items-center p-4">
                <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-3 shadow-sm">
                  <UserCheck className="w-8 h-8" />
                </div>
                <span className="font-bold text-sm text-[#061B3A]">Creator Reviews</span>
              </div>
              
              <ArrowRight className="hidden md:block w-6 h-6 text-gray-300" />
              <ChevronDown className="block md:hidden w-6 h-6 text-gray-300" />
              
              <div className="flex flex-col items-center p-4">
                <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-3 shadow-sm">
                  <RotateCcw className="w-8 h-8" />
                </div>
                <span className="font-bold text-sm text-[#061B3A]">Edit/Regenerate</span>
              </div>
              
              <ArrowRight className="hidden md:block w-6 h-6 text-gray-300" />
              <ChevronDown className="block md:hidden w-6 h-6 text-gray-300" />

              <div className="flex flex-col items-center p-4">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-3 shadow-sm">
                  <Send className="w-8 h-8" />
                </div>
                <span className="font-bold text-sm text-[#061B3A]">Approve & Publish</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* SECTION 17 & 18: Regeneration & Version Control */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#F6F9FC]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <SectionHeading title="Refine Until Perfect" />
              <p className="text-[#64748B] mb-8 text-lg">
                Not quite right? Use natural language prompts to iterate. Crucially, regeneration retains the deep context of the source transcript.
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                <Card className="p-3 bg-white border border-gray-200 hover:border-blue-300 flex items-center gap-3 cursor-pointer">
                  <MessageSquare className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium">"Make it more direct and punchy."</span>
                </Card>
                <Card className="p-3 bg-white border border-gray-200 hover:border-blue-300 flex items-center gap-3 cursor-pointer">
                  <MessageSquare className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium">"Make it sound more like my usual style."</span>
                </Card>
                <Card className="p-3 bg-white border border-gray-200 hover:border-blue-300 flex items-center gap-3 cursor-pointer">
                  <MessageSquare className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium">"Give me another hook, focus on the ROI stat."</span>
                </Card>
                <Card className="p-3 bg-white border border-gray-200 hover:border-blue-300 flex items-center gap-3 cursor-pointer">
                  <MessageSquare className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium">"Adapt this specifically for senior data analysts."</span>
                </Card>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <SectionHeading title="Track Every Change" />
              <p className="text-[#64748B] mb-8 text-lg">
                Never lose a good draft. Our version control system lets you review, compare, and restore previous iterations.
              </p>
              
              <Card className="p-6 bg-white border border-gray-200">
                <div className="flex items-center gap-4 mb-6 relative">
                  <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-100 z-0"></div>
                  
                  <div className="flex flex-col gap-4 w-full relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs border-2 border-white shadow-sm">v1</div>
                      <span className="text-sm text-gray-500">Initial AI Draft</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs border-2 border-white shadow-sm">v2</div>
                      <span className="text-sm text-gray-500">Prompt: "Make it more direct"</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs border-2 border-white shadow-sm">v3</div>
                      <span className="text-sm text-gray-500">Manual edits by Creator</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xs border-2 border-white shadow-sm"><CheckCircle className="w-4 h-4"/></div>
                      <span className="text-sm font-bold text-green-600">Approved Final</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="w-full text-xs"><History className="w-3 h-3 mr-1"/> Compare</Button>
                  <Button variant="outline" size="sm" className="w-full text-xs"><RotateCcw className="w-3 h-3 mr-1"/> Restore v2</Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* SECTION 19: Use Cases */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5 }}>
            <SectionHeading title="Built for Content Professionals" align="center" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { icon: Youtube, title: "Content Creators", desc: "Turn long videos into weeks of social posts." },
                { icon: Briefcase, title: "Coaches & Consultants", desc: "Repurpose masterclasses and client Q&As." },
                { icon: Mic, title: "Podcasters", desc: "Generate show notes, threads, and promo clips." },
                { icon: Network, title: "Marketing Agencies", desc: "Scale client content production efficiently." },
                { icon: Building, title: "Businesses", desc: "Maximize ROI from webinars and events." },
                { icon: GraduationCap, title: "Educational Inst.", desc: "Convert lectures into bite-sized learning." },
                { icon: Newspaper, title: "News & Media", desc: "Quickly distribute interview highlights." },
                { icon: Users, title: "Internal Comms", desc: "Summarize All-Hands meetings for the team." },
              ].map((item, idx) => (
                <Card key={idx} className="p-6 bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                  <item.icon className="w-8 h-8 text-[#2563EB] mb-4" />
                  <h3 className="font-bold text-[#061B3A] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* SECTION 20: Benefits */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#F6F9FC]">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5 }}>
            <SectionHeading title="Why Kendrix" align="center" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                { title: "Time Savings", desc: "Turn hours of manual clipping and drafting into minutes of review." },
                { title: "More Value", desc: "Extract 10x more usable assets from the content you already produced." },
                { title: "Consistent Voice", desc: "Stop sounding like a robot. Maintain your unique brand personality." },
                { title: "Platform Adaptation", desc: "Native formatting and strategies for LinkedIn, X, and Instagram." },
                { title: "Source Grounding", desc: "Eliminate AI hallucinations. Every post ties back to actual quotes." },
                { title: "Intelligent Analysis", desc: "We don't just summarize; we find the hooks and themes that perform." }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#061B3A] text-lg mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* SECTION 21: Why Not Just Use a General Chatbot? */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5 }}>
            <SectionHeading title="Beyond Generic AI" align="center" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
              <Card className="p-8 border-2 border-gray-200 bg-gray-50">
                <h3 className="text-xl font-bold text-gray-500 mb-6 flex items-center justify-center gap-2">
                  General LLM Chatbot
                </h3>
                <div className="flex flex-col items-center justify-center space-y-4 text-center opacity-70">
                  <div className="p-4 bg-white border border-gray-300 rounded-lg w-full">Manual Prompt</div>
                  <ArrowDown className="text-gray-400" />
                  <div className="p-4 bg-white border border-gray-300 rounded-lg w-full">Generic Response</div>
                </div>
                <p className="mt-8 text-sm text-gray-500 text-center">
                  Requires constant prompt engineering, loses context, hallucinates, and sounds generic.
                </p>
              </Card>

              <Card className="p-8 border-2 border-[#2563EB] bg-blue-50/50 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#2563EB] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Purpose Built
                </div>
                <h3 className="text-xl font-bold text-[#061B3A] mb-6 flex items-center justify-center gap-2">
                  Kendrix Platform
                </h3>
                <div className="flex flex-col items-center justify-center space-y-2 text-center text-sm font-medium text-blue-900">
                  <div className="px-4 py-2 bg-white border border-blue-200 rounded w-full">Source Ingestion & Transcription</div>
                  <ArrowDown className="w-4 h-4 text-blue-400" />
                  <div className="px-4 py-2 bg-blue-100 border border-blue-300 rounded w-full">Deep Intelligence Extraction</div>
                  <ArrowDown className="w-4 h-4 text-blue-400" />
                  <div className="px-4 py-2 bg-white border border-blue-200 rounded w-full">Creator Voice Application</div>
                  <ArrowDown className="w-4 h-4 text-blue-400" />
                  <div className="px-4 py-2 bg-blue-100 border border-blue-300 rounded w-full">Platform-Specific Agents</div>
                  <ArrowDown className="w-4 h-4 text-blue-400" />
                  <div className="px-4 py-2 bg-white border border-blue-200 rounded w-full">Validation & Scoring</div>
                  <ArrowDown className="w-4 h-4 text-blue-400" />
                  <div className="px-4 py-2 bg-blue-600 text-white border border-blue-700 rounded w-full shadow-sm">Ready to Review & Publish</div>
                </div>
              </Card>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* SECTION 22: Long-term Architecture */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#F6F9FC]">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5 }}>
            <SectionHeading title="Designed for Growth" align="center" />
            <p className="text-center text-[#64748B] max-w-3xl mx-auto mb-12 text-lg">
              Our architecture is built to evolve. We are continuously adding new input sources, intelligence modules, and platform integrations.
            </p>

            <div className="max-w-5xl mx-auto overflow-x-auto pb-8">
              <div className="min-w-[700px] flex justify-between items-center bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <div className="text-center">
                  <div className="bg-blue-100 p-4 rounded-full mb-2 inline-block"><FileVideo className="w-6 h-6 text-blue-600"/></div>
                  <div className="text-xs font-bold">INPUTS</div>
                </div>
                <ArrowRight className="text-gray-300" />
                <div className="text-center">
                  <div className="bg-purple-100 p-4 rounded-xl mb-2 inline-block border-2 border-purple-300"><BrainCircuit className="w-8 h-8 text-purple-600"/></div>
                  <div className="text-xs font-bold">INTELLIGENCE</div>
                </div>
                <ArrowRight className="text-gray-300" />
                <div className="text-center">
                  <div className="bg-green-100 p-4 rounded-xl mb-2 inline-block"><Layers className="w-6 h-6 text-green-600"/></div>
                  <div className="text-xs font-bold">AGENTS</div>
                </div>
                <ArrowRight className="text-gray-300" />
                <div className="text-center">
                  <div className="bg-amber-100 p-4 rounded-full mb-2 inline-block"><UserCheck className="w-6 h-6 text-amber-600"/></div>
                  <div className="text-xs font-bold">REVIEW</div>
                </div>
                <ArrowRight className="text-gray-300" />
                <div className="text-center">
                  <div className="bg-gray-100 p-4 rounded-full mb-2 inline-block"><LineChart className="w-6 h-6 text-gray-600"/></div>
                  <div className="text-xs font-bold">ANALYTICS</div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* SECTION 23: Final Message */}
      <section className="py-20 md:py-32 bg-[#061B3A] text-white text-center">
        <Container>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Create once. Understand deeply.<br className="hidden md:block" /> Repurpose everywhere.
            </h2>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-12 font-light">
              Kendrix transforms long-form content into source-grounded, creator-specific and platform-optimized content.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-24 bg-blue-600 text-white text-center">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Interested in Content Intelligence?</h2>
            <Button size="lg" href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl">
              Contact Us
            </Button>
          </motion.div>
        </Container>
      </section>
    </main>
  );
};


