import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Multi-Cloud Infrastructure Platform',
      description:
        'Designed and implemented a unified infrastructure platform spanning AWS and Azure using Terraform, enabling seamless multi-cloud deployments with automated failover and disaster recovery.',
      tech: ['Terraform', 'AWS', 'Azure', 'Kubernetes', 'ArgoCD'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'CI/CD Pipeline Modernization',
      description:
        'Rebuilt legacy Jenkins pipelines into GitHub Actions workflows, reducing deployment time by 60% and improving developer experience with automated testing and rollback capabilities.',
      tech: ['GitHub Actions', 'Docker', 'Kubernetes', 'Helm', 'SonarQube'],
      github: 'https://github.com',
      demo: null,
    },
    {
      title: 'Kubernetes Cluster Automation',
      description:
        'Automated Kubernetes cluster provisioning and management using GitOps principles. Implemented self-healing infrastructure with monitoring, logging, and alerting stack fully automated.',
      tech: ['Kubernetes', 'ArgoCD', 'Prometheus', 'Grafana', 'Terraform'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Container Security Pipeline',
      description:
        'Built automated security scanning pipeline for container images, integrating Trivy and Falco to detect vulnerabilities and runtime threats, reducing security incidents by 80%.',
      tech: ['Docker', 'Trivy', 'Falco', 'GitHub Actions', 'Python'],
      github: 'https://github.com',
      demo: null,
    },
    {
      title: 'Infrastructure Monitoring System',
      description:
        'Deployed comprehensive monitoring solution across 50+ microservices, providing real-time metrics, logs, and traces. Custom dashboards reduced MTTR by 40%.',
      tech: ['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger', 'Ansible'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-white/20 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#151515] p-8 rounded border border-white/5 hover:border-white/20 transition-all duration-300 hover:translate-y-[-4px] group"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Github size={18} />
                  <span className="text-sm font-medium">Code</span>
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
