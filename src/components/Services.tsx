import { Bot, LineChart, Cog, Lightbulb, Database, Shield } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Strategy Consulting',
    description: 'Develop comprehensive AI roadmaps tailored to your business objectives and industry challenges.',
  },
  {
    icon: LineChart,
    title: 'Machine Learning Solutions',
    description: 'Build and deploy custom ML models to automate decision-making and predict business outcomes.',
  },
  {
    icon: Cog,
    title: 'Process Automation',
    description: 'Streamline operations with intelligent automation that reduces costs and increases efficiency.',
  },
  {
    icon: Lightbulb,
    title: 'AI Product Development',
    description: 'Transform your ideas into AI-powered products that deliver exceptional user experiences.',
  },
  {
    icon: Database,
    title: 'Data Analytics & Insights',
    description: 'Extract actionable insights from your data using advanced analytics and AI-driven intelligence.',
  },
  {
    icon: Shield,
    title: 'AI Governance & Ethics',
    description: 'Implement responsible AI practices with robust governance frameworks and ethical guidelines.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to elevate your business to the next level
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
