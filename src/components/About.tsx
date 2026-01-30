import { CheckCircle, Users, Award, Rocket } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Industry-leading AI specialists with decades of combined experience',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'Successfully delivered 100+ AI projects across diverse industries',
  },
  {
    icon: Rocket,
    title: 'Cutting-Edge Technology',
    description: 'Leverage the latest AI frameworks and methodologies',
  },
];

const benefits = [
  'ROI-focused solutions that deliver measurable business value',
  'End-to-end support from strategy to implementation',
  'Scalable architectures that grow with your business',
  'Transparent communication and collaborative approach',
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Choose Us
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We're not just consultants—we're your strategic partners in AI transformation.
              Our mission is to demystify artificial intelligence and make it accessible,
              practical, and profitable for businesses of all sizes.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
