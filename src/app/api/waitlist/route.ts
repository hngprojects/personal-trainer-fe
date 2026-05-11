import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const apiUrl = process.env.API_URL
    const body = await req.json()

    const fullUrl = `${apiUrl}/waitlist`
    console.log('[DEBUG] Fetching to:', fullUrl)

    const backendRes = await fetch(fullUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: body.email,
      }),
    })

    const data = await backendRes.json()
    console.log('[DEBUG] Backend response data:', data)

    return NextResponse.json(data, { status: backendRes.status })
  } catch (error) {
    console.error('[API ERROR]:', error)
    return NextResponse.json(
      { message: 'Could not connect to the waitlist service.' },
      { status: 500 }
    )
  }
}
