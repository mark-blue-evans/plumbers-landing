import Link from 'next/link'
import Image from 'next/image'
import { 
  Wrench, 
  Droplets, 
  Flame, 
  Hammer, 
  Toilet, 
  Bath, 
  Briefcase, 
  CheckCircle, 
  Star,
  Phone,
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-plumber-blue rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">QuickFix</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-plumber-blue transition">Services</a>
              <a href="#about" className="text-gray-600 hover:text-plumber-blue transition">About</a>
              <a href="#testimonials" className="text-gray-600 hover:text-plumber-blue transition">Reviews</a>
              <a href="#contact" className="bg-plumber-blue text-white px-5 py-2 rounded-lg hover:bg-plumber-dark transition">
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-plumber-accent/10 text-plumber-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Available 24/7 Emergency Service
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Professional <span className="text-plumber-blue">Plumbing</span> Services When You Need It
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Licensed, insured, and experienced plumbers ready to handle all your plumbing needs. Fast response times and upfront pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center justify-center bg-plumber-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-plumber-dark transition shadow-lg shadow-blue-500/25">
                  Schedule Service
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="tel:+1234567890" className="inline-flex items-center justify-center border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-plumber-blue hover:text-plumber-blue transition">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
              <div className="flex items-center mt-8 space-x-6">
                <div className="flex items-center">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-plumber-accent fill-plumber-accent" />
                  ))}
                  <span className="ml-2 text-gray-600 font-medium">500+ Reviews</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Licensed & Insured
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-plumber.jpg"
                  alt="Professional plumber"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive plumbing services for residential and commercial properties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Droplets, title: 'Drain Cleaning', desc: 'Professional drain cleaning to keep your pipes flowing smoothly.' },
              { icon: Flame, title: 'Water Heaters', desc: 'Installation, repair, and maintenance of all water heater types.' },
              { icon: Hammer, title: 'Pipe Repair', desc: 'Expert pipe repair and replacement services.' },
              { icon: Toilet, title: 'Toilet Services', desc: 'Toilet installation, repair, and clog removal.' },
              { icon: Bath, title: 'Leak Detection', desc: 'Advanced leak detection to prevent water damage.' },
              { icon: Briefcase, title: 'Commercial Plumbing', desc: 'Full-service plumbing for businesses and properties.' },
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {service.image && (
                  <div className="relative h-48 w-full">
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                  </div>
                )}
                <div className="p-8">
                  <service.icon size={40} className="text-plumber-blue mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose QuickFix?</h2>
              <div className="space-y-6">
                {[
                  { title: 'Licensed & Insured', desc: 'Fully licensed plumbers with comprehensive insurance coverage.' },
                  { title: 'Upfront Pricing', desc: 'No hidden fees. Get a clear quote before work begins.' },
                  { title: '24/7 Emergency', desc: 'Round-the-clock service for plumbing emergencies.' },
                  { title: 'Guaranteed Work', desc: 'All work backed by our satisfaction guarantee.' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-plumber-blue/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-plumber-blue" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '15+', label: 'Years Experience' },
                  { number: '10K+', label: 'Jobs Completed' },
                  { number: '500+', label: '5-Star Reviews' },
                  { number: '99%', label: 'Satisfaction Rate' },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                    <div className="text-4xl font-bold text-plumber-blue mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', text: 'QuickFix saved the day when our water heater failed. They arrived within an hour and had hot water running again. Highly recommend!', rating: 5 },
              { name: 'John D.', text: 'Professional, clean, and fair pricing. The plumber explained everything and fixed the problem right the first time.', rating: 5 },
              { name: 'Mike R.', text: 'Excellent service for our commercial property. Always reliable and professional. Our go-to plumbers for years.', rating: 5 },
            ].map((review, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-plumber-accent fill-plumber-accent" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{review.text}"</p>
                <p className="font-semibold text-gray-900">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-plumber-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100">Contact us today for fast, reliable plumbing services.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a href="tel:+1234567890" className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={32} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Call Us</h3>
              <p className="text-blue-100">(234) 567-890</p>
            </a>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={32} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Visit Us</h3>
              <p className="text-blue-100">123 Main Street<br />Your City, ST 12345</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-white" />
              </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Hours</h3>
              <p className="text-blue-100">Mon-Fri: 8AM-6PM<br />24/7 Emergency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-plumber-blue rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <span className="text-white font-bold">QuickFix Plumbing</span>
            </div>
            <p className="text-gray-400 text-sm">© 2026 QuickFix Plumbing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
