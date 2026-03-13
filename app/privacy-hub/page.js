export const metadata = {
  title: 'Privacy Hub — Block Ads & Protect Your Home Network | Get Notified LLC',
  description: 'Block ads on every device. Stop tracking. Add a home VPN. One device, no subscriptions. Local pickup in Salisbury NC or ships nationwide.',
}

export default function PrivacyHub() {
  const packages = [
    {
      badge: '🔒 Most Popular',
      name: 'Privacy Hub',
      price: '$179',
      installedPrice: '$249',
      tagline: 'Block ads on every screen in your home',
      description: 'Plug it into your router and ads disappear everywhere — Smart TVs, phones, tablets, gaming consoles. Private DNS so your internet provider can\'t track your browsing.',
      features: [
        'Whole-home ad blocking (all devices)',
        'Malware & scam website blocking',
        'Private DNS — ISP can\'t track you',
        'Device monitoring dashboard',
        'Works on Smart TVs, phones, consoles',
        'No monthly fees — ever',
        'Local install available (Salisbury NC)',
      ],
      hardware: 'Raspberry Pi 3B+',
      color: 'blue',
      featured: false,
      cta: 'Get the Privacy Hub',
    },
    {
      badge: '👨‍👩‍👧 Best for Families',
      name: 'Family Hub',
      price: '$199',
      installedPrice: '$279',
      tagline: 'Ad blocking + keep kids safe online',
      description: 'Everything in the Privacy Hub, plus parental controls. Block adult sites, set bedtime schedules, pause any device\'s internet with one tap.',
      features: [
        'Everything in Privacy Hub',
        'Adult site blocking',
        'Per-device internet schedules',
        'Bedtime internet shutoff',
        'Social media filtering',
        'Pause any device instantly',
        'Works on all devices automatically',
      ],
      hardware: 'Raspberry Pi 3B+',
      color: 'green',
      featured: true,
      cta: 'Get the Family Hub',
    },
    {
      badge: '💼 Best for Remote Workers',
      name: 'Secure Hub',
      price: '$229',
      installedPrice: '$299',
      tagline: 'Ad blocking + encrypted home VPN',
      description: 'Privacy Hub plus a built-in VPN. Access your home network securely from anywhere — coffee shops, hotels, airports. Your traffic is always encrypted.',
      features: [
        'Everything in Privacy Hub',
        'Built-in WireGuard VPN',
        'Encrypted access from anywhere',
        'Works on public WiFi safely',
        'Connect unlimited devices',
        'No VPN subscription needed',
        'Remote work ready',
      ],
      hardware: 'Raspberry Pi 3B+',
      color: 'purple',
      featured: false,
      cta: 'Get the Secure Hub',
    },
    {
      badge: '🏠 Full Smart Home',
      name: 'Smart Home Hub',
      price: '$299',
      installedPrice: '$399',
      tagline: 'Privacy + full smart home automation',
      description: 'Everything above plus Home Assistant automation. Control sensors, smart lights, smart plugs, door sensors — all local, no cloud, no subscriptions.',
      features: [
        'Everything in Secure Hub',
        'Home Assistant automation',
        'Zigbee device support',
        'Sensor automation & alerts',
        'Smart plug & lighting control',
        'Leak sensor integration',
        'Works with 1,000+ smart devices',
      ],
      hardware: 'Raspberry Pi 4',
      color: 'gold',
      featured: false,
      cta: 'Get the Smart Home Hub',
    },
  ]

  const colorMap = {
    blue: { border: '#3b82f6', bg: '#eff6ff', badge: '#1d4ed8', text: '#1e40af' },
    green: { border: '#10b981', bg: '#f0fdf4', badge: '#059669', text: '#065f46' },
    purple: { border: '#8b5cf6', bg: '#f5f3ff', badge: '#7c3aed', text: '#4c1d95' },
    gold: { border: '#f59e0b', bg: '#fffbeb', badge: '#d97706', text: '#92400e' },
  }

  return (
    <main style={{ background: '#f8fafc', minHeight: '100vh', fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #1a2744 0%, #0f172a 100%)',
        color: '#fff',
        padding: '80px 24px 60px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(245,158,11,.15)',
            color: '#fbbf24',
            border: '1px solid rgba(245,158,11,.3)',
            borderRadius: 20,
            padding: '6px 16px',
            fontSize: 13,
            fontWeight: 700,
            marginBottom: 20,
            letterSpacing: '.5px',
          }}>
            🔒 GET NOTIFIED LLC — PRIVACY HUB
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 20 }}>
            Block Ads on Every Screen.<br />
            <span style={{ color: '#fbbf24' }}>No Subscriptions. Ever.</span>
          </h1>
          <p style={{ fontSize: 18, color: '#94a3b8', maxWidth: 580, margin: '0 auto 32px', lineHeight: 1.6 }}>
            One small device plugs into your router and instantly protects every phone, tablet, Smart TV, and gaming console in your home.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              '🚫 Blocks ads everywhere',
              '📵 Stops tracking',
              '⚡ Faster internet',
              '🏠 Your data stays home',
            ].map(f => (
              <span key={f} style={{
                background: 'rgba(255,255,255,.08)',
                border: '1px solid rgba(255,255,255,.15)',
                borderRadius: 20,
                padding: '8px 16px',
                fontSize: 14,
                fontWeight: 600,
              }}>{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section style={{ padding: '60px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: 28, fontWeight: 800, color: '#1a2744', marginBottom: 8 }}>
          Choose Your Hub
        </h2>
        <p style={{ textAlign: 'center', color: '#64748b', marginBottom: 48, fontSize: 16 }}>
          All hubs ship pre-configured — plug in and it works. Local install available in Salisbury, NC.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 24,
        }}>
          {packages.map(pkg => {
            const c = colorMap[pkg.color]
            return (
              <div key={pkg.name} style={{
                background: pkg.featured ? c.bg : '#fff',
                border: `2px solid ${pkg.featured ? c.border : '#e2e8f0'}`,
                borderRadius: 16,
                padding: 28,
                position: 'relative',
                boxShadow: pkg.featured ? `0 4px 24px ${c.border}33` : '0 1px 4px rgba(0,0,0,.07)',
                display: 'flex',
                flexDirection: 'column',
              }}>
                {pkg.featured && (
                  <div style={{
                    position: 'absolute',
                    top: -14,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: c.border,
                    color: '#fff',
                    padding: '4px 18px',
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: 800,
                    whiteSpace: 'nowrap',
                    letterSpacing: '.5px',
                  }}>MOST POPULAR</div>
                )}

                <span style={{
                  display: 'inline-block',
                  background: c.bg,
                  color: c.text,
                  border: `1px solid ${c.border}55`,
                  borderRadius: 12,
                  padding: '3px 10px',
                  fontSize: 12,
                  fontWeight: 700,
                  marginBottom: 14,
                  width: 'fit-content',
                }}>{pkg.badge}</span>

                <h3 style={{ fontSize: 22, fontWeight: 800, color: '#1a2744', marginBottom: 6 }}>{pkg.name}</h3>
                <p style={{ fontSize: 14, color: '#64748b', marginBottom: 16, lineHeight: 1.5 }}>{pkg.tagline}</p>

                <div style={{ marginBottom: 20 }}>
                  <span style={{ fontSize: 36, fontWeight: 900, color: '#1a2744' }}>{pkg.price}</span>
                  <span style={{ fontSize: 14, color: '#94a3b8', marginLeft: 4 }}>shipped</span>
                  <div style={{ fontSize: 13, color: c.text, fontWeight: 600, marginTop: 4 }}>
                    {pkg.installedPrice} installed locally
                  </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', flex: 1 }}>
                  {pkg.features.map(f => (
                    <li key={f} style={{ padding: '5px 0', fontSize: 14, color: '#374151', borderBottom: '1px solid #f1f5f9', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <span style={{ color: '#10b981', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 16 }}>
                  Hardware: {pkg.hardware}
                </div>

                <a
                  href={`mailto:gettompoai@gmail.com?subject=${encodeURIComponent(pkg.cta + ' — Get Notified LLC')}&body=${encodeURIComponent('Hi Thomas,\n\nI\'m interested in the ' + pkg.name + ' (' + pkg.price + ' shipped / ' + pkg.installedPrice + ' installed).\n\nMy name: \nMy address: \nPrefer shipped or local install? \n\nAny questions or notes:\n')}`}
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '13px 20px',
                    background: pkg.featured ? c.border : '#1a2744',
                    color: '#fff',
                    borderRadius: 10,
                    fontWeight: 700,
                    fontSize: 15,
                    textDecoration: 'none',
                    transition: 'opacity .2s',
                  }}
                >
                  {pkg.cta} →
                </a>
              </div>
            )
          })}
        </div>
      </section>

      {/* How It Works */}
      <section style={{ background: '#fff', padding: '60px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#1a2744', marginBottom: 48 }}>
            Setup in 3 Steps
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32 }}>
            {[
              { step: '1', icon: '🔌', title: 'Plug into Router', desc: 'Connect the hub to your router with the included ethernet cable.' },
              { step: '2', icon: '⚡', title: 'Power On', desc: 'Plug in the power adapter. The hub boots in 60 seconds.' },
              { step: '3', icon: '✅', title: 'Done', desc: 'Set your router\'s DNS to the hub\'s IP. Takes under 10 minutes — instructions included.' },
            ].map(s => (
              <div key={s.step}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: '#1a2744', color: '#fbbf24',
                  fontSize: 24, fontWeight: 900,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>{s.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1a2744', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Privacy Hub */}
      <section style={{ padding: '60px 24px', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: 28, fontWeight: 800, color: '#1a2744', marginBottom: 48 }}>
          Why Privacy Hub?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {[
            { icon: '📺', title: 'Smart TV Ads — Gone', desc: 'Roku, Fire TV, Samsung — ad blocking works on every screen without any app installs.' },
            { icon: '🕵️', title: 'No More Tracking', desc: 'Stop Google, Meta, and data brokers from logging everywhere you go online.' },
            { icon: '🏠', title: 'Your Data Stays Home', desc: 'No cloud. No microphone. No cameras. Everything runs locally in your house.' },
            { icon: '💸', title: 'No Monthly Bill', desc: 'One-time purchase. No subscription. No renewal. Yours forever.' },
            { icon: '⚡', title: 'Faster Browsing', desc: 'Less junk loading = pages load noticeably faster on every device.' },
            { icon: '🛡️', title: 'Scam Protection', desc: 'Blocks known malware domains before they can reach any device on your network.' },
          ].map(f => (
            <div key={f.title} style={{
              background: '#fff',
              border: '1px solid #e2e8f0',
              borderRadius: 12,
              padding: 22,
              display: 'flex',
              gap: 16,
            }}>
              <span style={{ fontSize: 28, flexShrink: 0 }}>{f.icon}</span>
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1a2744', marginBottom: 5 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'linear-gradient(135deg, #1a2744 0%, #0f172a 100%)',
        padding: '60px 24px',
        textAlign: 'center',
        color: '#fff',
      }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>
          Ready to take back your privacy?
        </h2>
        <p style={{ color: '#94a3b8', fontSize: 16, marginBottom: 32 }}>
          Ships within 2–3 days. Local install available in Salisbury, NC. Free setup support included.
        </p>
        <a
          href="mailto:gettompoai@gmail.com?subject=Privacy%20Hub%20Order&body=Hi%20Thomas%2C%0A%0AI%27d%20like%20to%20order%20a%20Privacy%20Hub.%0A%0APackage%20I%20want%3A%0AShipped%20or%20installed%20locally%3F%0AName%3A%0AAddress%3A%0A"
          style={{
            display: 'inline-block',
            background: '#f59e0b',
            color: '#1a2744',
            padding: '16px 40px',
            borderRadius: 12,
            fontWeight: 800,
            fontSize: 18,
            textDecoration: 'none',
          }}
        >
          Order Now — Email Thomas →
        </a>
        <p style={{ marginTop: 16, color: '#64748b', fontSize: 14 }}>
          Or text/call: <strong style={{ color: '#94a3b8' }}>704-239-7532</strong>
        </p>
      </section>

    </main>
  )
}
