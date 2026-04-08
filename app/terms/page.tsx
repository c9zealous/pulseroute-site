import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, H2, UL } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service — PulseRoute",
  description:
    "PulseRoute terms of service. Read the terms and conditions for using the PulseRoute payment routing platform.",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="April 2, 2026">
      <H2>1. Agreement to Terms</H2>
      <p>
        By accessing or using PulseRoute (&ldquo;Service&rdquo;), you agree to be bound by
        these Terms of Service (&ldquo;Terms&rdquo;). If you are using the Service on behalf
        of an organization, you represent that you have authority to bind that
        organization to these Terms.
      </p>

      <H2>2. Description of Service</H2>
      <p>
        PulseRoute provides a payment routing optimization service that monitors
        payment processor health and makes routing recommendations. The Service includes:
      </p>
      <UL>
        <li>A routing API that provides processor selection recommendations</li>
        <li>SDKs for integration with your payment systems</li>
        <li>A dashboard for monitoring and configuration</li>
        <li>Shadow mode for observation without routing changes</li>
      </UL>

      <H2>3. Beta Program</H2>
      <p>
        PulseRoute is currently in beta. The Service is provided &ldquo;as-is&rdquo; during
        the beta period. We may modify, suspend, or discontinue any aspect of the Service
        at any time. Beta access is free; pricing will be communicated before any charges apply.
      </p>

      <H2>4. Your Responsibilities</H2>
      <UL>
        <li>You are responsible for your payment processing decisions. PulseRoute provides recommendations; the final routing decision is yours.</li>
        <li>You must not use the Service for any unlawful purpose or in violation of any applicable regulations (including PCI-DSS, where applicable).</li>
        <li>You are responsible for maintaining the security of your API keys and account credentials.</li>
        <li>You must not attempt to reverse-engineer, decompile, or disassemble the Service.</li>
        <li>You must not use the Service to process, store, or transmit cardholder data. PulseRoute only handles routing metadata (processor IDs, success/failure flags, latency), not payment card data.</li>
      </UL>

      <H2>5. Data Processing</H2>
      <p>PulseRoute processes only transaction metadata necessary for routing optimization:</p>
      <UL>
        <li>Transaction outcomes (success/failure, latency, error codes)</li>
        <li>Routing context (country, currency, payment method)</li>
        <li>Processor identifiers</li>
      </UL>
      <p>
        PulseRoute does <strong className="text-fg">not</strong> process, store, or have access
        to cardholder data, payment amounts, or personally identifiable information. See our{" "}
        <Link href="/privacy" className="text-violet-bright hover:underline">
          Privacy Policy
        </Link>{" "}
        for details.
      </p>

      <H2>6. Service Availability</H2>
      <p>
        We aim for high availability but do not guarantee uninterrupted service during beta.
        PulseRoute SDKs are designed with local fallback caching so your payment processing
        continues even if the PulseRoute API is unreachable.
      </p>

      <H2>7. Intellectual Property</H2>
      <p>
        PulseRoute and its underlying technology (including ML models, algorithms, and
        software) are owned by PulseRoute. Your data remains yours. We claim no ownership
        over your transaction metadata or configurations.
      </p>

      <H2>8. Limitation of Liability</H2>
      <p>
        To the maximum extent permitted by law, PulseRoute shall not be liable for any
        indirect, incidental, special, consequential, or punitive damages, including loss
        of revenue, profits, or data, arising from your use of the Service. Our total
        liability shall not exceed the fees paid by you in the 12 months preceding the claim.
      </p>

      <H2>9. Indemnification</H2>
      <p>
        You agree to indemnify PulseRoute against any claims arising from your use of
        the Service, your violation of these Terms, or your violation of any applicable
        law or regulation.
      </p>

      <H2>10. Termination</H2>
      <p>
        Either party may terminate access at any time during beta. Upon termination, your
        data will be deleted within 30 days. You may request immediate data deletion by
        contacting us.
      </p>

      <H2>11. Changes to Terms</H2>
      <p>
        We may update these Terms from time to time. We will notify you of material changes
        via email or through the Service. Continued use after changes constitutes acceptance.
      </p>

      <H2>12. Governing Law</H2>
      <p>
        These Terms are governed by the laws of the State of Delaware, United States,
        without regard to conflict of law principles.
      </p>

      <H2>13. Contact</H2>
      <p>
        Questions about these Terms? Contact us at{" "}
        <a href="mailto:legal@pulseroute.dev" className="text-violet-bright hover:underline">
          legal@pulseroute.dev
        </a>
        .
      </p>
    </LegalLayout>
  );
}
