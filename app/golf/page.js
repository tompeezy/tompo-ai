export const metadata = {
  title: 'TeeEmHigh — Golf Ball Reviews, Deals & Creek Finds',
  description: 'Tee em high, let em fly. Honest golf ball reviews, budget picks, and the best deals for golfers who play smart.',
}

export default function Golf() {
  const links = [
    {
      emoji: '🏌️',
      title: 'Best Golf Balls Under $25',
      subtitle: 'Top 3 budget balls that actually perform',
      href: 'https://www.amazon.com/s?k=golf+balls+best+seller&tag=teeemhigh-20',
      color: '#00d4aa',
    },
    {
      emoji: '👑',
      title: 'Titleist Pro V1 (The GOAT)',
      subtitle: 'The ball I play — found free in creeks',
      href: 'https://www.amazon.com/Titleist-Prior-Generation-Golf-Balls/dp/B09RQWZYQS?tag=teeemhigh-20',
      color: '#ffd700',
    },
    {
      emoji: '💰',
      title: 'Kirkland Signature 3-Piece',
      subtitle: '$14/dozen — Pro V1 performance for 1/3 the price',
      href: 'https://www.costco.com/kirkland-signature-3-piece-urethane-cover-golf-ball%2C-2-dozen.product.100532570.html',
      color: '#ff6b6b',
    },
    {
      emoji: '🎯',
      title: 'Callaway Supersoft',
      subtitle: 'Best beginner ball. Soft, straight, cheap.',
      href: 'https://www.amazon.com/Callaway-Golf-Supersoft-Balls-White/dp/B0BX4DQGDZ?tag=teeemhigh-20',
      color: '#4ecdc4',
    },
    {
      emoji: '🔥',
      title: 'Srixon Soft Feel',
      subtitle: 'Most slept on ball in golf. Under $20.',
      href: 'https://www.amazon.com/Srixon-Soft-Feel-Dozen-White/dp/B0BVNHM4XR?tag=teeemhigh-20',
      color: '#ff9f43',
    },
    {
      emoji: '📏',
      title: 'Best Golf Rangefinders',
      subtitle: 'Stop guessing distances. Game changer.',
      href: 'https://www.amazon.com/s?k=golf+rangefinder&tag=teeemhigh-20',
      color: '#a29bfe',
    },
    {
      emoji: '🧤',
      title: 'Golf Gloves & Accessories',
      subtitle: 'The small stuff that makes a big difference',
      href: 'https://www.amazon.com/s?k=golf+gloves+men&tag=teeemhigh-20',
      color: '#74b9ff',
    },
    {
      emoji: '🤖',
      title: 'Tompo AI — AI Tools for Small Business',
      subtitle: 'Our AI automation company',
      href: 'https://tompoai.shop',
      color: '#636e72',
    },
  ]

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0a1a0f 0%, #0d2818 30%, #0a1a0f 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>
      {/* Profile Section */}
      <div style={{
        width: 100,
        height: 100,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #00d4aa, #00a885)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 48,
        marginBottom: 16,
        border: '3px solid rgba(255,255,255,0.2)',
      }}>
        ⛳
      </div>
      
      <h1 style={{
        color: '#ffffff',
        fontSize: 28,
        fontWeight: 800,
        margin: '0 0 4px 0',
        letterSpacing: '-0.5px',
      }}>
        TeeEmHigh
      </h1>
      
      <p style={{
        color: '#00d4aa',
        fontSize: 16,
        margin: '0 0 8px 0',
        fontWeight: 600,
      }}>
        Tee &apos;em high, let &apos;em fly 🏌️
      </p>
      
      <p style={{
        color: '#a0a0a0',
        fontSize: 14,
        margin: '0 0 32px 0',
        textAlign: 'center',
        maxWidth: 300,
      }}>
        Golf ball reviews, deals &amp; creek finds. Play better. Spend less.
      </p>

      {/* Links */}
      <div style={{
        width: '100%',
        maxWidth: 420,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}>
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: '16px 20px',
              borderRadius: 14,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
            }}
          >
            <span style={{
              fontSize: 28,
              width: 44,
              height: 44,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              background: `${link.color}15`,
              flexShrink: 0,
            }}>
              {link.emoji}
            </span>
            <div>
              <div style={{
                color: '#ffffff',
                fontSize: 15,
                fontWeight: 700,
              }}>
                {link.title}
              </div>
              <div style={{
                color: '#888',
                fontSize: 12,
                marginTop: 2,
              }}>
                {link.subtitle}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* TikTok Follow CTA */}
      <a
        href="https://tiktok.com/@teeemhigh"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: 32,
          padding: '14px 40px',
          borderRadius: 50,
          background: 'linear-gradient(135deg, #00d4aa, #00a885)',
          color: '#000',
          fontWeight: 800,
          fontSize: 15,
          textDecoration: 'none',
          letterSpacing: '0.5px',
        }}
      >
        Follow @teeemhigh on TikTok
      </a>

      {/* Disclaimer */}
      <p style={{
        color: '#555',
        fontSize: 10,
        marginTop: 32,
        textAlign: 'center',
        maxWidth: 360,
        lineHeight: 1.4,
      }}>
        As an Amazon Associate, I earn from qualifying purchases. 
        Some links on this page are affiliate links.
      </p>

      {/* Footer */}
      <p style={{
        color: '#333',
        fontSize: 11,
        marginTop: 16,
      }}>
        © 2026 TeeEmHigh · Powered by Tompo AI
      </p>
    </div>
  )
}
