export default function TermsPage() {
  return (
    <div className="max-w-prose mx-auto px-6 py-16">
      <div className="eyebrow-rule mb-4">Legal</div>
      <h1 className="font-display text-display-md font-semibold mb-2">Terms &amp; Conditions</h1>
      <p className="text-sm text-foreground-muted mb-10">Last updated: July 2026</p>

      <div className="space-y-8 text-foreground-muted leading-relaxed">
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing and using The Timeless Edit, you accept and agree to be bound by these
            Terms &amp; Conditions. If you do not agree, please discontinue use of the site.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Use of Content</h2>
          <p>
            All articles, images, and other content published on The Timeless Edit are the
            property of The Timeless Edit or its licensors, unless otherwise credited. You may
            share links to our content, but reproduction, republishing, or distribution of our
            articles without prior written permission is prohibited.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Editorial Content Disclaimer</h2>
          <p>
            Content published on this site — including health, lifestyle, finance, and general
            interest articles — is provided for informational and educational purposes only.
            It is not a substitute for professional medical, legal, or financial advice. Always
            consult a qualified professional before making decisions based on information found
            on this site.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. User Conduct</h2>
          <p className="mb-2">When interacting with this site (e.g. comments, newsletter), you agree not to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Post unlawful, defamatory, or harmful content</li>
            <li>Impersonate any person or entity</li>
            <li>Attempt to disrupt or compromise site security</li>
            <li>Use the site for unauthorized commercial purposes</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Third-Party Links</h2>
          <p>
            Our site may contain links to third-party websites. We are not responsible for the
            content, accuracy, or practices of any linked external sites.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Limitation of Liability</h2>
          <p>
            The Timeless Edit is not liable for any direct, indirect, incidental, or consequential
            damages arising from your use of, or inability to use, this website or its content.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued use of the site
            after changes are posted constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">8. Contact Us</h2>
          <p>
            For questions about these Terms, please contact us at hello@thetimelessedit.com.
          </p>
        </section>
      </div>
    </div>
  );
}
