import Link from "next/link";

export default function BlogDetail() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 max-w-3xl mx-auto">
      <Link href="/blog" className="text-sm text-gray-400">← All Blogs</Link>
      <span className="block text-xs bg-purple-600 w-fit px-3 py-1 rounded-full mt-6">Video Editing</span>
      <h1 className="text-3xl md:text-4xl font-bold mt-4 leading-tight">CapCut Se 2 Minute Me Viral Reels Kaise Banayen</h1>
      <p className="text-gray-500 text-sm mt-2">6 Nov 2026 • 4 min read • RMW AI Tools</p>

      <div className="space-y-4 text-gray-200 leading-relaxed mt-8 text-[16px]">
        <p>Agar aapko editing nahi aati, to CapCut AI aapka best dost hai. Isse aap 2 minute me professional reels bana sakte ho.</p>
        <h2 className="text-xl font-bold text-white pt-2">Step 1: Template Choose Karo</h2>
        <p>CapCut kholo, trending template choose karo jo aapke topic se match kare.</p>
        <h2 className="text-xl font-bold text-white pt-2">Step 2: Apni Clip Daalo</h2>
        <p>Apni video ya photo daalo, CapCut khud auto-cut, music aur captions laga dega.</p>
        <h2 className="text-xl font-bold text-white pt-2">Step 3: Export Aur Post Karo</h2>
        <p>1080p me export karo aur Reels, Shorts aur TikTok pe post karo. Roz 1 video post karna hai.</p>
        <p className="bg-zinc-900 p-4 rounded-xl border border-zinc-800"><b>Pro Tip:</b> Pehle 2 second me hook lazmi do - jaise "Ye 1 trick 99% logon ko nahi pata!"</p>
      </div>

      <div className="mt-10 bg-purple-600 rounded-2xl p-6 text-center">
        <h3 className="font-bold text-lg">CapCut Try Karna Hai?</h3>
        <Link href="/" className="inline-block bg-white text-black px-6 py-2 rounded-full font-bold mt-3 text-sm">View CapCut Tool →</Link>
      </div>
    </div>
  );
}
