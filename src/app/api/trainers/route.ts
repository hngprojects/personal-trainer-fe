// import { NextResponse } from 'next/server'

// export async function GET() {
//   try {
//     const apiUrl = process.env.API_URL
//     const res = await fetch(`${apiUrl}/trainers/`, {
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//     })

//     const text = await res.text()

//     return new Response(text, {
//       status: res.status,
//       headers: { 'Content-Type': 'application/json' },
//     })
//   } catch (error) {
//     return NextResponse.json({ message: "Server Error" }, { status: 500 })
//   }
// }
