import { Calendar, Clock, User, Phone, Mail, MessageSquare, ArrowLeft, Check, Heart } from 'lucide-react';
import { useState } from 'react';

interface AppointmentBookingProps {
  onNavigateHome?: () => void;
}

export default function AppointmentBooking({ onNavigateHome }: AppointmentBookingProps = {}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    doctor: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment booking:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/90 border-b border-gray-100 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between h-24">
            <button onClick={onNavigateHome} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5 text-gray-700" />
              <span className="text-base font-medium text-gray-700">Back to Home</span>
            </button>
            <a href="tel:555-123-4567" className="flex items-center gap-2 text-base font-medium text-gray-700 hover:text-navy-900">
              <Phone className="w-5 h-5" />
              <span>(555) 123-4567</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column - Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-5xl font-bold text-navy-900 mb-4">Book Your Appointment</h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Schedule a visit with our expert healthcare team. We'll get back to you within 24 hours to confirm your appointment.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-6 pt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 mb-1">Same-Day Appointments</h3>
                    <p className="text-gray-600">Book today and see a doctor as early as today</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 mb-1">Expert Physicians</h3>
                    <p className="text-gray-600">50+ board-certified specialists ready to help</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 mb-1">Insurance Accepted</h3>
                    <p className="text-gray-600">We accept most major insurance plans</p>
                  </div>
                </div>
              </div>

              {/* Contact Alternative */}
              <div className="bg-navy-900 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Prefer to Call?</h3>
                <p className="text-gray-300 mb-6">Our team is available Monday-Friday, 7am-8pm</p>
                <a
                  href="tel:555-123-4567"
                  className="inline-flex items-center gap-3 bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold transition-all"
                >
                  <Phone className="w-5 h-5" />
                  (555) 123-4567
                </a>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-10">
                <div className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h2 className="text-2xl font-bold text-navy-900 mb-6">Personal Information</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                          placeholder="Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                          placeholder="john.doe@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div className="pt-8 border-t border-gray-200">
                    <h2 className="text-2xl font-bold text-navy-900 mb-6">Appointment Details</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-2">
                          Preferred Time *
                        </label>
                        <select
                          id="time"
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select a time</option>
                          <option value="8:00 AM">8:00 AM</option>
                          <option value="9:00 AM">9:00 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="1:00 PM">1:00 PM</option>
                          <option value="2:00 PM">2:00 PM</option>
                          <option value="3:00 PM">3:00 PM</option>
                          <option value="4:00 PM">4:00 PM</option>
                          <option value="5:00 PM">5:00 PM</option>
                          <option value="6:00 PM">6:00 PM</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                          Service Type *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select a service</option>
                          <option value="Primary Care">Primary Care</option>
                          <option value="Urgent Care">Urgent Care</option>
                          <option value="Preventive Medicine">Preventive Medicine</option>
                          <option value="Chronic Care Management">Chronic Care Management</option>
                          <option value="Mental Health">Mental Health</option>
                          <option value="Pediatrics">Pediatrics</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="doctor" className="block text-sm font-semibold text-gray-700 mb-2">
                          Preferred Doctor (Optional)
                        </label>
                        <select
                          id="doctor"
                          name="doctor"
                          value={formData.doctor}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        >
                          <option value="">No preference</option>
                          <option value="Dr. Michael Chen">Dr. Michael Chen - Internal Medicine</option>
                          <option value="Dr. Sarah Williams">Dr. Sarah Williams - Family Medicine</option>
                          <option value="Dr. James Rodriguez">Dr. James Rodriguez - Pediatrics</option>
                          <option value="Dr. Emily Thompson">Dr. Emily Thompson - Mental Health</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="pt-8 border-t border-gray-200">
                    <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                      placeholder="Please share any specific concerns or questions you'd like to discuss..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-8">
                    <button
                      type="submit"
                      className="w-full bg-teal-500 hover:bg-teal-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-3"
                    >
                      <Calendar className="w-6 h-6" />
                      Book Appointment
                    </button>
                    <p className="text-center text-sm text-gray-600 mt-4">
                      By booking, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
