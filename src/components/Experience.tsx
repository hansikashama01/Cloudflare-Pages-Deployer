import { GitBranch, TestTube, Rocket, Activity } from 'lucide-react';

const Experience = () => {
  const workflow = [
    {
      icon: GitBranch,
      phase: 'Build',
      title: 'Version Control & Build',
      description:
        'Code versioning, branch management, automated builds, and artifact generation',
      tools: ['Git', 'GitHub', 'Docker Build', 'Maven/Gradle'],
    },
    {
      icon: TestTube,
      phase: 'Test',
      title: 'Automated Testing',
      description:
        'Unit tests, integration tests, security scans, and quality gates',
      tools: ['Jest', 'Pytest', 'SonarQube', 'Trivy'],
    },
    {
      icon: Rocket,
      phase: 'Deploy',
      title: 'Continuous Deployment',
      description:
        'Automated deployments, blue-green strategies, canary releases, rollback mechanisms',
      tools: ['Kubernetes', 'ArgoCD', 'Helm', 'Terraform'],
    },
    {
      icon: Activity,
      phase: 'Monitor',
      title: 'Observability & Monitoring',
      description:
        'Real-time metrics, log aggregation, distributed tracing, alerting',
      tools: ['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger'],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            DevOps Lifecycle
          </h2>
          <div className="w-20 h-1 bg-white/20 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            End-to-end automation across the software development lifecycle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflow.map((phase, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a] p-6 rounded border border-white/5 hover:border-white/20 transition-all duration-300 group relative"
            >
              {index < workflow.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-white/10"></div>
              )}

              <div className="mb-6">
                <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors duration-300">
                  <phase.icon className="text-gray-400 group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {phase.phase}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">
                {phase.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {phase.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {phase.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="text-xs px-2 py-1 bg-white/5 text-gray-500 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#0a0a0a] p-8 rounded border border-white/5">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Professional Experience
          </h3>
          <div className="space-y-8">
            <div className="border-l-2 border-white/10 pl-6">
              <div className="mb-2">
                <span className="text-sm text-gray-500">2021 - Present</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Senior DevOps Engineer
              </h4>
              <p className="text-gray-400 mb-3">Tech Solutions Inc.</p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Led infrastructure modernization reducing cloud costs by 35%</li>
                <li>• Implemented GitOps workflows improving deployment frequency by 10x</li>
                <li>• Mentored team of 5 junior engineers on DevOps best practices</li>
              </ul>
            </div>

            <div className="border-l-2 border-white/10 pl-6">
              <div className="mb-2">
                <span className="text-sm text-gray-500">2019 - 2021</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">
                DevOps Engineer
              </h4>
              <p className="text-gray-400 mb-3">Cloud Innovations Ltd.</p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Built CI/CD pipelines serving 30+ microservices</li>
                <li>• Automated infrastructure provisioning using Terraform</li>
                <li>• Reduced deployment time from hours to minutes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
