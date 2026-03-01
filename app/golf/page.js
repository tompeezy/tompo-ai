export const metadata = {
  title: 'TeeEmHigh — Never Buy Golf Balls Again',
  description: 'Play Titleist Pro V1s for free. Honest golf ball reviews, creek ball strategies, and the best deals for smart golfers.',
}

export default function Golf() {
  const featuredBalls = [
    {
      name: 'Titleist Pro V1',
      tagline: 'The GOAT. Period.',
      why: 'The ball Tour pros play. Soft feel, insane spin control, holds greens like glue.',
      price: '$55/dozen retail',
      deal: 'Find them free in creeks 😎',
      link: 'https://www.amazon.com/Titleist-Prior-Generation-Golf-Balls/dp/B09RQWZYQS?tag=teeemhigh-20',
      color: '#ffd700',
    },
    {
      name: 'Kirkland Signature 3-Piece',
      tagline: 'Pro V1 performance for $14',
      why: 'Costco reverse-engineered the Pro V1. Urethane cover, 3-piece construction. Legit.',
      price: '$14/dozen',
      deal: 'Best bang-for-buck in golf',
      link: 'https://www.costco.com/kirkland-signature-3-piece-urethane-cover-golf-ball%2C-2-dozen.product.100532570.html',
      color: '#ff6b6b',
    },
    {
      name: 'Callaway Supersoft',
      tagline: 'Perfect beginner ball',
      why: 'Low compression = longer, straighter shots for slower swing speeds. Soft feel, cheap price.',
      price: '$22/dozen',
      deal: 'Under $2 per ball',
      link: 'https://www.amazon.com/Callaway-Golf-Supersoft-Balls-White/dp/B0BX4DQGDZ?tag=teeemhigh-20',
      color: '#4ecdc4',
    },
  ]

  const gearLinks = [
    {
      emoji: '📏',
      title: 'Rangefinders',
      subtitle: 'Stop guessing. Know your distances.',
      href: 'https://www.amazon.com/s?k=golf+rangefinder&tag=teeemhigh-20',
    },
    {
      emoji: '🧤',
      title: 'Gloves & Accessories',
      subtitle: 'The small stuff that adds up',
      href: 'https://www.amazon.com/s?k=golf+gloves+men&tag=teeemhigh-20',
    },
    {
      emoji: '🎒',
      title: 'Push Carts',
      subtitle: 'Walk the course. Save your back.',
      href: 'https://www.amazon.com/s?k=golf+push+cart&tag=teeemhigh-20',
    },
  ]

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a1a0f',
      color: '#fff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(180deg, #0d2818 0%, #0a1a0f 100%)',
        padding: '80px 20px 60px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(0,212,170,0.1)',
      }}>
        <div style={{
          width: 80,
          height: 80,
          margin: '0 auto 20px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #00d4aa, #00a885)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 40,
          border: '3px solid rgba(255,255,255,0.15)',
        }}>
          ⛳
        </div>
        
        <h1 style={{
          fontSize: 'clamp(32px, 8vw, 48px)',
          fontWeight: 900,
          margin: '0 0 16px 0',
          lineHeight: 1.1,
          background: 'linear-gradient(135deg, #fff 0%, #00d4aa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          I Haven&apos;t Bought Golf Balls<br/>in Years
        </h1>
        
        <p style={{
          fontSize: 20,
          color: '#00d4aa',
          fontWeight: 600,
          margin: '0 0 24px 0',
        }}>
          And you don&apos;t have to either.
        </p>
        
        <p style={{
          fontSize: 16,
          color: '#a0a0a0',
          maxWidth: 500,
          margin: '0 auto 40px',
          lineHeight: 1.6,
        }}>
          Every Sunday, I walk the creek beds at my local course. 
          I find Pro V1s, TP5s, Chrome Softs — barely used. 
          Golfers lose balls. I play them for free. <strong style={{color: '#00d4aa'}}>You can too.</strong>
        </p>

        <a
          href="https://tiktok.com/@teeemhigh"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '16px 48px',
            borderRadius: 50,
            background: 'linear-gradient(135deg, #00d4aa, #00a885)',
            color: '#000',
            fontWeight: 800,
            fontSize: 16,
            textDecoration: 'none',
            letterSpacing: '0.5px',
            transition: 'transform 0.2s',
          }}
        >
          Follow @teeemhigh on TikTok →
        </a>
      </section>

      {/* Philosophy Section */}
      <section style={{
        padding: '60px 20px',
        maxWidth: 800,
        margin: '0 auto',
      }}>
        <h2 style={{
          fontSize: 32,
          fontWeight: 800,
          marginBottom: 24,
          textAlign: 'center',
        }}>
          The Creek Ball Philosophy
        </h2>
        
        <div style={{
          display: 'grid',
          gap: 20,
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        }}>
          {[
            { emoji: '💰', title: 'Stop Overpaying', desc: '$55/dozen for Pro V1s? Nah. Find them free or buy used for $1/ball.' },
            { emoji: '🌱', title: 'Reduce Waste', desc: 'Millions of golf balls end up in water hazards. Pull them out. Play them.' },
            { emoji: '🎯', title: 'Play Without Fear', desc: 'When your ball cost $0, you swing free. No hesitation on risky shots.' },
          ].map((item, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(0,212,170,0.15)',
              borderRadius: 12,
              padding: 24,
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>{item.emoji}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: '#00d4aa' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 14, color: '#a0a0a0', lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Balls */}
      <section style={{
        padding: '60px 20px',
        background: 'rgba(0,212,170,0.03)',
        borderTop: '1px solid rgba(0,212,170,0.1)',
        borderBottom: '1px solid rgba(0,212,170,0.1)',
      }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 32,
            fontWeight: 800,
            marginBottom: 12,
            textAlign: 'center',
          }}>
            The Balls Worth Playing
          </h2>
          <p style={{
            fontSize: 16,
            color: '#a0a0a0',
            textAlign: 'center',
            marginBottom: 40,
          }}>
            No BS. These are the balls I actually play (or recommend).
          </p>

          <div style={{
            display: 'grid',
            gap: 24,
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          }}>
            {featuredBalls.map((ball, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.06)',
                border: `2px solid ${ball.color}40`,
                borderRadius: 16,
                padding: 28,
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  top: -20,
                  right: -20,
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  background: `${ball.color}10`,
                }} />
                
                <h3 style={{
                  fontSize: 22,
                  fontWeight: 800,
                  marginBottom: 6,
                  color: ball.color,
                }}>
                  {ball.name}
                </h3>
                
                <p style={{
                  fontSize: 14,
                  color: '#00d4aa',
                  fontWeight: 600,
                  marginBottom: 12,
                }}>
                  {ball.tagline}
                </p>
                
                <p style={{
                  fontSize: 14,
                  color: '#ccc',
                  lineHeight: 1.5,
                  marginBottom: 16,
                }}>
                  {ball.why}
                </p>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 20,
                  paddingTop: 16,
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                }}>
                  <div>
                    <div style={{ fontSize: 12, color: '#888' }}>Retail</div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>{ball.price}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 12, color: '#888' }}>Smart Move</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#00d4aa' }}>{ball.deal}</div>
                  </div>
                </div>
                
                <a
                  href={ball.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '12px',
                    borderRadius: 8,
                    background: ball.color,
                    color: '#000',
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: 'none',
                  }}
                >
                  View on Amazon →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gear Section */}
      <section style={{
        padding: '60px 20px',
        maxWidth: 800,
        margin: '0 auto',
      }}>
        <h2 style={{
          fontSize: 28,
          fontWeight: 800,
          marginBottom: 32,
          textAlign: 'center',
        }}>
          Other Gear Worth Having
        </h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}>
          {gearLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '20px',
                borderRadius: 12,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
            >
              <span style={{
                fontSize: 32,
                width: 50,
                height: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                background: 'rgba(0,212,170,0.15)',
                flexShrink: 0,
              }}>
                {link.emoji}
              </span>
              <div>
                <div style={{ color: '#fff', fontSize: 16, fontWeight: 700 }}>
                  {link.title}
                </div>
                <div style={{ color: '#888', fontSize: 13, marginTop: 2 }}>
                  {link.subtitle}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 20px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #0a1a0f 0%, #0d2818 100%)',
        borderTop: '1px solid rgba(0,212,170,0.1)',
      }}>
        <h2 style={{
          fontSize: 36,
          fontWeight: 900,
          marginBottom: 16,
          lineHeight: 1.2,
        }}>
          Tee &apos;em high,<br/>let &apos;em fly 🏌️
        </h2>
        
        <p style={{
          fontSize: 16,
          color: '#a0a0a0',
          marginBottom: 32,
          maxWidth: 400,
          margin: '0 auto 32px',
        }}>
          Follow for honest reviews, budget ball picks, and creek ball strategies.
        </p>

        <a
          href="https://tiktok.com/@teeemhigh"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '16px 48px',
            borderRadius: 50,
            background: 'linear-gradient(135deg, #00d4aa, #00a885)',
            color: '#000',
            fontWeight: 800,
            fontSize: 16,
            textDecoration: 'none',
            letterSpacing: '0.5px',
          }}
        >
          @teeemhigh on TikTok
        </a>

        <div style={{
          marginTop: 48,
          fontSize: 12,
          color: '#555',
        }}>
          <p style={{ margin: '0 0 8px 0' }}>
            As an Amazon Associate, I earn from qualifying purchases.
          </p>
          <p style={{ margin: 0 }}>
            © 2026 TeeEmHigh · Powered by <a href="https://tompoai.shop" style={{color: '#00d4aa', textDecoration: 'none'}}>Tompo AI</a>
          </p>
        </div>
      </section>
    </div>
  )
}
