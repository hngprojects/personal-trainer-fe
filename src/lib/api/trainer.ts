// import { mapApiTrainer, Trainer } from "~/components/trainers/trianers"

// export async function getTrainers(): Promise<Trainer[]> {
//   try {
//     const res = await fetch('/api/trainers', {
//       method: 'GET',
//       headers: { 'Accept': 'application/json' }
//     })

//     if (!res.ok) return []

//     const json = await res.json()

//     if (json.status === "success" && Array.isArray(json.data)) {
//       return json.data.map(mapApiTrainer)
//     }

//     return []
//   } catch (error) {
//     return []
//   }
// }
