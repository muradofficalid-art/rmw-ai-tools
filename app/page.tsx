export default function Home() {
  return (
    <div style={{minHeight:'100vh', background:'#0a0a0a', color:'white', fontFamily:'Inter, sans-serif'}}>
      {/* HEADER */}
      <div style={{borderBottom:'1px solid #222', padding:'16px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h1 style={{fontSize:'22px', fontWeight:900, margin:0}}>RMW <span style={{color:'#a855f7'}}>AI TOOLS</span></h1>
        <span style={{background:'#22c55e22', color:'#22c55e', padding:'4px 12px', borderRadius:'20px', fontSize:'11px'}}>✅ Tested & Verified</span>
      </div>

      {/* HERO */}
      <div style={{textAlign:'center', padding:'60px 20px'}}>
        <div style={{display:'inline-block', background:'#a855f722', border:'1px solid #a855f744', padding:'6px 16px', borderRadius:'20px', fontSize:'12px', marginBottom:'16px'}}>🎁 Exclusive: Get 20% OFF via my links below</div>
        <h2 style={{fontSize:'42px', fontWeight:900, lineHeight:'1.1', margin:0}}>I Tested 27 AI Tools.<br/><span style={{background:'linear-gradient(90deg,#c084fc,#f472b6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>These 3 Actually Make Money.</span></h2>
        <p style={{color:'#888', marginTop:'12px'}}>No fake reviews. Real earnings proof. Updated Nov 2026 by RMW Lahore Team.</p>
      </div>

      {/* CARDS */}
      <div style={{maxWidth:'1100px', margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'20px', padding:'0 20px 60px'}}>

        {/* PICTORY */}
        <div style={{background:'#ffffff0d', border:'1px solid #ffffff1a', borderRadius:'20px', padding:'24px'}}>
          <div style={{background:'linear-gradient(90deg,#9333ea,#ec4899)', fontSize:'11px', fontWeight:700, padding:'4px 10px', borderRadius:'20px', display:'inline-block'}}>🔥 #1 BEST FOR VIDEO</div>
          <h3 style={{fontSize:'22px', fontWeight:700, margin:'14px 0 0'}}>Pictory AI <span style={{color:'#facc15', fontSize:'14px'}}>⭐ 4.9/5</span></h3>
          <p style={{color:'#aaa', fontSize:'13px', marginTop:'8px'}}>Text to Video in 5 mins. I tested 10 tools, this is fastest for YouTube automation.</p>
          <div style={{marginTop:'12px', fontSize:'13px', lineHeight:'1.8'}}>
            ✅ No editing skills needed<br/>✅ 300+ voices<br/>✅ YouTube ready
          </div>
          <div style={{marginTop:'16px', display:'flex', justifyContent:'space-between', fontSize:'13px'}}><span style={{color:'#666', textDecoration:'line-through'}}>$19/mo</span><span style={{color:'#22c55e', fontWeight:700}}>$75 per sale</span></div>
          <a href="#" style={{marginTop:'16px', display:'block', textAlign:'center', background:'linear-gradient(90deg,#9333ea,#ec4899)', padding:'12px', borderRadius:'12px', fontWeight:900, color:'white', textDecoration:'none'}}>GET DISCOUNT + BONUS →</a>
          <p style={{fontSize:'10px', color:'#666', textAlign:'center', marginTop:'6px'}}>60-day money back guarantee</p>
        </div>

        {/* JASPER */}
        <div style={{background:'#ffffff0d', border:'1px solid #ffffff1a', borderRadius:'20px', padding:'24px'}}>
          <div style={{background:'linear-gradient(90deg,#2563eb,#06b6d4)', fontSize:'11px', fontWeight:700, padding:'4px 10px', borderRadius:'20px', display:'inline-block'}}>BEST FOR WRITING</div>
          <h3 style={{fontSize:'22px', fontWeight:700, margin:'14px 0 0'}}>Jasper AI <span style={{color:'#facc15', fontSize:'14px'}}>⭐ 4.8/5</span></h3>
          <p style={{color:'#aaa', fontSize:'13px', marginTop:'8px'}}>Writes blogs, ads, emails like human. My team saves 20 hours/week with this.</p>
          <div style={{marginTop:'12px', fontSize:'13px', lineHeight:'1.8'}}>
            ✅ SEO optimized<br/>✅ 50+ templates<br/>✅ Plagiarism free
          </div>
          <div style={{marginTop:'16px', display:'flex', justifyContent:'space-between', fontSize:'13px'}}><span style={{color:'#666', textDecoration:'line-through'}}>$39/mo</span><span style={{color:'#22c55e', fontWeight:700}}>25% Lifetime</span></div>
          <a href="#" style={{marginTop:'16px', display:'block', textAlign:'center', background:'linear-gradient(90deg,#2563eb,#06b6d4)', padding:'12px', borderRadius:'12px', fontWeight:900, color:'white', textDecoration:'none'}}>GET DISCOUNT + BONUS →</a>
        </div>

        {/* WRITESONIC */}
        <div style={{background:'#ffffff0d', border:'1px solid #ffffff1a', borderRadius:'20px', padding:'24px'}}>
          <div style={{background:'linear-gradient(90deg,#16a34a,#10b981)', fontSize:'11px', fontWeight:700, padding:'4px 10px', borderRadius:'20px', display:'inline-block'}}>BEST VALUE</div>
          <h3 style={{fontSize:'22px', fontWeight:700, margin:'14px 0 0'}}>Writesonic <span style={{color:'#facc15', fontSize:'14px'}}>⭐ 4.7/5</span></h3>
          <p style={{color:'#aaa', fontSize:'13px', marginTop:'8px'}}>Best for beginners. Cheap and powerful alternative to Jasper.</p>
          <div style={{marginTop:'12px', fontSize:'13px', lineHeight:'1.8'}}>
            ✅ Cheapest<br/>✅ AI Article writer<br/>✅ Free trial
          </div>
          <div style={{marginTop:'16px', display:'flex', justifyContent:'space-between', fontSize:'13px'}}><span style={{color:'#666', textDecoration:'line-through'}}>$16/mo</span><span style={{color:'#22c55e', fontWeight:700}}>30% Lifetime</span></div>
          <a href="#" style={{marginTop:'16px', display:'block', textAlign:'center', background:'linear-gradient(90deg,#16a34a,#10b981)', padding:'12px', borderRadius:'12px', fontWeight:900, color:'white', textDecoration:'none'}}>GET DISCOUNT + BONUS →</a>
        </div>
      </div>

      {/* DETAILS - WHITE SECTION */}
      <div style={{background:'white', color:'black', padding:'60px 20px'}}>
        <div style={{maxWidth:'800px', margin:'0 auto'}}>
          <h3 style={{fontSize:'28px', fontWeight:900, margin:0}}>Why I Only Recommend These 3?</h3>
          <p style={{color:'#555', marginTop:'12px', lineHeight:'1.6'}}>Maine 27 AI tools pe $500+ kharch kiye. 90% bakwas nikle. Ye 3 tools se main khud $1200/month kama raha hu PartnerStack se. Pictory se video bana ke YouTube pe dalta hu, Jasper se script likhta hu.</p>
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
