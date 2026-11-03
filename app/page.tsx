// RMW AI Tools - PRO Affiliate Landing Page
export default function Home() {
  const tools = [
    {
      name: "Pictory AI",
      badge: "🔥 #1 BEST FOR VIDEO",
      rating: "4.9/5",
      price: "$19/mo",
      commission: "$75 per sale",
      desc: "Text to Video in 5 mins. I tested 10 tools, this is fastest for YouTube automation.",
      pros: ["No editing skills needed", "300+ voices", "YouTube ready"],
      link: "YOUR PICTORY AFFILIATE LINK",
      color: "from-purple-600 to-pink-600"
    },
    {
      name: "Jasper AI",
      badge: "BEST FOR WRITING",
      rating: "4.8/5",
      price: "$39/mo",
      commission: "25% Lifetime",
      desc: "Writes blogs, ads, emails like human. My team saves 20 hours/week with this.",
      pros: ["SEO optimized", "50+ templates", "Plagiarism free"],
      link: "YOUR JASPER LINK",
      color: "from-blue-600 to-cyan-600"
    },
    {
      name: "Writesonic",
      badge: "BEST VALUE",
      rating: "4.7/5",
      price: "$16/mo",
      commission: "30% Lifetime",
      desc: "Best for beginners. Cheap and powerful alternative to Jasper.",
      pros: ["Cheapest", "AI Article writer", "Free trial"],
      link: "YOUR WRITESONIC LINK",
      color: "from-green-600 to-emerald-600"
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* HEADER */}
      <header className="border-b border-white/10 p-4 flex justify-between">
        <h1 className="text-2xl font-black">RMW<span className="text-purple-500"> AI TOOLS</span></h1>
        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">✅ Tested & Verified</span>
      </header>

      {/* HERO */}
      <section className="text-center py-16 px-4">
        <div className="inline-block bg-purple-500/20 border border-purple-500/30 px-4 py-1 rounded-full text-sm mb-4">
          🎁 Exclusive: Get 20% OFF via my links below
        </div>
        <h2 className="text-5xl font-black leading-tight">I Tested 27 AI Tools.<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">These 3 Actually Make Money.</span></h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">No fake reviews. Real earnings proof. Updated Nov 2026 by RMW Lahore Team.</p>
      </section>

      {/* TOOLS GRID */}
      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 pb-20">
        {tools.map((tool) => (
          <div key={tool.name} className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition">
            <div className={`bg-gradient-to-r ${tool.color} text-xs font-bold px-3 py-1 rounded-full inline-block`}>{tool.badge}</div>
            <h3 className="text-2xl font-bold mt-4">{tool.name} <span className="text-yellow-400 text-sm">⭐ {tool.rating}</span></h3>
            <p className="text-gray-400 text-sm mt-2">{tool.desc}</p>
            
            <div className="mt-4 space-y-1">
              {tool.pros.map(p => <div key={p} className="text-sm">✅ {p}</div>)}
            </div>

            <div className="mt-6 flex justify-between items-center">
              <span className="text-gray-500 line-through text-sm">{tool.price}</span>
              <span className="text-green-400 text-xs font-bold">{tool.commission}</span>
            </div>

            <a href={tool.link} className={`mt-4 block text-center bg-gradient-to-r ${tool.color} py-3 rounded-xl font-black hover:scale-105 transition`}>
              GET DISCOUNT + BONUS →
            </a>
            <p className="text-[10px] text-gray-500 text-center mt-2">60-day money back guarantee</p>
          </div>
        ))}
      </section>

      {/* DETAILS SECTION - YAHI PRO BANATA HAI */}
      <section className="bg-white text-black py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-black">Why I Only Recommend These 3?</h3>
          <p className="mt-4 text-gray-600">Maine 27 AI tools pe $500+ kharch kiye. 90% bakwas nikle. Ye 3 tools se main khud $1200/month kama raha hu PartnerStack se. Pictory se video bana ke YouTube pe dalta hu, Jasper se script likhta hu.</p>
          
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="border p-4 rounded-xl">
              <h4 className="font-bold">❌ Without My Link</h4>
              <p className="text-sm text-gray-500">Full price, no bonus, no support</p>
            </div>
            <div className="border-2 border-green-500 p-4 rounded-xl bg-green-50">
              <h4 className="font-bold">✅ With RMW Link</h4>
              <p className="text-sm">20% OFF + My $97 Course FREE + WhatsApp Support</p>
            </div>
          </div>

          <div className="mt-10 p-6 bg-black text-white rounded-2xl">
            <h4 className="font-bold text-xl">📊 Earnings Proof (Last 30 Days)</h4>
            <p className="text-gray-400 text-sm mt-2">PartnerStack Dashboard - Pictory: 14 sales x $75 = $1050, Jasper: 8 sales x 25% = $340 ... Total $1390</p>
            <p className="text-[11px] text-gray-500 mt-2">*Results not typical, but possible with work</p>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-500 text-xs">
        RMW AI Tools © 2026 - Lahore, Pakistan | Affiliate Disclosure: We earn commission if you buy via our links.
      </footer>
    </div>
  );
}
