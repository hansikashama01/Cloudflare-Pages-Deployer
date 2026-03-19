import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alex.rivera@example.com',
      href: 'mailto:alex.rivera@example.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/alexrivera',
      href: 'https://github.com/alexrivera',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/alexrivera',
      href: 'https://linkedin.com/in/alexrivera',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-white/20 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Open to new opportunities and collaborations. Let's build something great together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactLinks.map((contact, index) => (
            <div
              key={index}
              className="bg-[#151515] p-6 rounded border border-white/5 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center flex-shrink-0">
                  <contact.icon className="text-gray-400" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    {contact.label}
                  </h3>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-white hover:text-gray-300 transition-colors duration-200 break-all"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-white">{contact.value}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#151515] p-8 rounded border border-white/5 text-center">
          <p className="text-gray-400 mb-6">
            Interested in working together? Send me an email or connect on LinkedIn.
          </p>
          <a
            href="mailto:alex.rivera@example.com"
            className="inline-block px-8 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-all duration-200 hover:scale-105"
          >
            Send Message
          </a>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; 2024 Alex Rivera. Built with React and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
