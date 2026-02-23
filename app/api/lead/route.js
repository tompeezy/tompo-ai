import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function POST(request) {
  try {
    const data = await request.json()
    
    // Log lead to console (visible in Vercel logs)
    console.log('🔔 NEW LEAD:', JSON.stringify(data))
    
    // In production, you'd send this to a database, email, or CRM
    // For now, we log it and return success
    // TODO: Add email notification to gettompoai@gmail.com
    
    return NextResponse.json({ success: true, message: 'Lead captured!' })
  } catch (error) {
    console.error('Lead capture error:', error)
    return NextResponse.json({ success: false, error: 'Failed to capture lead' }, { status: 500 })
  }
}
