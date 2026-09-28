import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Building2, Shield, Briefcase, UserCheck, Users, User, Settings, 
  MessageSquare, Smartphone, Clock, Globe, CheckCircle, 
  ChevronDown, ChevronUp, Bell, Calendar as CalendarIcon, 
  BarChart3, TrendingUp, PieChart, Info
} from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

// Import visualization components
import { SchedulingDashboard } from '@/components/visualizations/SchedulingDashboard';
import { BookingEngineDiagram } from '@/components/visualizations/BookingEngineDiagram';
import { FlowDiagram, FlowStep } from '@/components/sections/FlowDiagram';

// Motion
import { Reveal } from '@/components/motion/Reveal';
import { StaggerContainer, StaggerItem } from '@/components/motion/StaggerContainer';
import { scaleIn, transition, viewport } from '@/config/motion';

export default function SchedulingProjectPage() {
  const [showFullWorkflow, setShowFullWorkflow] = useState(false);

  const workflowStepsFull: FlowStep[] = [
    { title: "Business Signup", description: "Business registers on Kendrix platform." },
    { title: "Email Verification", description: "Secure onboarding process." },
    { title: "Business Account", description: "Workspace created." },
    { title: "Owner Login", description: "Access platform." },
    { title: "Onboarding", description: "Guided setup." },
    { title: "Configure Services", description: "Define service catalog and durations." },
    { title: "Configure Staff", description: "Add service providers." },
    { title: "Configure Resources", description: "Add required equipment." },
    { title: "Configure Business Hours", description: "Set availability rules." },
    { title: "Configure Booking Rules", description: "Define concurrency and limits." },
    { title: "Customer Booking", description: "Customer books via WhatsApp, Web, or Walk-in." },
    { title: "Staff/Resource Assignment", description: "Engine finds available slots." },
    { title: "Queue", description: "Customer enters the live queue." },
    { title: "ETA/Delay Tracking", description: "System calculates accurate waiting times." },
    { title: "Service", description: "Customer is served." },
    { title: "Completion", description: "Service marked as complete." },
    { title: "Notification", description: "Post-service alerts." },
    { title: "Analytics", description: "Data logged for reporting." }
  ];

  const workflowSteps = showFullWorkflow ? workflowStepsFull : workflowStepsFull.slice(0, 8);

  const whatsappSteps: FlowStep[] = [
    { title: "Customer", description: "Initiates chat on Kendrix central number", icon: User },
    { title: "Kendrix Central WhatsApp", description: "Automated chatbot responds", icon: MessageSquare },
    { title: "Identify Business", description: "Customer provides business token/QR", icon: Building2 },
    { title: "Select Service & Date", description: "Customer chooses their needs", icon: CalendarIcon },
    { title: "Booking Confirmation", description: "Slot reserved instantly", icon: CheckCircle },
    { title: "Business Dashboard", description: "Appears in live queue", icon: BarChart3 }
  ];

  return (
    <>
      <Helmet>
        <title>Kendrix Scheduling Software | Appointment & Queue Management</title>
        <meta name="description" content="Kendrix Scheduling Software is a SaaS platform for appointment-based and queue-based service businesses." />
      </Helmet>

      <main className="w-full overflow-x-hidden">
        
        {/* SECTION 1: HERO */}
        <section className="py-16 md:py-20 lg:py-24 bg-white relative">
          <Container>
            <div className="flex flex-col items-center text-center mb-12">
              <Badge variant="outline" className="mb-4 text-[#F59E0B] border-[#F59E0B]">In Development</Badge>
              <h2 className="text-sm md:text-base font-bold text-[#2563EB] uppercase tracking-wider mb-2">
                Kendrix Scheduling Software
              </h2>
              <h1 
                className="font-extrabold text-[#061B3A] mb-6 leading-tight max-w-4xl"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
              >
                Scheduling, Queue and Customer Operations — One System.
              </h1>
              <p className="text-lg md:text-xl text-[#64748B] max-w-3xl mb-8">
                Kendrix Scheduling Software is a SaaS platform for appointment-based and queue-based service businesses. It manages bookings, appointments, walk-ins, live queue, staff, resources, customers, WhatsApp communication, notifications, analytics, reports, billing and business settings.
              </p>
              <Button size="lg" href="/contact" className="bg-[#2563EB] hover:bg-blue-700 text-white px-8">
                Contact Us
              </Button>
            </div>
            
            <div className="w-full max-w-5xl mx-auto">
              <SchedulingDashboard />
            </div>
          </Container>
        </section>

        {/* SECTION 2: ARCHITECTURE OVERVIEW */}
        <section className="py-16 md:py-20 lg:py-24 bg-[#F6F9FC]">
          <Container>
            <Reveal>
              <SectionHeading align="center" overline="Architecture">
                <span style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}>The Platform Core</span>
              </SectionHeading>
              <p className="text-center text-[#64748B] max-w-3xl mx-auto mb-12">
                A unified architecture bridging business operations with customer interactions.
              </p>
            </Reveal>
            <StaggerContainer className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <StaggerItem className="flex-1 space-y-2">
                <div className="font-bold text-[#061B3A]">Business Operations</div>
                <div className="text-sm text-gray-500">Staff, Resources, Services</div>
              </StaggerItem>
              <StaggerItem className="hidden md:block text-[#2563EB]">→</StaggerItem>
              <StaggerItem className="flex-1 space-y-2 border-y md:border-y-0 md:border-x border-gray-200 py-4 md:py-0 md:px-6">
                <div className="font-bold text-[#2563EB] text-xl">Kendrix Engine</div>
                <div className="text-sm text-gray-500">Booking • Queue • Logic</div>
              </StaggerItem>
              <StaggerItem className="hidden md:block text-[#2563EB]">→</StaggerItem>
              <StaggerItem className="flex-1 space-y-2">
                <div className="font-bold text-[#061B3A]">Customer Channels</div>
                <div className="text-sm text-gray-500">WhatsApp, Web, QR</div>
              </StaggerItem>
            </StaggerContainer>
          </Container>
        </section>

        {/* SECTION 3: WHO USES KENDRIX */}
        <section className="py-16 md:py-20 lg:py-24 bg-white">
          <Container>
            <Reveal>
              <SectionHeading align="center">
                <span style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}>Built for Everyone in the Business</span>
              </SectionHeading>
            </Reveal>
            
            <StaggerContainer className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { icon: Building2, title: "Business Owner", desc: "Full control & oversight" },
                { icon: Shield, title: "Admin", desc: "System configuration" },
                { icon: Briefcase, title: "Manager", desc: "Daily operations" },
                { icon: UserCheck, title: "Receptionist", desc: "Front desk & queue" },
                { icon: Users, title: "Staff", desc: "Service delivery" },
                { icon: User, title: "Customer", desc: "Booking & tracking" },
                { icon: Settings, title: "Platform Admin", desc: "Global management" }
              ].map((persona, i) => (
                <StaggerItem key={i}>
                  <Card hoverable className="p-5 h-full border-gray-100 flex flex-col items-center text-center">
                    <persona.icon className="w-8 h-8 text-[#2563EB] mb-3" />
                    <h3 className="font-semibold text-[#061B3A] mb-1" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)' }}>
                      {persona.title}
                    </h3>
                    <p className="text-sm text-[#64748B]">{persona.desc}</p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* SECTION 4: BUSINESS WORKFLOW */}
        <section className="py-16 md:py-20 lg:py-24 bg-[#F6F9FC]">
          <Container>
            <Reveal>
              <SectionHeading align="center">
                <span style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}>Complete Business Workflow</span>
              </SectionHeading>
              <p className="text-center text-[#64748B] max-w-2xl mx-auto mb-4">
                From onboarding to analytics, a seamless journey for the business.
              </p>
            </Reveal>
            
            <Reveal>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-4xl mx-auto mt-8">
                <FlowDiagram steps={workflowSteps} />
                
                <div className="mt-6 flex justify-center border-t border-gray-100 pt-6">
                  <Button 
                    variant="outline" 
                    onClick={() => setShowFullWorkflow(!showFullWorkflow)}
                    className="flex items-center gap-2"
                  >
                    {showFullWorkflow ? (
                      <>Hide Full Workflow <ChevronUp className="w-4 h-4" /></>
                    ) : (
                      <>Show Full Workflow <ChevronDown className="w-4 h-4" /></>
                    )}
                  </Button>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* SECTION 5: MULTI-CHANNEL BOOKING */}
        <section className="py-16 md:py-20 lg:py-24 bg-white">
          <Container>
            <Reveal>
              <SectionHeading align="center">
                <span style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}>One Booking Engine. Every Channel.</span>
              </SectionHeading>
              <p className="text-center text-[#64748B] max-w-3xl mx-auto mb-12">
                Whether a customer walks in, visits your website, or texts on WhatsApp, all requests flow into a single, intelligent scheduling engine that prevents conflicts.
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <BookingEngineDiagram />
            </Reveal>
          </Container>
        </section>

        {/* SECTION 6: CENTRAL WHATSAPP MODEL */}
        <section className="py-16 md:py-20 lg:py-24 bg-[#F6F9FC]">
          <Container>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <Reveal dir="left" className="lg:w-1/2">
                <h2 className="font-bold text-[#061B3A] mb-4" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}>
                  WhatsApp-First Booking
                </h2>
                <p className="text-lg text-[#64748B] mb-6">
                  A business doesn't need its own dedicated WhatsApp Business number. Kendrix provides a central WhatsApp booking bot. Customers just scan a business-specific QR code or enter a short token to connect directly with that business's booking flow.
                </p>
                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <MessageSquare className="text-green-600 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#061B3A]">Scan to Book</h4>
                      <p className="text-sm text-[#64748B]">Instantly routes customer to right context.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal dir="right" className="lg:w-1/2 w-full bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <FlowDiagram steps={whatsappSteps} />
              </Reveal>
            </div>
          </Container>
        </section>

        {/* SECTION 7: BUSINESS LANDING PAGE */}
        <section className="py-16 md:py-20 lg:py-24 bg-white">
          <Container>
            <Reveal>
              <SectionHeading align="center">
                <span style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}>Every Business Gets a Booking Page</span>
              </SectionHeading>
            </Reveal>
            
            <motion.div 
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewport.once}
              transition={transition.normal}
              className="max-w-3xl mx-auto mt-12 bg-gray-50 rounded-t-xl border border-gray-200 shadow-xl overflow-hidden"
            >
              {/* Browser Header Mock */}
              <div className="bg-gray-200 px-4 py-3 flex items-center gap-2 border-b border-gray-300">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-500 font-mono ml-4 flex-1">
                  kendrix.com/business/example-clinic
                </div>
              </div>
              
              {/* Page Content Mock */}
              <div className="bg-white p-6 md:p-10">
                <div className="flex flex-col md:flex-row gap-8 justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Example Clinic</h3>
                    <p className="text-gray-500 text-sm mb-6 max-w-md">Professional dental services with state-of-the-art facilities. Book your appointment online.</p>
                    
                    <div className="space-y-4">
                      <div className="border-l-2 border-blue-500 pl-4">
                        <div className="font-semibold text-gray-900">General Consultation</div>
                        <div className="text-sm text-gray-500">30 mins • ₹500</div>
                      </div>
                      <div className="border-l-2 border-blue-500 pl-4">
                        <div className="font-semibold text-gray-900">Teeth Cleaning</div>
                        <div className="text-sm text-gray-500">45 mins • ₹1200</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 min-w-[250px] flex flex-col justify-center">
                    <h4 className="font-semibold mb-4 text-center">Book an Appointment</h4>
                    <Button className="w-full mb-3 bg-[#2563EB]">Book Online</Button>
                    <Button variant="outline" className="w-full text-green-600 border-green-200 hover:bg-green-50">
                      <MessageSquare className="w-4 h-4 mr-2" /> Book on WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* SECTION 8: SCHEDULING ENGINE */}
        <section className="py-16 md:py-20 lg:py-24 bg-[#F6F9FC]">
          <Container>
            <Reveal>
              <div className="text-center mb-12">
                <h2 className="font-bold text-[#061B3A] mb-4" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}>
                  Intelligent Scheduling Engine
                </h2>
                <p className="text-lg text-[#64748B] max-w-3xl mx-auto">
                  More than just a calendar. The engine evaluates complex multidimensional constraints before allowing a booking.
                </p>
              </div>
            </Reveal>
            
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-10 max-w-5xl mx-auto">
              {['Business Hours', 'Service Duration', 'Cool-down Time', 'Existing Bookings', 'Slot Locks', 'Staff Availability', 'Resources', 'Capacity', 'Business Rules', 'Customer Constraints'].map((factor, i) => (
                <StaggerItem key={i} className="bg-white px-3 py-4 rounded border border-gray-200 text-center text-sm font-medium text-gray-700 shadow-sm">
                  {factor}
                </StaggerItem>
              ))}
            </StaggerContainer>
            
            <StaggerContainer className="flex flex-wrap justify-center gap-4 mt-8">
              <StaggerItem><Badge className="bg-green-100 text-green-800 border border-green-200 px-4 py-2 text-sm">AVAILABLE</Badge></StaggerItem>
              <StaggerItem><Badge className="bg-blue-100 text-blue-800 border border-blue-200 px-4 py-2 text-sm">ALTERNATIVE SLOT</Badge></StaggerItem>
              <StaggerItem><Badge className="bg-orange-100 text-orange-800 border border-orange-200 px-4 py-2 text-sm">WAITLIST</Badge></StaggerItem>
              <StaggerItem><Badge className="bg-red-100 text-red-800 border border-red-200 px-4 py-2 text-sm">REJECT</Badge></StaggerItem>
            </StaggerContainer>
          </Container>
        </section>

        {/* SECTION 9: STAFF & RESOURCES */}
        <section className="py-16 md:py-20 lg:py-24 bg-white">
          <Container>
            <Reveal>
              <SectionHeading align="center">
                <span style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}>Staff and Resources</span>
              </SectionHeading>
            </Reveal>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
              <Reveal dir="left">
                <Card className="p-8 border-t-4 border-t-blue-500">
                  <Users className="w-10 h-10 text-blue-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Staff</h3>
                  <p className="text-gray-500 mb-4">The person performing the service.</p>
                  <div className="flex flex-wrap gap-2">
                    {['Barber', 'Doctor', 'Trainer', 'Therapist', 'Stylist', 'Consultant'].map(s => (
                      <Badge key={s} variant="outline">{s}</Badge>
                    ))}
                  </div>
                </Card>
              </Reveal>
              
              <Reveal dir="right">
                <Card className="p-8 border-t-4 border-t-orange-500">
                  <Building2 className="w-10 h-10 text-orange-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Resources</h3>
                  <p className="text-gray-500 mb-4">The physical asset required.</p>
                  <div className="flex flex-wrap gap-2">
                    {['Chair', 'Room', 'Bed', 'Machine', 'Station', 'Equipment'].map(r => (
                      <Badge key={r} variant="outline">{r}</Badge>
                    ))}
                  </div>
                </Card>
              </Reveal>
            </div>
            
            <Reveal delay={0.4}>
              <div className="max-w-2xl mx-auto mt-8 bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-center justify-center gap-4 text-center">
                <Info className="text-blue-500 w-5 h-5 flex-shrink-0" />
                <span className="font-medium text-blue-900 text-sm md:text-base">Example: Dental Cleaning requires Doctor (Staff) + Dental Chair (Resource). Both must be free.</span>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* SECTION 10: LIVE QUEUE */}
        <section className="py-16 md:py-20 lg:py-24 bg-[#F6F9FC]">
          <Container>
            <Reveal>
              <SectionHeading align="center">
                <span style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}>Live Queue Management</span>
              </SectionHeading>
            </Reveal>
            
            <Reveal delay={0.1}>
              <div className="my-10 max-w-5xl mx-auto bg-white p-6 rounded-xl border border-gray-200 overflow-x-auto shadow-sm">
                <div className="flex items-center gap-2 min-w-[700px]">
                  <Badge className="bg-gray-100 text-gray-800">BOOKED</Badge> <span className="text-gray-300">→</span>
                  <Badge className="bg-blue-100 text-blue-800">ARRIVED</Badge> <span className="text-gray-300">→</span>
                  <Badge className="bg-orange-100 text-orange-800">WAITING</Badge> <span className="text-gray-300">→</span>
                  <Badge className="bg-green-100 text-green-800">IN_SERVICE</Badge> <span className="text-gray-300">→</span>
                  <Badge className="bg-purple-100 text-purple-800">COMPLETED</Badge>
                </div>
              </div>
            </Reveal>
            
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
              {['Now Serving', 'Up Next', 'Waiting', 'ETA', 'Delay', 'Priority', 'Reorder', 'Pause', 'No-show', 'Cancel', 'Complete'].map(action => (
                <StaggerItem key={action} className="bg-white border border-gray-200 py-3 rounded-lg text-sm font-semibold text-gray-700 shadow-sm">
                  {action}
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* SECTION 11: ETA & DELAY INTELLIGENCE */}
        <section className="py-16 md:py-20 lg:py-24 bg-white">
          <Container>
            <Reveal>
              <SectionHeading align="center">
                <span style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}>Timing Intelligence</span>
              </SectionHeading>
              <p className="text-center text-[#64748B] max-w-2xl mx-auto mb-10">
                Real-time calculation of ETAs and delays based on actual service progression.
              </p>
            </Reveal>
            
            <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <StaggerItem>
                <Card className="p-6 bg-blue-50 border-blue-100 h-full">
                  <Clock className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-bold text-[#061B3A] mb-2">Service Expected</h4>
                  <p className="text-sm text-gray-600">Calculated from standard service duration and queue position.</p>
                </Card>
              </StaggerItem>
              <StaggerItem>
                <Card className="p-6 bg-orange-50 border-orange-100 h-full">
                  <TrendingUp className="w-8 h-8 text-orange-600 mb-3" />
                  <h4 className="font-bold text-[#061B3A] mb-2">Historical Delay</h4>
                  <p className="text-sm text-gray-600">Adjustments based on average overruns for specific services or staff.</p>
                </Card>
              </StaggerItem>
              <StaggerItem>
                <Card className="p-6 bg-green-50 border-green-100 h-full">
                  <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-bold text-[#061B3A] mb-2">Live Adjustments</h4>
                  <p className="text-sm text-gray-600">Instantly recalculates ETA for everyone when a service completes early or late.</p>
                </Card>
              </StaggerItem>
            </StaggerContainer>
          </Container>
        </section>

        {/* SECTION 12: NOTIFICATIONS */}
        <section className="py-16 md:py-20 lg:py-24 bg-[#F6F9FC]">
          <Container>
            <Reveal>
              <SectionHeading align="center">
                <span style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}>Automated Communications</span>
              </SectionHeading>
            </Reveal>
            
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
              {[
                { t: "Booking Confirmation", d: "Sent immediately upon success" },
                { t: "Reminder", d: "24h and 1h before appointment" },
                { t: "ETA Update", d: "Live waiting time alerts" },
                { t: "Delay Alert", d: "If queue falls behind schedule" },
                { t: "Reschedule", d: "New slot confirmation" },
                { t: "Cancellation", d: "Slot released confirmation" },
                { t: "Service Starting", d: "Next in line alert" },
                { t: "Service Completed", d: "Thank you & review request" },
                { t: "Custom Messages", d: "Business specific broadcasts" }
              ].map((notif, i) => (
                <StaggerItem key={i} className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="bg-orange-100 p-2 rounded-full h-fit">
                    <Bell className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#061B3A]">{notif.t}</h4>
                    <p className="text-xs text-gray-500 mt-1">{notif.d}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* SECTION 13: ANALYTICS */}
        <section className="py-16 md:py-20 lg:py-24 bg-white">
          <Container>
            <Reveal>
              <SectionHeading align="center">
                <span style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}>Business Intelligence</span>
              </SectionHeading>
            </Reveal>
            
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto mt-10">
              {['Revenue', 'Bookings', 'Customer Trends', 'Popular Services', 'Peak Hours', 'Queue Performance', 'Delay Analysis', 'Staff Efficiency', 'Forecasting', 'Recommendations'].map((stat, i) => (
                <StaggerItem key={i}>
                  <Card className="p-4 text-center border-gray-200 shadow-sm h-full">
                    <PieChart className="w-6 h-6 mx-auto mb-2 text-[#2563EB]" />
                    <div className="text-sm font-semibold text-gray-700">{stat}</div>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* SECTION 14: TECH ARCHITECTURE */}
        <section className="py-16 md:py-20 lg:py-24 bg-[#F6F9FC]">
          <Container>
            <Reveal>
              <SectionHeading align="center">
                <span style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}>Built for Scale</span>
              </SectionHeading>
            </Reveal>
            
            <Reveal>
              <motion.div 
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewport.once}
                className="max-w-4xl mx-auto mt-10"
              >
                <div className="bg-gray-800 p-8 rounded-xl text-white shadow-xl">
                  <div className="text-center mb-6 text-gray-400 font-mono text-sm uppercase tracking-widest border-b border-gray-700 pb-2">Client / Interfaces</div>
                  <div className="flex justify-center gap-4 mb-10">
                    <Badge className="bg-gray-700 border-gray-600 text-white">Kendrix Dashboard (React)</Badge>
                    <Badge className="bg-gray-700 border-gray-600 text-white">WhatsApp API</Badge>
                    <Badge className="bg-gray-700 border-gray-600 text-white">Booking Widget</Badge>
                  </div>
                  
                  <div className="text-center mb-6 text-gray-400 font-mono text-sm uppercase tracking-widest border-b border-gray-700 pb-2">API Layer</div>
                  <div className="flex justify-center mb-10">
                    <div className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold w-full max-w-md text-center">
                      Flask REST API
                    </div>
                  </div>
                  
                  <div className="text-center mb-6 text-gray-400 font-mono text-sm uppercase tracking-widest border-b border-gray-700 pb-2">Service Layer (Micro-services pattern)</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
                    {['Rules Service', 'Queue Service', 'Capacity Service', 'Availability', 'Assignment Engine', 'Feasibility', 'ETA Service', 'Notifications', 'Analytics', 'Billing'].map(s => (
                      <div key={s} className="bg-gray-700 text-xs text-center p-2 rounded border border-gray-600">
                        {s}
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center mb-6 text-gray-400 font-mono text-sm uppercase tracking-widest border-b border-gray-700 pb-2">Data Layer</div>
                  <div className="flex justify-center">
                    <div className="bg-blue-800 text-white px-8 py-3 rounded-lg font-bold w-full max-w-md text-center">
                      PostgreSQL Database
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </Container>
        </section>

        {/* SECTION 15: CORE PRINCIPLE */}
        <section className="py-20 md:py-28 bg-[#061B3A] text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            {/* Simple pattern background */}
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <Container className="relative z-10 text-center">
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewport.once}
              transition={transition.reveal}
            >
              <h2 className="font-extrabold mb-8" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                One Booking Engine.<br />Every Interface.
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-16">
                WhatsApp, website, QR, and dashboard are just interfaces into the same central scheduling system. Total sync. Zero conflicts.
              </p>
              
              <div className="flex flex-col items-center max-w-2xl mx-auto">
                <div className="bg-blue-600 p-6 rounded-2xl border-4 border-blue-400 mb-8 shadow-2xl shadow-blue-900/50">
                  <h3 className="text-2xl font-bold">KENDRIX BOOKING ENGINE</h3>
                </div>
                
                <div className="flex gap-4 mb-4">
                  <div className="w-1 h-12 bg-blue-400 rounded-full"></div>
                  <div className="w-1 h-12 bg-blue-400 rounded-full"></div>
                  <div className="w-1 h-12 bg-blue-400 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 md:gap-8 w-full">
                  <div className="bg-[#0f2a55] p-4 rounded-xl text-center border border-blue-800">
                    <Smartphone className="w-8 h-8 mx-auto mb-2 text-blue-300" />
                    <div className="font-semibold text-sm">WhatsApp</div>
                  </div>
                  <div className="bg-[#0f2a55] p-4 rounded-xl text-center border border-blue-800">
                    <Globe className="w-8 h-8 mx-auto mb-2 text-blue-300" />
                    <div className="font-semibold text-sm">Website</div>
                  </div>
                  <div className="bg-[#0f2a55] p-4 rounded-xl text-center border border-blue-800">
                    <BarChart3 className="w-8 h-8 mx-auto mb-2 text-blue-300" />
                    <div className="font-semibold text-sm">Dashboard</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-white text-center">
          <Container>
            <h2 className="font-bold text-[#061B3A] mb-6" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
              Interested in Kendrix Scheduling?
            </h2>
            <p className="text-lg text-[#64748B] mb-8 max-w-2xl mx-auto">
              Join the businesses upgrading their appointment and queue operations.
            </p>
            <Button size="lg" href="/contact" className="bg-[#2563EB] hover:bg-blue-700 text-white px-10 py-3 text-lg rounded-full">
              Contact Us
            </Button>
          </Container>
        </section>

      </main>
    </>
  );
}
