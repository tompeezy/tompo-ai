'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'contact_form', timestamp: new Date().toISOString() })
      })
      setStatus('sent')
      setForm({ name: '', email: '', phone: '', service: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-success">
        <p style={{ fontSize: '2rem', marginBottom: '12px' }}>🎉</p>
        <p>Thanks! We&apos;ll be in touch within 24 hours.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name *</label>
        <input
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
          placeholder="Your name"
        />
      </div>
      <div className="form-group">
        <label>Email *</label>
        <input
          type="email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          required
          placeholder="you@business.com"
        />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="tel"
          value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
          placeholder="(optional)"
        />
      </div>
      <div className="form-group">
        <label>What are you interested in?</label>
        <select
          value={form.service}
          onChange={e => setForm({ ...form, service: e.target.value })}
        >
          <option value="">Select a service...</option>
          <option value="chatbot">AI Customer Chatbot ($500)</option>
          <option value="workflow">Workflow Automation ($300)</option>
          <option value="reporting">Smart Reporting ($200)</option>
          <option value="social">Social Media Automation ($400)</option>
          <option value="email">Email & Lead Systems ($350)</option>
          <option value="custom">Custom AI Solution</option>
          <option value="not-sure">Not sure yet — help me decide</option>
        </select>
      </div>
      <div className="form-group">
        <label>Tell us about your business</label>
        <textarea
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          placeholder="What's eating up your time? What would you love to automate?"
        />
      </div>
      <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Get Your Free Consultation →'}
      </button>
      {status === 'error' && <p className="form-error">Something went wrong. Email us at gettompoai@gmail.com instead!</p>}
    </form>
  )
}
