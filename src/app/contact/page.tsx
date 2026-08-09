export default function ContactPage() {
  return (
    <div className="max-w-prose mx-auto px-6 py-16">
      <div className="eyebrow-rule mb-4">Get in touch</div>
      <h1 className="font-display text-display-md font-semibold mb-6">Contact Us</h1>
      <p className="text-lg text-foreground-muted leading-relaxed mb-8">
        Have a story idea, a partnership inquiry, or feedback on something you read?
        We'd love to hear from you.
      </p>

      <div className="space-y-6">
        <div>
          <h3 className="font-display text-lg font-semibold mb-1">General Inquiries</h3>
          <p className="text-foreground-muted">hello@thetimelessedit.com</p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold mb-1">Editorial & Guest Contributions</h3>
          <p className="text-foreground-muted">editorial@thetimelessedit.com</p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold mb-1">Advertising & Partnerships</h3>
          <p className="text-foreground-muted">partnerships@thetimelessedit.com</p>
        </div>
      </div>

      <p className="text-sm text-foreground-muted mt-10">
        We aim to respond to all messages within 2–3 business days.
      </p>
    </div>
  );
}
