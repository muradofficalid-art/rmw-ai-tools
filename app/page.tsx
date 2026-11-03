import tools from '../tools.json'

export default function Home() {
  return (
    <main style={{maxWidth:'1000px',margin:'0 auto',padding:'20px'}}>
      <div style={{textAlign:'center',padding:'40px 0'}}>
        <h1 style={{fontSize:'48px',margin:0}}>RMW AI TOOLS 🚀</h1>
        <p style={{fontSize:'18px',opacity:0.8}}>Roz 1 Naya AI Tool Jo Paisa Kamata Hai - 20 High Commission Tools</p>
        <div style={{background:'#1a1a1a',padding:'15px',borderRadius:'10px',marginTop:'20px'}}>
          🔥 <b>Total Earnings Potential:</b> $35-$100 per sale | Daily Updates
        </div>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'15px'}}>
        {tools.map((t:any)=>(
          <div key={t.id} style={{background:'#1a1a1a',border:'1px solid #333',padding:'20px',borderRadius:'15px'}}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <span style={{background:'#333',padding:'5px 10px',borderRadius:'20px',fontSize:'12px'}}>{t.category}</span>
              <span style={{color:'#0f0',fontWeight:'bold'}}>{t.commission}</span>
            </div>
            <h3 style={{margin:'15px 0 5px'}}>{t.name}</h3>
            <p style={{opacity:0.7,fontSize:'14px',margin:'0 0 10px'}}>{t.tagline}</p>
            <p style={{fontSize:'13px',opacity:0.5}}>{t.price}</p>
            <a href={t.link} target="_blank" style={{display:'block',background:'white',color:'black',textAlign:'center',padding:'12px',borderRadius:'10px',textDecoration:'none',fontWeight:'bold',marginTop:'15px'}}>
              Try Free & Earn →
            </a>
          </div>
        ))}
      </div>

      <div style={{textAlign:'center',marginTop:'50px',opacity:0.6,fontSize:'14px'}}>
        Made with ❤️ by RMW - Daily AI Money Tools
      </div>
    </main>
  )
}
