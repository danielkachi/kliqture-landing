export const siteConfig = {
  productName: "Kliqture",
  companyName: "Blueprint Fintech Solutions Ltd.",
  supportEmail: "support@kliqture.com",
  businessEmail: null,
  phone: null,
  address: null,
  rcNumber: null,
  socialLinks: {
    instagram: "https://www.instagram.com/kliqture",
    linkedin: "https://www.linkedin.com/company/kliqture/",
  },
  joinFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSd0MTpkp6CDCv0SGpcIY3f-Fg977ICWmjUufv93ZuATCPzMFA/viewform?usp=publish-editor",
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund & Cancellation Policy", href: "/refund-policy" },
    { label: "Dispute Resolution", href: "/dispute-resolution" },
    { label: "Delete Account", href: "/delete-account" },
  ],
} as const;

// Verified business address, phone, RC number, and business email are not
// present in the repository yet. Keep unavailable values null so the public
// site never renders invented compliance information.
