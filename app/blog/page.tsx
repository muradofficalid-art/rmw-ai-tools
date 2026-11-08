export default function BlogPage() {
  const blogs = [
    { slug: "capcut-ai-video-edit", title: "CapCut AI Se Video Edit Kaise Karein", cat: "Video AI", emoji: "✂️", time: "5 Min" },
    { slug: "pictory-ai-blog-se-video", title: "Pictory AI Se Blog Se Video Kaise Banaye", cat: "Video AI", emoji: "🎬", time: "5 Min" },
    { slug: "jasper-ai-se-pehli-earning", title: "Jasper AI Se Pehli Earning Kaise Kamaye", cat: "Writing AI", emoji: "✍️", time: "5 Min" },
    { slug: "invideo-ai-text-se-video", title: "InVideo AI Se Text Se Video Kaise Banaye", cat: "Video AI", emoji: "🎬", time: "5 Min" },
    { slug: "copy-ai-viral-captions", title: "Copy.ai Se 1 Minute Me Viral Captions Kaise Likhein", cat: "Writing AI", emoji: "✍️", time: "5 Min" },
    { slug: "descript-ai-video-edit", title: "Descript AI Se Video Edit Kaise Karein - Text Jaisa Aasan", cat: "Video AI", emoji: "✂️", time: "5 Min" },
    { slug: "synthesia-ai-bina-camera-video", title: "Synthesia AI Se Bina Camera Ke Video Kaise Banaye", cat: "Video AI", emoji: "🤖", time: "5 Min" },
    { slug: "murf-ai-real-voice", title: "Murf AI Se Real Jaisi Voice Kaise Banaye - Bina Mic Ke", cat: "Voice AI", emoji: "🎙️", time: "5 Min" },
    { slug: "runway-ml-ai-video-editor", title: "Runway ML Se AI Video Editing Kaise Karein - Pro Jaisa", cat: "Video AI", emoji: "🎬", time: "5 Min" },
    { slug: "lumen5-blog-se-video", title: "Lumen5 Se Blog Ko Video Me Kaise Badlein - 5 Minute Me", cat: "Video AI", emoji: "🔄", time: "5 Min" },
    { slug: "fliki-ai-urdu-voice-video", title: "Fliki AI Se Urdu Voice Wali Video Kaise Banaye", cat: "Voice AI", emoji: "🇵🇰", time: "5 Min" },
    { slug: "heygen-ai-avatar-video", title: "HeyGen AI Se Apna Avatar Video Kaise Banaye - Bina Camera Ke", cat: "Video AI", emoji: "👤", time: "5 Min" },
  ];

  return (
    <div style={{minHeight:"100vh", background:"#0a0a0a", color:"white", fontFamily:"Inter, sans-serif"}}>
      <div style={{borderBottom:"1px solid #222", padding:"14px 16px", display:"flex", justifyContent:"space-between"}}>
        <a href="/" style={{color:"white", fontWeight:900, fontSize:"18px", textDecoration:"none"}}>RMW <span style={{color:"#a855f7"}}>AI Tools</span></a>
        <a href="/" style={{color:"#aaa", fontSize:"13px", textDecoration:"none"}}>← Home</a>
      </div>
      <div style={{maxWidth:"1000px", margin:"0 auto", padding:"30px 16px 60px"}}>
        <h1 style={{fontSize:"36px", fontWeight:900}}>Latest Blogs 🔥</h1>
        <p style={{color:"#aaa", marginTop:"8px"}}>12 Blogs - AI Tools Se Earning Seekho, Step By Step</p>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:"16px", marginTop:"24px"}}>
          {blogs.map((b) => (
            <a key={b.slug} href={`/blog/${b.slug}`} style={{background:"#18181b", border:"1px solid #333", borderRadius:"16px", padding:"20px", textDecoration:"none", color:"white", display:"block"}}>
              <div style={{fontSize:"36px"}}>{b.emoji}</div>
              <span style={{background:"#a855f7", color:"white", fontSize:"11px", padding:"4px 10px", borderRadius:"20px", display:"inline-block", marginTop:"12px"}}>{b.cat}</span>
              <div style={{fontSize:"17px", fontWeight:800, lineHeight:"1.4", marginTop:"10px"}}>{b.title}</div>
              <div style={{color:"#888", fontSize:"13px", marginTop:"10px"}}>RMW Team • {b.time} Read • Nov 2026</div>
              <div style={{color:"#a855f7", fontWeight:700, fontSize:"14px", marginTop:"12px"}}>Read Blog →</div>
            </a>
          ))}
        </div>
        <div style={{textAlign:"center", marginTop:"30px"}}>
          <a href="/" style={{color:"#aaa", fontSize:"14px"}}>← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
