/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      {
        protocol: "https",
        hostname: "olive-dog-534584.hostingersite.com",
      },
      {
        protocol: "https",
        hostname: "*.hostingersite.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
      },
      {
        protocol: "https",
        hostname: "lawizer.com",
      },
      {
        protocol: "https",
        hostname: "*.lawizer.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: '/startup-businesslegal/startbusiness/PrivateLimitedCompanyPage', destination: '/startup-businesslegal/startbusiness/private-limited-company', permanent: true },
      { source: '/startup-businesslegal/startbusiness/OnePersonCompanyPage', destination: '/startup-businesslegal/startbusiness/one-person-company', permanent: true },
      { source: '/startup-businesslegal/startbusiness/LLPPage', destination: '/startup-businesslegal/startbusiness/llp-registration', permanent: true },
      { source: '/startup-businesslegal/startbusiness/Section8NGOCompanyPage', destination: '/startup-businesslegal/startbusiness/section-8-ngo-company', permanent: true },
      { source: '/startup-businesslegal/startbusiness/PublicLimitedCompanyPage', destination: '/startup-businesslegal/startbusiness/public-limited-company', permanent: true },
      { source: '/startup-businesslegal/startbusiness/StartupIndiaRegistrationPage', destination: '/startup-businesslegal/startbusiness/startup-india-registration', permanent: true },
      { source: '/startup-businesslegal/startbusiness/GSTRegistrationPage', destination: '/startup-businesslegal/startbusiness/gst-registration', permanent: true },
      { source: '/startup-businesslegal/growbusiness/MSMEUdhyamRegistrationPage', destination: '/startup-businesslegal/growbusiness/msme-udhyam-registration', permanent: true },
      { source: '/startup-businesslegal/protectbusiness/TrademarkRegistrationPage', destination: '/startup-businesslegal/protectbusiness/trademark-registration', permanent: true },
      { source: '/startup-businesslegal/protectbusiness/CopyrightRegistrationPage', destination: '/startup-businesslegal/protectbusiness/copyright-registration', permanent: true },
      { source: '/startup-businesslegal/protectbusiness/RenewTrademarkPage', destination: '/startup-businesslegal/protectbusiness/renew-trademark', permanent: true },
      { source: '/startup-businesslegal/protectbusiness/ReplyToTrademarkObjectionPage', destination: '/startup-businesslegal/protectbusiness/reply-to-trademark-objection', permanent: true },
      { source: '/startup-businesslegal/protectbusiness/ReplyToCopyrightObjectionPage', destination: '/startup-businesslegal/protectbusiness/reply-to-copyright-objection', permanent: true },
      { source: '/startup-businesslegal/protectbusiness/SellYourTrademarkPage', destination: '/startup-businesslegal/protectbusiness/sell-your-trademark', permanent: true },
      { source: '/startup-businesslegal/managebusiness/AppointmentOfDirectorPage', destination: '/startup-businesslegal/managebusiness/appointment-of-director', permanent: true },
      { source: '/startup-businesslegal/managebusiness/ResignationOfDirectorPage', destination: '/startup-businesslegal/managebusiness/resignation-of-director', permanent: true },
      { source: '/startup-businesslegal/managebusiness/ChangeInOfficeAddressPage', destination: '/startup-businesslegal/managebusiness/change-in-office-address', permanent: true },
      { source: '/startup-businesslegal/managebusiness/IncreasingCapitalOfCompanyPage', destination: '/startup-businesslegal/managebusiness/increasing-capital-of-company', permanent: true },
      { source: '/startup-businesslegal/managebusiness/ClosureOfPvtLtdPage', destination: '/startup-businesslegal/managebusiness/closure-of-pvt-ltd', permanent: true },
      { source: '/startup-businesslegal/managebusiness/ClosureOfOPCPage', destination: '/startup-businesslegal/managebusiness/closure-of-opc', permanent: true },
      { source: '/startup-businesslegal/managebusiness/ClosureOfLLPPage', destination: '/startup-businesslegal/managebusiness/closure-of-llp', permanent: true },
    ];
  },
};

export default nextConfig;
