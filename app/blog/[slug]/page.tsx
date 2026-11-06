export default function BlogDetail() {
  return (
    <div style={{minHeight:'100vh', background:'#0a0a0a', color:'white', fontFamily:'Inter, sans-serif'}}>
      
      {/* TOP BAR */}
      <div style={{borderBottom:'1px solid #222', padding:'14px 16px', display:'flex', justifyContent:'space-between', alignItems:'center', maxWidth:'800px', margin:'0 auto'}}>
        <a href="/" style={{color:'white', fontWeight:900, fontSize:'18px', textDecoration:'none'}}>RMW <span style={{color:'#a855f7'}}>AI TOOLS</span></a>
        <a href="/blog" style={{color:'#aaa', fontSize:'13px', textDecoration:'none'}}>← All Blogs</a>
      </div>

      <div style={{maxWidth:'800px', margin:'0 auto', padding:'30px 16px 60px'}}>

        {/* CATEGORY + TITLE */}
        <span style={{background:'linear-gradient(90deg,#9333ea,#ec4899)', fontSize:'11px', fontWeight:700, padding:'6px 14px', borderRadius:'20px'}}>VIDEO EDITING • BEGINNER GUIDE</span>
        <h1 style={{fontSize:'36px', fontWeight:900, lineHeight:'1.2', margin:'18px 0 12px'}}>CapCut Se 2 Minute Me Viral Reels Kaise Banayen (2026 Guide)</h1>
        <p style={{color:'#aaa', fontSize:'16px', lineHeight:'1.6', margin:0}}>Bina editing sikhe, bina paisa lagaye - CapCut AI se aisi reels banao jo log poori dekhen aur share karen.</p>

        {/* AUTHOR BOX */}
        <div style={{display:'flex', alignItems:'center', gap:'12px', marginTop:'22px', background:'#ffffff0d', border:'1px solid #ffffff1a', padding:'12px', borderRadius:'14px'}}>
          <div style={{width:'44px', height:'44px', borderRadius:'50%', background:'linear-gradient(90deg,#9333ea,#ec4899)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:900, fontSize:'18px'}}>R</div>
          <div>
            <div style={{fontWeight:700, fontSize:'14px'}}>RMW Team • Lahore</div>
            <div style={{color:'#888', fontSize:'12px'}}>6 Nov 2026 • 4 min read • Updated Nov 2026</div>
          </div>
          <span style={{marginLeft:'auto', background:'#22c55e22', color:'#22c55e', fontSize:'11px', padding:'4px 10px', borderRadius:'20px'}}>✅ Tested</span>
        </div>

        {/* HERO IMAGE BOX */}
        <div style={{marginTop:'24px', background:'linear-gradient(135deg,#1e1b4b,#7c3aed,#db2777)', borderRadius:'20px', padding:'36px 20px', textAlign:'center'}}>
          <div style={{fontSize:'48px'}}>🎬</div>
          <div style={{fontSize:'22px', fontWeight:900, marginTop:'8px'}}>CapCut AI = Viral Reels Machine</div>
          <div style={{fontSize:'13px', color:'#e9d5ff', marginTop:'6px'}}>Template + Auto Captions + Trending Music = Views</div>
        </div>

        {/* QUICK ANSWER BOX */}
        <div style={{background:'#fefce8', color:'#111', borderRadius:'16px', padding:'18px', marginTop:'24px', borderLeft:'5px solid #facc15'}}>
          <b>⚡ Quick Answer:</b>
          <p style={{margin:'8px 0 0', fontSize:'14px', lineHeight:'1.6'}}>CapCut me trending template lo, apni 3-4 clips dalo, Auto Captions ON karo, trending music lagao aur 1080p me export karke Reels pe dalo. Pehle 2 second me hook lazmi do.</p>
        </div>

        {/* CONTENT */}
        <h2 style={{fontSize:'24px', fontWeight:900, marginTop:'32px'}}>Step 1: Sahi Template Choose Karo</h2>
        <p style={{color:'#bbb', lineHeight:'1.8', fontSize:'15px'}}>CapCut kholo → Templates → Search karo "Viral Reels" ya "Trending". Jo template ke uses 100K+ hon, wohi lo. Galat template = kam views.</p>

        <h2 style={{fontSize:'24px', fontWeight:900, marginTop:'28px'}}>Step 2: Clips Dal ke Auto-Cut Karo</h2>
        <p style={{color:'#bbb', lineHeight:'1.8', fontSize:'15px'}}>Apni 3-4 chhoti clips (har clip 1-2 sec) dalo. CapCut ka <b style={{color:'white'}}>Auto Cut</b> khud beat pe cut kar dega. Lambi boring clips mat dalo.</p>

        <div style={{background:'#18181b', border:'1px solid #333', borderRadius:'14px', padding:'16px', marginTop:'16px'}}>
          <b>✅ Viral Formula:</b>
          <p style={{color:'#aaa', fontSize:'14px', lineHeight:'1.8', margin:'8px 0 0'}}>Hook (0-2 sec) → Problem (2-5 sec) → Solution (5-20 sec) → CTA (Last 2 sec)<br/>Example Hook: "Ye 1 trick 99% logon ko nahi pata!"</p>
        </div>

        <h2 style={{fontSize:'24px', fontWeight:900, marginTop:'28px'}}>Step 3: Captions + Music + Export</h2>
        <p style={{color:'#bbb', lineHeight:'1.8', fontSize:'15px'}}>1. <b style={{color:'white'}}>Auto Captions</b> ON karo - 80% log bina awaz ke dekhte hain.<br/>2. Trending music lagao - Volume 15-20% rakho.<br/>3. Export → 1080p, 30fps → Save karo.</p>

        <h2 style={{fontSize:'24px', fontWeight:900, marginTop:'28px'}}>Roz Kitni Reels Dalni Hain?</h2>
        <div style={{background:'white', color:'black', borderRadius:'16px', padding:'0', overflow:'hidden', marginTop:'14px'}}>
          <div style={{display:'flex', justifyContent:'space-between', padding:'12px 16px', background:'#f3f4f6', fontWeight:700, fontSize:'13px'}}><span>Day</span><span>Reels</span></div>
          <div style={{display:'flex', justifyContent:'space-between', padding:'12px 16px', fontSize:'14px', borderTop:'1px solid #eee'}}><span>Week 1</span><span>1 Reel / Day</span></div>
          <div style={{display:'flex', justifyContent:'space-between', padding:'12px 16px', fontSize:'14px', borderTop:'1px solid #eee'}}><span>Week 2+</span><span>2 Reels / Day</span></div>
        </div>

        {/* FAQ */}
        <h2 style={{fontSize:'24px', fontWeight:900, marginTop:'32px'}}>FAQs</h2>
        <div style={{background:'#18181b', borderRadius:'14px', padding:'16px', marginTop:'12px'}}>
          <b>Q: Kya CapCut free hai?</b><p style={{color:'#aaa', fontSize:'14px', margin:'6px 0 0', lineHeight:'1.6'}}>Haan, free version hi kaafi hai. Pro ki zaroorat nahi shuru me.</p>
        </div>
        <div style={{background:'#18181b', borderRadius:'14px', padding:'16px', marginTop:'10px'}}>
          <b>Q: Views kyun nahi aa rahe?</b><p style={{color:'#aaa', fontSize:'14px', margin:'6px 0 0', lineHeight:'1.6'}}>Pehle 2 second ka hook weak hai. Hook badlo, 7 din roz post karo, farq nazar aayega.</p>
        </div>

        {/* CTA */}
        <div style={{marginTop:'32px', background:'linear-gradient(90deg,#9333ea,#ec4899)', borderRadius:'20px', padding:'26px', textAlign:'center'}}>
          <div style={{fontSize:'22px', fontWeight:900}}>CapCut Free Me Try Karo</div>
          <p style={{fontSize:'13px', color:'#fce7f3', marginTop:'6px'}}>Mere link se 20% OFF + Free Templates Bundle</p>
          <a href="/" style={{display:'inline-block', background:'white', color:'black', padding:'12px 26px', borderRadius:'30px', fontWeight:900, fontSize:'14px', textDecoration:'none', marginTop:'14px'}}>GET CAPCUT DISCOUNT →</a>
          <p style={{fontSize:'11px', color:'#fbcfe8', marginTop:'8px'}}>60-day money back guarantee</p>
        </div>

        <div style={{textAlign:'center', marginTop:'26px'}}>
          <a href="/blog" style={{color:'#aaa', fontSize:'14px'}}>← Back to All Blogs</a>
          <span style={{color:'#444', margin:'0 10px'}}>|</span>
          <a href="/" style={{color:'#aaa', fontSize:'14px'}}>Back to Home →</a>
        </div>

      </div>
    </div>
  );
}
