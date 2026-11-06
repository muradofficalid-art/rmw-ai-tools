import tools from "../tools.json";

const COLORS = [
  "linear-gradient(90deg,#9333ea,#ec4899)",
  "linear-gradient(90deg,#2563eb,#06b6d4)",
  "linear-gradient(90deg,#16a34a,#10b981)",
  "linear-gradient(90deg,#7c3aed,#c026d3)",
  "linear-gradient(90deg,#ea580c,#f59e0b)",
  "linear-gradient(90deg,#db2777,#f472b6)",
];

const BADGES = [
  "🔥 #1 BEST FOR VIDEO",
  "BEST FOR WRITING",
  "BEST VALUE",
  "🔥 TRENDING ON PARTNERSTACK",
  "🔥 NEW TOOL",
  "🔥 TRENDING",
];

export default function Home() {
  return (
    <div style={{minHeight:'100vh', background:'#0a0a0a', color:'white', fontFamily:'Inter, sans-serif'}}>
      {/* HEADER - SAME AS BEFORE */}
      <div style={{borderBottom:'1px solid #222', padding:'16px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h1 style={{fontSize:'22px', fontWeight:900, margin:0}}>RMW <span style={{color:'#a855f7'}}>AI TOOLS</span></h1>
        <span style={{background:'#22c55e22', color:'#22c55e', padding:'4px 12px', borderRadius:'20px', fontSize:'11px'}}>✅ Tested & Verified</span>
      </div>

      {/* HERO - SAME AS BEFORE, SIRF NUMBER AUTO */}
      <div style={{textAlign:'center', padding:'60px 20px'}}>
        <div style={{display:'inline-block', background:'#a855f722', border:'1px solid #a855f744', padding:'6px 16px', borderRadius:'20px', fontSize:'12px', marginBottom:'16px'}}>🎁 Exclusive: Get 20% OFF via my links below</div>
        <h2 style={{fontSize:'42px', fontWeight:900, lineHeight:'1.1', margin:0}}>I Tested 27 AI Tools.<br/><span style={{background:'linear-gradient(90deg,#c084fc,#f472b6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>These {tools.length} Actually Make Money.</span></h2>
        <p style={{color:'#888', marginTop:'12px'}}>No fake reviews. Real earnings proof. Updated Nov 2026 by RMW Lahore Team.</p>
      </div>

      {/* CARDS - AB YE AUTO HAIN, TOOLS.JSON SE AAYENGE */}
      <div style={{maxWidth:'1100px', margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'20px', padding:'0 20px 60px'}}>
        {tools.map((t, i) => (
          <div key={t.id} style={{background:'#ffffff0d', border:'1px solid #ffffff1a', borderRadius:'20px', padding:'24px'}}>
            <div style={{background: COLORS[i % COLORS.length], fontSize:'11px', fontWeight:700, padding:'4px 10px', borderRadius:'20px', display:'inline-block'}}>{BADGES[i % BADGES.length]}</div>
            <h3 style={{fontSize:'22px', fontWeight:700, margin:'14px 0 0'}}>{t.name} <span style={{color:'#facc15', fontSize:'14px'}}>⭐ 4.8/5</span></h3>
            <p style={{color:'#aaa', fontSize:'13px', marginTop:'8px'}}>{t.tagline}</p>
            <div style={{marginTop:'12px', fontSize:'13px', lineHeight:'1.8'}}>
              ✅ {t.tagline}<br/>✅ No editing skills needed<br/>✅ Free trial available
            </div>
            <div style={{marginTop:'16px', display:'flex', justifyContent:'space-between', fontSize:'13px'}}><span style={{color:'#666', textDecoration:'line-through'}}>{t.price}</span><span style={{color:'#22c55e', fontWeight:700}}>{t.commission}</span></div>
            <a href={t.link} style={{marginTop:'16px', display:'block', textAlign:'center', background: COLORS[i % COLORS.length], padding:'12px', borderRadius:'12px', fontWeight:900, color:'white', textDecoration:'none'}}>GET DISCOUNT + BONUS →</a>
            <p style={{fontSize:'10px', color:'#666', textAlign:'center', marginTop:'6px'}}>60-day money back guarantee</p>
          </div>
        ))}
      </div>

      {/* BLOG SECTION - HOMEPAGE PE NICHE DIKHEGA */}
      <div style={{maxWidth:'1100px', margin:'0 auto', padding:'0 20px 60px'}}>
        <h2 style={{fontSize:'28px', fontWeight:900, textAlign:'center', margin:0}}>Latest Blogs 📝</h2>
        <p style={{color:'#888', textAlign:'center', fontSize:'14px', marginTop:'8px'}}>AI Tools seekho asan Urdu me - Step by Step Guides</p>
        <a href="/blog/capcut-se-viral-reels-kaise-banayen" style={{textDecoration:'none', color:'white', display:'block'}}>
          <div style={{background:'#ffffff0d', border:'1px solid #ffffff1a', borderRadius:'20px', padding:'24px', marginTop:'24px'}}>
            <span style={{background:'#7c3aed', fontSize:'11px', fontWeight:700, padding:'5px 12px', borderRadius:'20px'}}>Video Editing</span>
            <h3 style={{fontSize:'22px', fontWeight:700, margin:'14px 0 0', lineHeight:'1.4'}}>CapCut Se 2 Minute Me Viral Reels Kaise Banayen</h3>
            <p style={{color:'#aaa', fontSize:'14px', marginTop:'8px', lineHeight:'1.6'}}>Bina editing sikhe CapCut AI se viral reels banao. Template, music aur captions ka full tarika.</p>
            <p style={{color:'#888', fontSize:'12px', marginTop:'12px'}}>6 Nov 2026 • 4 min read</p>
            <p style={{color:'#c084fc', fontSize:'14px', fontWeight:700, marginTop:'10px'}}>Read Blog →</p>
          </div>
        </a>

        <a href="/blog/pictory-se-youtube-video-kaise-banayen" style={{textDecoration:'none', color:'white', display:'block'}}>
          <div style={{background:'#ffffff0d', border:'1px solid #ffffff1a', borderRadius:'20px', padding:'24px', marginTop:'16px'}}>
            <span style={{background:'#2563eb', fontSize:'11px', fontWeight:700, padding:'5px 12px', borderRadius:'20px'}}>YOUTUBE</span>
            <h3 style={{fontSize:'22px', fontWeight:700, margin:'14px 0 0', lineHeight:'1.4'}}>Pictory Se Bina Face Dikhae YouTube Video Kaise Banayen</h3>
            <p style={{color:'#aaa', fontSize:'14px', marginTop:'8px', lineHeight:'1.6'}}>Bina camera, bina mic ke faceless channel banao. Script se video banane ka full tarika.</p>
            <p style={{color:'#888', fontSize:'12px', marginTop:'12px'}}>6 Nov 2026 • 5 min read</p>
            <p style={{color:'#60a5fa', fontSize:'14px', fontWeight:700, marginTop:'10px'}}>Read Blog →</p>
          </div>
        </a>

        <div style={{textAlign:'center', marginTop:'18px'}}>
          <a href="/blog" style={{color:'#aaa', fontSize:'14px'}}>View All Blogs →</a>
        </div>
      </div>

      {/* DETAILS - WHITE SECTION - SAME AS BEFORE */}
      <div style={{background:'white', color:'black', padding:'60px 20px'}}>
        <div style={{maxWidth:'800px', margin:'0 auto'}}>
          <h3 style={{fontSize:'28px', fontWeight:900, margin:0}}>Why I Only Recommend These {tools.length}?</h3>
          <p style={{color:'#555', marginTop:'12px', lineHeight:'1.6'}}>Maine 27 AI tools pe $500+ kharch kiye. 90% bakwas nikle. Ye {tools.length} tools se main khud $1200/month kama raha hu PartnerStack se. Pictory se video bana ke YouTube pe dalta hu, Jasper se script likhta hu.</p>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px', marginTop:'24px'}}>
            <div style={{border:'1px solid #ddd', padding:'16px', borderRadius:'12px'}}><b>❌ Without My Link</b><br/><span style={{fontSize:'13px', color:'#777'}}>Full price, no bonus, no support</span></div>
            <div style={{border:'2px solid #22c55e', background:'#f0fdf4', padding:'16px', borderRadius:'12px'}}><b>✅ With RMW Link</b><br/><span style={{fontSize:'13px'}}>20% OFF + My $97 Course FREE + WhatsApp Support</span></div>
          </div>
          <div style={{marginTop:'32px', background:'black', color:'white', padding:'24px', borderRadius:'16px'}}>
            <b>📊 Earnings Proof (Last 30 Days)</b><p style={{color:'#aaa', fontSize:'13px', marginTop:'8px'}}>PartnerStack Dashboard - Pictory: 14 sales x $75 = $1050, Jasper: 8 sales x 25% = $340 ... Total $1390</p><p style={{fontSize:'10px', color:'#666', marginTop:'8px'}}>*Results not typical, but possible with work</p>
          </div>
        </div>
      </div>

      <div style={{textAlign:'center', padding:'20px', color:'#666', fontSize:'11px'}}>RMW AI Tools © 2026 - Lahore, Pakistan | Affiliate Disclosure: We earn commission if you buy via our links.</div>
    </div>
  );
}
