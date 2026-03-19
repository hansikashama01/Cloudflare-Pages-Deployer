const Skills = () => {
  const skillCategories = [
    {
      category: 'Containerization & Orchestration',
      skills: ['Docker', 'Kubernetes', 'Helm', 'Docker Compose'],
    },
    {
      category: 'Cloud Platforms',
      skills: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean'],
    },
    {
      category: 'Infrastructure as Code',
      skills: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi'],
    },
    {
      category: 'CI/CD & Automation',
      skills: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'ArgoCD'],
    },
    {
      category: 'Monitoring & Logging',
      skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog'],
    },
    {
      category: 'Programming & Scripting',
      skills: ['Python', 'Bash', 'Go', 'JavaScript'],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Tech Stack
          </h2>
          <div className="w-20 h-1 bg-white/20 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a] p-6 rounded border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-4 pb-3 border-b border-white/10">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-white/5 text-gray-300 text-sm rounded border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
