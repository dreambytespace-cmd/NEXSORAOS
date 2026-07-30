// TermsPage.jsx
import React from 'react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-[#060918] text-slate-200 font-sans selection:bg-cyan-400/20">
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

      <div className="relative z-10 mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-12">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-16 sm:mb-20">
          <a href="/" className="flex items-center gap-3 group no-underline">
            <img
              src="/logo.png"
              alt="Nexora OS logo"
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg object-contain"
            />
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white">
              Nexora <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">OS</em>
            </span>
          </a>
          <div className="flex items-center gap-2">
            <a href="/" className="px-4 py-2 rounded-full text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors">Home</a>
            <a href="/privacy-policy.html" className="px-4 py-2 rounded-full text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors">Privacy</a>
          </div>
        </nav>

        <main>
          {/* Header */}
          <div className="mb-10 sm:mb-14">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-400/10 border border-cyan-400/20 mb-4">
              Terms & Conditions
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-3 mb-5 leading-tight">
              Rules for using Nexora OS
            </h1>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              These Terms govern your access to the Nexora OS website, waitlist,
              creator tools, and related services.
            </p>
          </div>

          {/* Meta Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-12 sm:mb-16">
            {[
              { label: 'Last Updated', value: 'July 30, 2026' },
              { label: 'Effective Date', value: 'July 30, 2026' },
              { label: 'Company', value: 'Nexora OS' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 backdrop-blur-sm hover:border-purple-400/20 transition-colors"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                  {item.label}
                </div>
                <div className="text-sm font-medium text-slate-200">{item.value}</div>
              </div>
            ))}
          </div>

          {/* Table of Contents */}
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-5 sm:p-7 mb-12 sm:mb-16 backdrop-blur-md">
            <div className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">On this page</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {[
                '1. Acceptance of Terms',
                '2. Eligibility and Accounts',
                '3. Acceptable Use',
                '4. AI-Generated Content',
                '5. Subscriptions and Billing',
                '6. Intellectual Property',
                '7. Termination',
                '8. Disclaimers',
                '9. Limitation of Liability',
                '10. Changes and Contact',
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={`#t${idx + 1}`}
                  className="block text-sm text-slate-400 no-underline py-1.5 hover:text-cyan-300 hover:translate-x-1 transition-all"
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
                className="scroll-mt-24 py-8 border-b border-white/[0.04] last:border-b-0"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10 text-cyan-400 font-bold text-sm flex-shrink-0 border border-cyan-400/20">
                    {index + 1}
                  </span>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">{section.title}</h2>
                    {section.content}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-16 sm:mt-24 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-sm text-slate-500">© 2026 Nexora OS. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <a href="/" className="text-sm text-slate-500 no-underline hover:text-slate-300 transition-colors">Home</a>
              <a href="/privacy-policy.html" className="text-sm text-slate-500 no-underline hover:text-slate-300 transition-colors">Privacy Policy</a>
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
    id: 't1',
    title: 'Acceptance of Terms',
    content: (
      <p className="text-slate-400 leading-relaxed">
        By accessing or using Nexora OS, you agree to these Terms and to
        any additional policies referenced here. If you do not agree, do
        not use the service.
      </p>
    ),
  },
  {
    id: 't2',
    title: 'Eligibility and Accounts',
    content: (
      <p className="text-slate-400 leading-relaxed">
        You must be able to form a binding contract to use the platform.
        You are responsible for keeping your account details accurate and
        for maintaining the confidentiality of your login credentials.
      </p>
    ),
  },
  {
    id: 't3',
    title: 'Acceptable Use',
    content: (
      <>
        <p className="text-slate-400 leading-relaxed mb-3">You agree not to use Nexora OS to:</p>
        <ul className="space-y-2 text-slate-400 list-none pl-0">
          <li className="flex items-start gap-2.5">
            <span className="text-cyan-400 mt-0.5 flex-shrink-0">–</span>
            <span>Break the law or violate someone else's rights.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-cyan-400 mt-0.5 flex-shrink-0">–</span>
            <span>Upload malware, spam, or harmful content.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-cyan-400 mt-0.5 flex-shrink-0">–</span>
            <span>Attempt to reverse engineer, disrupt, or abuse the service.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-cyan-400 mt-0.5 flex-shrink-0">–</span>
            <span>Automate scraping or access in ways we have not authorized.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 't4',
    title: 'AI-Generated Content',
    content: (
      <>
        <p className="text-slate-400 leading-relaxed mb-3">
          Nexora OS may generate drafts, captions, summaries, and other
          content using AI. You are responsible for reviewing all generated
          output before publishing or relying on it.
        </p>
        <p className="text-slate-400 leading-relaxed">
          AI output can be inaccurate, incomplete, or inappropriate, and it
          should not be treated as legal, financial, or professional advice.
        </p>
      </>
    ),
  },
  {
    id: 't5',
    title: 'Subscriptions and Billing',
    content: (
      <p className="text-slate-400 leading-relaxed">
        If paid plans become available, pricing, renewal, cancellation, and
        refund terms will be shown at checkout or in the product. Free beta
        access, if offered, may change, pause, or end at any time.
      </p>
    ),
  },
  {
    id: 't6',
    title: 'Intellectual Property',
    content: (
      <p className="text-slate-400 leading-relaxed">
        The website, software, branding, and content belong to Nexora OS or
        its licensors. You keep ownership of your own content, but you grant
        us the rights needed to operate the service and process your input.
      </p>
    ),
  },
  {
    id: 't7',
    title: 'Termination',
    content: (
      <p className="text-slate-400 leading-relaxed">
        We may suspend or terminate access if you violate these Terms, pose
        a security risk, or use the platform in a way that harms other
        users or the service.
      </p>
    ),
  },
  {
    id: 't8',
    title: 'Disclaimers',
    content: (
      <p className="text-slate-400 leading-relaxed">
        Nexora OS is provided on an "as is" and "as available" basis to the
        fullest extent permitted by law. We do not guarantee uninterrupted
        access, error-free operation, or that every feature will always be
        available.
      </p>
    ),
  },
  {
    id: 't9',
    title: 'Limitation of Liability',
    content: (
      <p className="text-slate-400 leading-relaxed">
        To the fullest extent permitted by law, Nexora OS will not be
        liable for indirect, incidental, special, consequential, or
        punitive damages arising from your use of the service.
      </p>
    ),
  },
  {
    id: 't10',
    title: 'Changes and Contact',
    content: (
      <>
        <p className="text-slate-400 leading-relaxed mb-3">
          We may update these Terms from time to time. When we do, we will
          post the updated version on this page and change the effective
          date.
        </p>
        <p className="text-slate-400 leading-relaxed mb-5">
          For questions about these Terms, use the contact options listed on
          the Nexora website.
        </p>
        <div className="bg-amber-400/5 border border-amber-400/20 rounded-xl p-4 text-amber-200/90 text-sm leading-relaxed">
          <strong>Reminder:</strong> This is a starter template, not legal
          advice. Please have it reviewed for your business model, location,
          payment flow, and data handling practices before publishing.
        </div>
      </>
    ),
  },
];

export default TermsPage;