export default function PrivacyPage() {
  return (
    <div className="max-w-prose mx-auto px-6 py-16">
      <div className="eyebrow-rule mb-4">Legal</div>
      <h1 className="font-display text-display-md font-semibold mb-2">Privacy Policy</h1>
      <p className="text-sm text-foreground-muted mb-10">Last updated: July 2026</p>

      <div className="space-y-8 text-foreground-muted leading-relaxed">
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
          <p>
            The Timeless Edit ("we," "our," or "us") respects your privacy and is committed to
            protecting the personal information you share with us. This Privacy Policy explains
            how we collect, use, and safeguard your information when you visit our website.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
          <p className="mb-2">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Email address, if you subscribe to our newsletter</li>
            <li>Comments and content you submit on the site</li>
            <li>Usage data such as pages visited, time spent, and device/browser information</li>
            <li>Cookies used to improve site performance and personalize content</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To send our newsletter and updates, if you've subscribed</li>
            <li>To improve our website's content, design, and performance</li>
            <li>To respond to inquiries and comments</li>
            <li>To display relevant advertising, where applicable</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Cookies</h2>
          <p>
            We use cookies to enhance your browsing experience, analyze site traffic, and
            understand where our audience is coming from. You can disable cookies through your
            browser settings, though some site features may not function properly as a result.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Third-Party Services</h2>
          <p>
            We may use third-party services such as analytics providers and advertising networks
            that collect, monitor, and analyze data to help us improve our website. These third
            parties have their own privacy policies governing how they use such information.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Data Security</h2>
          <p>
            We take reasonable measures to protect your personal information, but no method of
            transmission over the internet is 100% secure. We cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">7. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal data by
            contacting us at hello@thetimelessedit.com.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this
            page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">9. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at
            hello@thetimelessedit.com.
          </p>
        </section>
      </div>
    </div>
  );
}
