import { Phone, Calendar, Star, Clock, Shield, Heart, Activity, Brain, Baby, Stethoscope, Users, Zap, MapPin, ChevronDown, Target, Award, Lightbulb } from 'lucide-react';
import { useState } from 'react';
import AppointmentBooking from './pages/AppointmentBooking';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'booking'>('home');

  if (currentPage === 'booking') {
    return <AppointmentBooking onNavigateHome={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Transparent Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/90 border-b border-gray-100 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold text-navy-900">HealthCare+</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              <a href="#services" className="text-base font-medium text-gray-700 hover:text-navy-900 transition-colors">Services</a>
              <a href="#doctors" className="text-base font-medium text-gray-700 hover:text-navy-900 transition-colors">Doctors</a>
              <a href="#about" className="text-base font-medium text-gray-700 hover:text-navy-900 transition-colors">About</a>
              <a href="#contact" className="text-base font-medium text-gray-700 hover:text-navy-900 transition-colors">Contact</a>
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-5">
              <a href="tel:555-123-4567" className="hidden sm:flex items-center gap-2 text-base font-medium text-gray-700 hover:text-navy-900">
                <Phone className="w-5 h-5" />
                <span>(555) 123-4567</span>
              </a>
              <button onClick={() => setCurrentPage('booking')} className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all hover:shadow-xl hover:scale-105">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full font-medium">
                <Star className="w-4 h-4 fill-teal-500 text-teal-500" />
                <span>Rated 4.9/5 by 2,500+ patients</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold text-navy-900 leading-[1.1] tracking-tight">
                Premium Healthcare Made Simple
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
                Experience compassionate, comprehensive care from expert physicians who put your health and wellbeing first.
              </p>
              <div className="flex flex-wrap gap-5 pt-4">
                <button onClick={() => setCurrentPage('booking')} className="bg-teal-500 hover:bg-teal-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  Book Appointment
                </button>
                <button className="border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all hover:shadow-xl">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Image with Floating Cards */}
            <div className="relative">
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl ring-1 ring-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1758691461935-202e2ef6b69f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBkb2N0b3IlMjBjb25zdWx0YXRpb24lMjBtZWRpY2FsJTIwY2xpbmljfGVufDF8fHx8MTc4MDgxNjExM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Doctor consultation"
                  className="w-full h-[550px] object-cover"
                />
              </div>

              {/* Floating Trust Cards - Refined */}
              <div className="absolute -bottom-10 -left-10 right-10 space-y-5">
                {/* Rating Card - Larger and more prominent */}
                <div className="backdrop-blur-2xl bg-white/95 rounded-3xl p-8 shadow-2xl border border-white/40 inline-block">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-6 h-6 fill-teal-500 text-teal-500" />
                      ))}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-navy-900">4.9</span>
                      <span className="text-lg text-gray-600 font-medium">/ 5.0</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 font-medium">Based on 2,500+ reviews</p>
                </div>

                {/* Feature Cards - Enhanced */}
                <div className="flex gap-5 flex-wrap">
                  <div className="backdrop-blur-2xl bg-gradient-to-br from-white/95 to-white/90 rounded-2xl px-7 py-5 shadow-2xl border border-white/40">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 bg-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-navy-900 font-bold text-base">Same-Day Available</div>
                        <div className="text-gray-600 text-sm">Book today, see doctor today</div>
                      </div>
                    </div>
                  </div>
                  <div className="backdrop-blur-2xl bg-gradient-to-br from-white/95 to-white/90 rounded-2xl px-7 py-5 shadow-2xl border border-white/40">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 bg-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-navy-900 font-bold text-base">All Insurance Accepted</div>
                        <div className="text-gray-600 text-sm">100+ plans supported</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-teal-500 mb-2">15,000+</div>
              <div className="text-gray-600 text-lg">Patients Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-teal-500 mb-2">20+</div>
              <div className="text-gray-600 text-lg">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-teal-500 mb-2">98%</div>
              <div className="text-gray-600 text-lg">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-teal-500 mb-2">25+</div>
              <div className="text-gray-600 text-lg">Services Offered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              Comprehensive Healthcare Services
            </h2>
            <p className="text-xl text-gray-600">
              From preventive care to specialized treatment, we offer a full range of medical services tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Stethoscope, title: 'Primary Care', desc: 'Complete health management for your entire family' },
              { icon: Activity, title: 'Urgent Care', desc: 'Walk-in treatment for non-life-threatening conditions' },
              { icon: Heart, title: 'Preventive Medicine', desc: 'Proactive health screenings and wellness programs' },
              { icon: Users, title: 'Chronic Care Management', desc: 'Ongoing support for long-term health conditions' },
              { icon: Brain, title: 'Mental Health', desc: 'Compassionate mental health and counseling services' },
              { icon: Baby, title: 'Pediatrics', desc: 'Expert care for infants, children, and adolescents' },
            ].map((service, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl flex items-center justify-center mb-8 group-hover:from-teal-500 group-hover:to-teal-600 transition-all duration-300 shadow-md group-hover:shadow-xl">
                  <service.icon className="w-10 h-10 text-teal-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 tracking-tight">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base">{service.desc}</p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className="text-teal-500 font-semibold group-hover:text-teal-600 transition-colors inline-flex items-center gap-2">
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              We combine medical excellence with genuine care to deliver an exceptional healthcare experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVhbSUyMG1lZGljYWwlMjBwcm9mZXNzaW9uYWxzJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzgwODE2MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Expert medical team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-navy-900 mb-4">Expert Medical Team</h3>
                <p className="text-gray-600 text-lg mb-4">
                  Board-certified physicians with decades of combined experience providing world-class care.
                </p>
                <div className="text-3xl font-bold text-teal-500">50+ Specialists</div>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1666886573590-5815157da865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxoZWFsdGhjYXJlJTIwdGVhbSUyMG1lZGljYWwlMjBwcm9mZXNzaW9uYWxzJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzgwODE2MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Advanced technology"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-navy-900 mb-4">Advanced Technology</h3>
                <p className="text-gray-600 text-lg mb-4">
                  State-of-the-art medical equipment and digital health tools for accurate diagnosis and treatment.
                </p>
                <div className="text-3xl font-bold text-teal-500">Latest Equipment</div>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1758691462878-6edc3d3da1be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxwcm9mZXNzaW9uYWwlMjBkb2N0b3IlMjBjb25zdWx0YXRpb24lMjBtZWRpY2FsJTIwY2xpbmljfGVufDF8fHx8MTc4MDgxNjExM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Patient-centered care"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-navy-900 mb-4">Patient-Centered Care</h3>
                <p className="text-gray-600 text-lg mb-4">
                  We listen to your concerns and create personalized treatment plans that fit your lifestyle.
                </p>
                <div className="text-3xl font-bold text-teal-500">98% Satisfaction</div>
              </div>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1776886099265-6366478b341b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxtb2Rlcm4lMjBjbGluaWMlMjBpbnRlcmlvciUyMHdhaXRpbmclMjByb29tfGVufDF8fHx8MTc4MDgxNjExNHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Convenient locations"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-navy-900 mb-4">Convenient Locations</h3>
                <p className="text-gray-600 text-lg mb-4">
                  Multiple clinic locations with extended hours, telehealth options, and easy appointment scheduling.
                </p>
                <div className="text-3xl font-bold text-teal-500">5 Locations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Left - Story */}
            <div>
              <div className="inline-block bg-teal-50 text-teal-700 px-4 py-2 rounded-full font-medium mb-6">
                Our Story
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6 leading-tight">
                About HealthCare+
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Founded in 2004, HealthCare+ was built on a simple belief: everyone deserves access to exceptional, compassionate healthcare. What started as a single clinic has grown into a trusted network of healthcare professionals dedicated to serving our community.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Today, we serve over 15,000 patients across five locations, offering comprehensive care that combines medical expertise with genuine compassion. Our team of 50+ specialists works together to provide coordinated, patient-centered care that addresses your unique health needs.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-teal-600 mb-1">20+</div>
                  <div className="text-gray-700 font-medium">Years Serving</div>
                </div>
                <div className="bg-gradient-to-br from-navy-50 to-navy-100 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-navy-600 mb-1">15K+</div>
                  <div className="text-gray-700 font-medium">Happy Patients</div>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-teal-600 mb-1">50+</div>
                  <div className="text-gray-700 font-medium">Medical Experts</div>
                </div>
                <div className="bg-gradient-to-br from-navy-50 to-navy-100 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-navy-600 mb-1">98%</div>
                  <div className="text-gray-700 font-medium">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right - Team Photo */}
            <div className="relative">
              <div className="rounded-[32px] overflow-hidden shadow-2xl ring-1 ring-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVhbSUyMG1lZGljYWwlMjBwcm9mZXNzaW9uYWxzJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzgwODE2MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="HealthCare+ Team"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 backdrop-blur-2xl bg-white/95 rounded-3xl p-8 shadow-2xl border border-white/40">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center">
                    <Award className="w-9 h-9 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy-900">Award Winning</div>
                    <div className="text-gray-600">Healthcare Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid lg:grid-cols-3 gap-8 mb-24">
            {/* Mission */}
            <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-10 text-white">
              <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To provide exceptional, accessible healthcare that empowers individuals and families to live their healthiest lives through compassionate care and medical excellence.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-10">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-teal-500" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted healthcare partner in our community, setting the standard for patient-centered care and clinical innovation.
              </p>
            </div>

            {/* Values */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-10 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-2">
                  <span className="text-white font-bold">•</span>
                  <span>Compassion in every interaction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white font-bold">•</span>
                  <span>Excellence in medical care</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white font-bold">•</span>
                  <span>Integrity and transparency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white font-bold">•</span>
                  <span>Innovation in healthcare</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Healthcare Team Photo Grid */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-navy-900 mb-4">Our Healthcare Team</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse team of board-certified physicians, specialists, and healthcare professionals working together to provide you with exceptional care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1516841273335-e39b37888115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxoZWFsdGhjYXJlJTIwdGVhbSUyMG1lZGljYWwlMjBwcm9mZXNzaW9uYWxzJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzgwODE2MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Healthcare team collaboration"
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1666886573531-48d2e3c2b684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxoZWFsdGhjYXJlJTIwdGVhbSUyMG1lZGljYWwlMjBwcm9mZXNzaW9uYWxzJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzgwODE2MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Doctor with patient"
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxoZWFsdGhjYXJlJTIwdGVhbSUyMG1lZGljYWwlMjBwcm9mZXNzaW9uYWxzJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzgwODE2MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Medical team in surgery"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Doctor Section */}
      <section id="doctors" className="py-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              Meet Our Physicians
            </h2>
            <p className="text-xl text-gray-600">
              Experienced, compassionate doctors dedicated to your health and wellbeing.
            </p>
          </div>

          {/* Featured Doctor */}
          <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl overflow-hidden shadow-2xl mb-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="h-full">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwb3J0cmFpdCUyMG1lZGljYWwlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzgwODE2MTE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dr. Michael Chen"
                  className="w-full h-full min-h-[500px] object-cover"
                />
              </div>
              <div className="p-12 text-white">
                <h3 className="text-4xl font-bold mb-4 text-[#000000]">Dr. Michael Chen</h3>
                <div className="inline-block bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Chief Medical Officer
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-sm text-[#090909]">Internal Medicine</span>
                  <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-sm text-[#000000]">Cardiology</span>
                  <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-sm text-[#000000]">20+ Years</span>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">Dr. Chen is a board-certified internist with over two decades of experience in patient care. He specializes in preventive medicine and chronic disease management, helping patients achieve optimal health through personalized treatment plans.</p>
                <p className="text-gray-400 mb-8">
                  Harvard Medical School • Johns Hopkins Residency
                </p>
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-xl font-medium transition-colors">
                  View Full Profile
                </button>
              </div>
            </div>
          </div>

          {/* Supporting Doctors */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sarah Williams',
                title: 'Family Medicine',
                image: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxkb2N0b3IlMjBwb3J0cmFpdCUyMG1lZGljYWwlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzgwODE2MTE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
              },
              {
                name: 'Dr. James Rodriguez',
                title: 'Pediatrics',
                image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkb2N0b3IlMjBwb3J0cmFpdCUyMG1lZGljYWwlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzgwODE2MTE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
              },
              {
                name: 'Dr. Emily Thompson',
                title: 'Mental Health',
                image: 'https://images.unsplash.com/photo-1643297654416-05795d62e39c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8ZG9jdG9yJTIwcG9ydHJhaXQlMjBtZWRpY2FsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc4MDgxNjExNHww&ixlib=rb-4.1.0&q=80&w=1080',
              },
            ].map((doctor, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-80 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-navy-900 mb-2">{doctor.name}</h4>
                  <p className="text-teal-500 font-medium mb-4">{doctor.title}</p>
                  <button className="text-navy-900 font-medium hover:text-teal-500 transition-colors">
                    View Profile →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Journey Timeline */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              Your Healthcare Journey
            </h2>
            <p className="text-xl text-gray-600">
              A simple, streamlined process designed to get you the care you need quickly and efficiently.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-teal-200 -translate-y-1/2" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {[
                { number: 1, icon: Calendar, title: 'Consultation', desc: 'Schedule your visit online or by phone at your convenience' },
                { number: 2, icon: Stethoscope, title: 'Diagnosis', desc: 'Comprehensive evaluation using advanced diagnostic tools' },
                { number: 3, icon: Heart, title: 'Treatment', desc: 'Personalized care plan tailored to your specific needs' },
                { number: 4, icon: Zap, title: 'Recovery', desc: 'Ongoing support and follow-up to ensure optimal outcomes' },
              ].map((step, i) => (
                <div key={i} className="relative bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="w-16 h-16 bg-teal-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                    {step.number}
                  </div>
                  <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-teal-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from the people we're honored to serve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Jennifer Martinez',
                role: 'Patient since 2020',
                text: 'The care I received was exceptional. Dr. Chen took the time to listen to my concerns and created a treatment plan that actually worked. I finally feel like I have a healthcare partner who genuinely cares.',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150',
                rating: 5,
              },
              {
                name: 'Robert Johnson',
                role: 'Patient since 2019',
                text: 'From booking my appointment to following up after treatment, every step was seamless. The staff is professional, friendly, and truly invested in patient wellbeing. Highly recommend!',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150',
                rating: 5,
              },
              {
                name: 'Maria Garcia',
                role: 'Patient since 2021',
                text: 'As someone who has anxiety about medical visits, the team made me feel comfortable and respected. They explained everything clearly and never rushed through my appointments.',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150',
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
                {/* Rating with Stars */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className={`w-5 h-5 ${star <= testimonial.rating ? 'fill-teal-500 text-teal-500' : 'fill-gray-200 text-gray-200'}`} />
                    ))}
                  </div>
                  <span className="text-lg font-bold text-navy-900">{testimonial.rating}.0</span>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-lg mb-8 leading-relaxed font-light">"{testimonial.text}"</p>

                {/* Patient Info with Photo */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-teal-100"
                  />
                  <div>
                    <div className="font-bold text-navy-900 text-lg">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              We Accept Most Insurance Plans
            </h2>
            <p className="text-xl text-gray-600">
              Working with major insurance providers to make quality healthcare accessible.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-8">
            {['Aetna', 'Blue Cross', 'Cigna', 'UnitedHealth', 'Medicare', 'Medicaid', 'Humana', 'Kaiser'].map((insurer, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-center h-24">
                <span className="text-xl font-semibold text-gray-700">{insurer}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="text-teal-500 font-medium hover:text-teal-600 transition-colors text-lg">
              View All Accepted Plans →
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-[900px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How do I schedule an appointment?',
                a: 'You can schedule an appointment online through our booking system, call our office at (555) 123-4567, or use our mobile app. We offer same-day appointments for urgent needs.',
              },
              {
                q: 'Do you accept walk-in patients?',
                a: 'Yes, our urgent care services accept walk-in patients during regular business hours. For primary care visits, we recommend scheduling an appointment to minimize wait times.',
              },
              {
                q: 'What should I bring to my first appointment?',
                a: 'Please bring a valid ID, your insurance card, a list of current medications, and any relevant medical records. Arriving 15 minutes early helps us serve you better.',
              },
              {
                q: 'Do you offer telehealth appointments?',
                a: 'Yes, we offer virtual consultations for many types of appointments. During booking, you can select whether you prefer an in-person or telehealth visit.',
              },
              {
                q: 'What are your hours of operation?',
                a: 'Our clinics are open Monday-Friday 7am-8pm, Saturday 8am-6pm, and Sunday 9am-5pm. We also offer 24/7 nurse consultation through our patient portal.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-xl font-semibold text-navy-900 pr-8">{faq.q}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-teal-500 flex-shrink-0 transition-transform ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 text-lg leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl" />
        </div>

        <div className="max-w-[1200px] mx-auto px-8 lg:px-16 relative">
          <div className="text-center mb-12">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 text-teal-400 px-5 py-2 rounded-full font-medium mb-8">
              <Star className="w-4 h-4 fill-teal-400" />
              <span>Trusted by 15,000+ patients</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight">
              Ready to Experience<br />Better Healthcare?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Join thousands of satisfied patients who trust us with their health. Our expert team is ready to provide the exceptional care you deserve.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
              <button onClick={() => setCurrentPage('booking')} className="bg-teal-500 hover:bg-teal-400 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center gap-3 shadow-xl">
                <Calendar className="w-7 h-7" />
                Book Your Appointment
              </button>
              <button className="border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-12 py-6 rounded-2xl font-bold text-xl transition-all inline-flex items-center gap-3">
                <Phone className="w-6 h-6" />
                (555) 123-4567
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-3 gap-8 pt-12 border-t border-white/10">
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-teal-400" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white text-lg">Same-Day Appointments</div>
                  <div className="text-gray-400 text-sm">Book today, see us today</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-teal-400" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white text-lg">All Insurance Accepted</div>
                  <div className="text-gray-400 text-sm">100+ plans supported</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-teal-400" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white text-lg">Expert Physicians</div>
                  <div className="text-gray-400 text-sm">50+ specialists available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer id="contact" className="bg-navy-900 text-white pt-16 pb-8 border-t border-navy-800">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Clinic Info */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-semibold">HealthCare+</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Providing exceptional healthcare services with compassion and expertise since 2004.
              </p>
              <div className="flex gap-4">
                {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors"
                    aria-label={social}
                  >
                    <span className="text-xs">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['Services', 'Our Doctors', 'About Us', 'Contact', 'Careers', 'Blog'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinic Hours */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Clinic Hours</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>7am - 8pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>8am - 6pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>9am - 5pm</span>
                </li>
                <li className="pt-3 border-t border-navy-800">
                  <span className="text-teal-500 font-medium">24/7 Nurse Line Available</span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                  <span>123 Medical Center Drive<br />Healthcare City, HC 12345</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="w-5 h-5 text-teal-500 flex-shrink-0" />
                  <a href="tel:555-123-4567" className="hover:text-teal-500 transition-colors">
                    (555) 123-4567
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <div>
                    <div className="text-red-500 font-medium">Emergency:</div>
                    <a href="tel:911" className="hover:text-teal-500 transition-colors">
                      Call 911
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 HealthCare+. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">HIPAA Notice</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
