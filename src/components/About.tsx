import { Server, Cog, Zap } from 'lucide-react';

const About = () => {
  const principles = [
    {
      icon: Server,
      title: 'Infrastructure as Code',
      description: 'Building scalable, reproducible infrastructure through automation',
    },
    {
      icon: Cog,
      title: 'CI/CD Excellence',
      description: 'Streamlining deployment pipelines for rapid, reliable releases',
    },
    {
      icon: Zap,
      title: 'Performance & Reliability',
      description: 'Optimizing systems for high availability and resilience',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About
          </h2>
          <div className="w-20 h-1 bg-white/20 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-300 leading-relaxed text-center">
            DevOps engineer focused on building resilient cloud infrastructure and
            optimizing deployment workflows. I bridge the gap between development and
            operations, ensuring systems are scalable, secure, and maintainable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-[#151515] p-8 rounded border border-white/5 hover:border-white/20 transition-all duration-300 hover:translate-y-[-4px] group"
            >
              <div className="mb-6">
                <principle.icon className="text-gray-400 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {principle.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
