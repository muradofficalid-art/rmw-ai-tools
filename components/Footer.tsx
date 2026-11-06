export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        
        {/* 1. About */}
        <div>
          <h3 className="text-xl font-bold mb-3">RMW AI Tools</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Best AI Tools ke honest reviews aur guides. 
            Hum aapko batate hain kaunsa AI tool aapke liye best hai aur usse paise kaise kamayen.
          </p>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/blog" className="hover:text-white">All Blogs</a></li>
            <li><a href="/blog/capcut-se-viral-reels-kaise-banayen" className="hover:text-white">CapCut Guide</a></li>
            <li><a href="/blog/pictory-se-youtube-video-kaise-banayen" className="hover:text-white">Pictory Guide</a></li>
          </ul>
        </div>

        {/* 3. Contact - Kal Gmail yahan daalenge */}
        <div>
          <h3 className="text-lg font-bold mb-3">Contact Us</h3>
          <p className="text-gray-400 text-sm mb-2">
            Koi sawal hai? Humein email karein:
          </p>
          <p className="text-sm font-semibold text-yellow-400">
            YOUR-EMAIL-HERE@gmail.com
          </p>
          <p className="text-gray-500 text-xs mt-4">
            Hum 24 hours me reply karne ki koshish karte hain.
          </p>
        </div>

      </div>

      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-500">
        © 2026 RMW AI Tools. All Rights Reserved.
      </div>
    </footer>
  );
}
