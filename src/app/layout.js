import "./globals.css";
import weddingData from "../config/weddingData";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || process.env.URL || "http://localhost:3000"
  ),
  title: `${weddingData.couple.combinedTitle} | Wedding Invitation`,
  description: `Join ${weddingData.couple.combinedTitle} to celebrate their Wedding Reception on Nov 10 (6 PM - 10 PM) and Muhurtham on Nov 11 (6 AM) at ${weddingData.reception.venue}, Thudiyalur.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Allura&family=Cinzel:wght@400;600;700;800&family=Great+Vibes&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
