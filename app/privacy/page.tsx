import type { Metadata } from "next";
import { LegalLayout, H2, H3, UL } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy — PulseRoute",
  description:
    "How PulseRoute handles your data. We process only routing metadata — never cardholder data, amounts, or customer PII.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="April 2, 2026">
      <div className="rounded-2xl border border-border bg-bg-elevated p-6 text-fg">
        <strong className="text-fg">The short version:</strong>{" "}
        <span className="text-fg-muted">
          PulseRoute processes only transaction routing metadata (processor IDs,
          success/failure, latency). We never see, store, or process cardholder
          data, payment amounts, or personally identifiable customer information.
        </span>
      </div>

      <H2>1. What Data We Collect</H2>

      <H3>Transaction Metadata (from your SDK integration)</H3>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-bg-elevated text-fg">
            <tr>
              <th className="text-left font-medium px-4 py-3">Data</th>
              <th className="text-left font-medium px-4 py-3">Example</th>
              <th className="text-left font-medium px-4 py-3">Purpose</th>
            </tr>
          </thead>
          <tbody className="text-fg-muted">
            {[
              ["Processor ID", '"stripe", "adyen"', "Route health evaluation"],
              ["Transaction result", "success / failure", "Success rate calculation"],
              ["Latency", "145ms", "Performance monitoring"],
              ["Error code", '"timeout", "declined"', "Failure pattern analysis"],
              ["Routing context", "country, currency, payment method", "Rule matching"],
              ["Rule ID", '"us_usd_visa"', "Configuration reference"],
            ].map(([a, b, c]) => (
              <tr key={a} className="border-t border-border">
                <td className="px-4 py-3">{a}</td>
                <td className="px-4 py-3 font-mono text-xs">{b}</td>
                <td className="px-4 py-3">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H3>Account Information</H3>
      <UL>
        <li>Email address (for account access and communication)</li>
        <li>Company name</li>
        <li>API keys (hashed, for authentication)</li>
      </UL>

      <H3>What We Do NOT Collect</H3>
      <UL>
        <li>Credit/debit card numbers or PANs</li>
        <li>Cardholder names or addresses</li>
        <li>Transaction amounts or order details</li>
        <li>Customer PII (names, emails, phone numbers)</li>
        <li>IP addresses of your end customers</li>
      </UL>

      <H2>2. How We Use Your Data</H2>
      <UL>
        <li><strong className="text-fg">Health evaluation:</strong> Computing processor success rates, latency percentiles, and failure patterns</li>
        <li><strong className="text-fg">Routing decisions:</strong> Determining which processor to recommend for each transaction context</li>
        <li><strong className="text-fg">Predictive models:</strong> Training ML models to predict processor degradation (Tier 2/3)</li>
        <li><strong className="text-fg">Shadow reports:</strong> Comparing PulseRoute recommendations against actual routing for shadow mode</li>
        <li><strong className="text-fg">Service improvement:</strong> Aggregate, anonymized metrics to improve the routing engine</li>
      </UL>

      <H2>3. Data Storage and Retention</H2>
      <UL>
        <li>Transaction metadata is stored in Redis with a configurable time window (default: 5 minutes for real-time metrics)</li>
        <li>Aggregated health statistics are retained for the duration of your account</li>
        <li>Shadow mode observations are stored in-memory and cleared on engine restart or explicit clear</li>
        <li>All data is deleted within 30 days of account termination</li>
      </UL>

      <H2>4. Data Isolation</H2>
      <p>
        PulseRoute is multi-tenant with strict data isolation. Each tenant&apos;s data
        is stored in a separate Redis key namespace. There is no cross-tenant data
        access. Your data is never shared with other customers.
      </p>

      <H2>5. Data Security</H2>
      <UL>
        <li>All API communication is encrypted via TLS</li>
        <li>API keys are transmitted via headers, never in URLs</li>
        <li>Redis data is encrypted at rest (when using managed Redis services)</li>
        <li>Access to production systems is restricted and logged</li>
      </UL>

      <H2>6. Third-Party Data Sharing</H2>
      <p>
        We do not sell, rent, or share your data with third parties. We may share
        aggregate, anonymized statistics (e.g., &ldquo;average failover detection time
        across all customers&rdquo;) for marketing purposes, but never individual
        customer data.
      </p>

      <H2>7. PCI-DSS Compliance</H2>
      <p>
        PulseRoute is designed to operate outside the PCI-DSS cardholder data
        environment (CDE). We do not process, store, or transmit cardholder data.
        Our SDK integration points are positioned around your payment flow, not within it.
      </p>

      <H2>8. Your Rights</H2>
      <UL>
        <li><strong className="text-fg">Access:</strong> Request a copy of all data we hold about your account</li>
        <li><strong className="text-fg">Deletion:</strong> Request deletion of your account and all associated data</li>
        <li><strong className="text-fg">Portability:</strong> Export your configuration (rules, processor setup) at any time via the API</li>
        <li><strong className="text-fg">Correction:</strong> Update your account information at any time</li>
      </UL>

      <H2>9. Cookies</H2>
      <p>
        The PulseRoute dashboard uses essential cookies for session management only.
        We do not use tracking cookies, analytics scripts, or advertising pixels.
      </p>

      <H2>10. Changes to This Policy</H2>
      <p>
        We will notify you of material changes via email. The &ldquo;last updated&rdquo;
        date at the top reflects when this policy was last modified.
      </p>

      <H2>11. Contact</H2>
      <p>
        For privacy-related questions or data requests:{" "}
        <a href="mailto:privacy@pulseroute.dev" className="text-violet-bright hover:underline">
          privacy@pulseroute.dev
        </a>
      </p>
    </LegalLayout>
  );
}
