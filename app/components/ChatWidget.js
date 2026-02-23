'use client'
import { useState, useRef, useEffect } from 'react'

const FLOW = [
  {
    id: 'welcome',
    bot: "Hey there! 👋 I'm the Tompo AI assistant. I can help you figure out how AI automation can save your business time. What brings you here?",
    options: [
      { label: "I want to automate something", next: 'business_type' },
      { label: "Just browsing", next: 'browsing' },
      { label: "I have a question", next: 'question' },
    ]
  },
  {
    id: 'browsing',
    bot: "No problem! Take a look around. If you want to chat later, I'm right here. Or you can book a free 15-min call anytime — no pressure. 😎",
    options: [
      { label: "Actually, tell me more", next: 'business_type' },
      { label: "How do I book a call?", next: 'book' },
    ]
  },
  {
    id: 'question',
    bot: "Sure thing! You can type your question below, or if you'd rather talk to a human, drop your email and we'll get back to you within 24 hours.",
    input: true,
    next: 'capture_email'
  },
  {
    id: 'business_type',
    bot: "Nice! What kind of business are you running?",
    options: [
      { label: "Restaurant / Food", next: 'size' },
      { label: "Retail / Shop", next: 'size' },
      { label: "Service Business", next: 'size' },
      { label: "Real Estate", next: 'size' },
      { label: "Other", next: 'size' },
    ]
  },
  {
    id: 'size',
    bot: "Got it! How many people on your team?",
    options: [
      { label: "Just me", next: 'pain' },
      { label: "2-5 people", next: 'pain' },
      { label: "6-20 people", next: 'pain' },
      { label: "20+", next: 'pain' },
    ]
  },
  {
    id: 'pain',
    bot: "What's eating up most of your time right now?",
    options: [
      { label: "Answering customer questions", next: 'capture_email' },
      { label: "Social media / marketing", next: 'capture_email' },
      { label: "Follow-ups & emails", next: 'capture_email' },
      { label: "Data entry & reports", next: 'capture_email' },
      { label: "All of the above 😅", next: 'capture_email' },
    ]
  },
  {
    id: 'capture_email',
    bot: "We can definitely help with that! Drop your name and email below and we'll send you a free automation plan for your business. Or book a call if you'd rather chat live.",
    form: true,
  },
  {
    id: 'book',
    bot: "Easy! Just email us at gettompoai@gmail.com or fill out the contact form on this page. We'll set up a free 15-minute call to talk about what we can automate for you. No strings attached! 🤙",
    options: [
      { label: "I'll send an email", next: 'thanks' },
      { label: "Tell me more first", next: 'business_type' },
    ]
  },
  {
    id: 'thanks',
    bot: "Awesome! Looking forward to hearing from you. Talk soon! 🚀",
    options: []
  },
]

function getStep(id) {
  return FLOW.find(s => s.id === id) || FLOW[0]
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [currentStep, setCurrentStep] = useState('welcome')
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const [formSent, setFormSent] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [started, setStarted] = useState(false)
  const messagesEnd = useRef(null)

  useEffect(() => {
    if (messagesEnd.current) {
      messagesEnd.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  const openChat = () => {
    setOpen(true)
    if (!started) {
      setStarted(true)
      const step = getStep('welcome')
      setMessages([{ type: 'bot', text: step.bot }])
    }
  }

  const pickOption = (option) => {
    setMessages(prev => [...prev, { type: 'user', text: option.label }])
    const next = getStep(option.next)
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: next.bot }])
      setCurrentStep(option.next)
    }, 500)
  }

  const sendInput = () => {
    if (!inputValue.trim()) return
    setMessages(prev => [...prev, { type: 'user', text: inputValue }])
    setInputValue('')
    const step = getStep(currentStep)
    if (step.next) {
      const next = getStep(step.next)
      setTimeout(() => {
        setMessages(prev => [...prev, { type: 'bot', text: next.bot }])
        setCurrentStep(step.next)
      }, 500)
    }
  }

  const submitForm = async (e) => {
    e.preventDefault()
    // Store lead data - sends to our API endpoint
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'chat_widget', timestamp: new Date().toISOString() })
      })
    } catch (err) {
      // silently fail - we still show success to user
    }
    setFormSent(true)
    setMessages(prev => [...prev,
      { type: 'user', text: `${formData.name} — ${formData.email}` },
      { type: 'bot', text: "Got it! 🎉 We'll be in touch within 24 hours with your free automation plan. Talk soon!" }
    ])
    setCurrentStep('thanks')
  }

  const step = getStep(currentStep)

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <span>💬 Tompo AI</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.type}`}>{msg.text}</div>
            ))}
            {step.options && step.options.length > 0 && currentStep !== 'thanks' && (
              <div className="chat-options">
                {step.options.map((opt, i) => (
                  <button key={i} className="chat-option-btn" onClick={() => pickOption(opt)}>
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
            {step.form && !formSent && (
              <form onSubmit={submitForm} style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                <input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  required
                  style={{ padding: '8px 12px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', fontFamily: 'inherit', fontSize: '.85rem' }}
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  required
                  style={{ padding: '8px 12px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', fontFamily: 'inherit', fontSize: '.85rem' }}
                />
                <input
                  type="tel"
                  placeholder="Phone (optional)"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  style={{ padding: '8px 12px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', fontFamily: 'inherit', fontSize: '.85rem' }}
                />
                <button type="submit" className="btn btn-primary" style={{ padding: '10px', fontSize: '.85rem', justifyContent: 'center' }}>
                  Send My Info 🚀
                </button>
              </form>
            )}
            <div ref={messagesEnd} />
          </div>
          {step.input && (
            <div className="chat-input-area">
              <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendInput()}
                placeholder="Type your message..."
              />
              <button onClick={sendInput}>Send</button>
            </div>
          )}
        </div>
      )}
      <button className="chat-toggle" onClick={openChat}>
        {open ? '✕' : '💬'}
      </button>
    </div>
  )
}
