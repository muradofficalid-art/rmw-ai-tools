import Link from "next/link";

const blogs = [
  {
    slug: "capcut-se-viral-reels-kaise-banayen",
    title: "CapCut Se 2 Minute Me Viral Reels Kaise Banayen",
    desc: "CapCut AI se bina editing sikhe viral reels banao. Step by step guide.",
    date: "6 Nov 2026",
    read: "4 min read",
    category: "Video Editing",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold text-center">Latest Blogs - RMW AI Tools</h1>
      <p className="text-center text-gray-400 mt-3">AI Tools ke bare me asan Urdu/Hindi guides</p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {blogs.map((b) => (
          <Link key={b.slug} href={`/blog/${b.slug}`} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-purple-500">
            <span className="text-xs bg-purple-600 px-3 py-1 rounded-full">{b.category}</span>
            <h2 className="text-xl font-bold mt-4">{b.title}</h2>
            <p className="text-gray-400 text-sm mt-2">{b.desc}</p>
            <p className="text-xs text-gray-500 mt-4">{b.date} • {b.read}</p>
            <p className="text-purple-400 text-sm mt-2 font-semibold">Read Blog →</p>
          </Link>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link href="/" className="text-sm text-gray-400 underline">← Back to Home</Link>
      </div>
    </div>
  );
}
