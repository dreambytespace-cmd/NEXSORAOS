// PrivacyPolicyPage.jsx
import React from 'react';
import LegalNavbar from './LegalNavbar';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background text-primary font-sans selection:bg-teal-300/30">
      {/* Grid Background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, black 35%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, black 35%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <LegalNavbar activePage="privacy" />
      <div className="relative z-10 mx-auto max-w-4xl px-5 pb-5 pt-24 sm:px-8 sm:pb-8 sm:pt-28">
        <main>
          {/* Header */}
          <div className="mb-10 sm:mb-14">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-400/10 border border-cyan-400/20 mb-4">
              Privacy Policy
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary mt-3 mb-5 leading-tight">
              How we handle your information
            </h1>
            <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-2xl">
              This Privacy Policy explains what we collect, why we collect it, and
              the choices you have when using Nexora OS and its related services.
            </p>
          </div>

          {/* Meta Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-12 sm:mb-16">
            {[
              { label: 'Last Updated', value: 'July 30, 2026' },
              { label: 'Effective Date', value: 'July 30, 2026' },
              { label: 'Applies To', value: 'Website, waitlist, and creator tools' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-glass border border-border rounded-xl p-5 backdrop-blur-sm hover:border-teal-300/20 transition-colors"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-secondary mb-1.5">
                  {item.label}
                </div>
                <div className="text-sm font-medium text-primary">{item.value}</div>
              </div>
            ))}
          </div>

          {/* Table of Contents */}
          <div className="bg-glass border border-border rounded-2xl p-5 sm:p-7 mb-12 sm:mb-16 backdrop-blur-md">
            <div className="text-sm font-semibold uppercase tracking-wider text-secondary mb-4">On this page</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {[
                '1. Information We Collect',
                '2. How We Use Information',
                '3. How We Share Information',
                '4. Cookies and Analytics',
                '5. Data Retention and Security',
                '6. Your Choices',
                '7. Children\'s Privacy',
                '8. Contact Us',
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={`#p${idx + 1}`}
                  className="block text-sm text-secondary no-underline py-1.5 hover:text-teal-300 hover:translate-x-1 transition-all"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-0">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 py-8 border-b border-border last:border-b-0"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10 text-cyan-400 font-bold text-sm flex-shrink-0 border border-cyan-400/20">
                    {index + 1}
                  </span>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">{section.title}</h2>
                    {section.content}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-16 sm:mt-24 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-sm text-secondary">© 2026 Nexora OS. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <a href="/" className="text-sm text-secondary no-underline hover:text-primary transition-colors">Home</a>
              <a href="/terms-and-conditions" className="text-sm text-secondary no-underline hover:text-primary transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

// Section data
const sections = [
  {
    id: 'p1',
    title: 'Information We Collect',
    content: (
      <>
      <p className="text-secondary leading-relaxed mb-3">
          We may collect information you provide directly, such as your name,
          email address, social profile details, creator preferences, and any
          messages you send through forms or support requests.
        </p>
        <p className="text-secondary leading-relaxed">
          We may also collect technical information automatically, including
          device type, browser version, IP address, pages viewed, and general
          usage patterns.
        </p>
      </>
    ),
  },
  {
    id: 'p2',
    title: 'How We Use Information',
    content: (
      <>
        <p className="text-secondary leading-relaxed mb-3">We use information to:</p>
        <ul className="space-y-2 text-secondary list-none pl-0">
          <li className="flex items-start gap-2.5">
            <span className="text-cyan-400 mt-0.5 flex-shrink-0">–</span>
            <span>Provide and improve Nexora OS features and support.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-cyan-400 mt-0.5 flex-shrink-0">–</span>
            <span>Send product updates, onboarding messages, and service notices.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-cyan-400 mt-0.5 flex-shrink-0">–</span>
            <span>Analyze performance, reliability, and user behavior.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-cyan-400 mt-0.5 flex-shrink-0">–</span>
            <span>Personalize your experience and recommend relevant features.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-cyan-400 mt-0.5 flex-shrink-0">–</span>
            <span>Protect the platform against fraud, abuse, and security threats.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'p3',
    title: 'How We Share Information',
    content: (
      <>
        <p className="text-secondary leading-relaxed mb-3">
          We do not sell your personal information. We may share information
          with service providers who help us operate the website, with legal
          authorities when required by law, and in connection with a business
          transfer such as a merger or acquisition.
        </p>
        <p className="text-secondary leading-relaxed">
          If you connect third-party services to Nexora OS, those services
          may receive data you choose to share with them.
        </p>
      </>
    ),
  },
  {
    id: 'p4',
    title: 'Cookies and Analytics',
    content: (
      <p className="text-secondary leading-relaxed">
        We may use cookies, pixels, and similar technologies to remember
        preferences, measure traffic, and understand how people use the
        site. Analytics data helps us improve content and product design.
      </p>
    ),
  },
  {
    id: 'p5',
    title: 'Data Retention and Security',
    content: (
      <p className="text-secondary leading-relaxed">
        We retain information only for as long as needed to provide the
        services, meet legal obligations, resolve disputes, and maintain
        security. We use reasonable safeguards to protect your data, but no
        system can be guaranteed to be 100% secure.
      </p>
    ),
  },
  {
    id: 'p6',
    title: 'Your Choices',
    content: (
      <>
        <p className="text-secondary leading-relaxed mb-3">You may be able to:</p>
        <ul className="space-y-2 text-secondary list-none pl-0 mb-3">
          <li className="flex items-start gap-2.5">
            <span className="text-cyan-400 mt-0.5 flex-shrink-0">–</span>
            <span>Opt out of marketing emails through the unsubscribe link.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-cyan-400 mt-0.5 flex-shrink-0">–</span>
            <span>Request access, correction, or deletion of your information.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-cyan-400 mt-0.5 flex-shrink-0">–</span>
            <span>Disable cookies through your browser settings.</span>
          </li>
        </ul>
        <p className="text-secondary leading-relaxed">
          Some requests may be limited where we need to keep data for legal,
          security, or operational reasons.
        </p>
      </>
    ),
  },
  {
    id: 'p7',
    title: "Children's Privacy",
    content: (
      <p className="text-secondary leading-relaxed">
        Nexora OS is not intended for children under 13, and we do not
        knowingly collect personal information from children under 13. If
        you believe a child has provided us information, contact us and we
        will take appropriate steps.
      </p>
    ),
  },
  {
    id: 'p8',
    title: 'Contact Us',
    content: (
      <>
        <p className="text-secondary leading-relaxed mb-5">
          If you have questions about this Privacy Policy, please reach out
          through the contact methods listed on the Nexora website.
        </p>
        <div className="bg-amber-400/5 border border-amber-400/20 rounded-xl p-4 text-amber-200/90 text-sm leading-relaxed">
          <strong>Note:</strong> This page is a general template and should be
          reviewed for your actual data flows, legal requirements, and
          contact details before publishing.
        </div>
      </>
    ),
  },
];

export default PrivacyPolicyPage;
