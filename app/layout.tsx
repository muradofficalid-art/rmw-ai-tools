import tools from "../tools.json";
import Footer from "../components/Footer";

export const metadata = {
  title: `RMW AI Tools - I Tested 27 AI Tools, These ${tools.length} Actually Make Money`,
  description: `No fake reviews. Real earnings proof. RMW Lahore Team ne 27 AI tools pe $500+ kharch karke ye ${tools.length} best tools select kiye jo $1200/month kamate hain. 20% OFF + $97 Course FREE.`,
  icons: {
    icon: "/icon.jpg",
  },
  keywords: ["RMW AI Tools", "Best AI Tools", "AI Tools Make Money", "Pictory", "Jasper", "AI Tools Pakistan", "Earn Money AI"],
  authors: [{ name: "RMW" }],
  openGraph: {
    title: `RMW AI Tools - These ${tools.length} Actually Make Money`,
    description: `I Tested 27 AI Tools. These ${tools.length} Actually Make Money. Real Earnings Proof. 20% OFF via RMW Links.`,
    url: "https://rmw-ai-tools.vercel.app",
    siteName: "RMW AI Tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `RMW AI Tools - These ${tools.length} Actually Make Money`,
    description: "No fake reviews. Real earnings proof. Updated Nov 2026 by RMW Lahore Team.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "MEBhJFo7YPBFom22dlssggcRCNRnLR1DURvvG1TIcno",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{margin:0,fontFamily:'sans-serif',background:'#0a0a0a',color:'white'}}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
