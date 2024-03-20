import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '4 Pilihan Game Hoki188 yang sering JP di COBLOS4D',
  description: 'slot77, judi slot triofus, indoslot, jpslot, live hongkong, data hk, live draw hk tercepat, slot online, judi338, hoki188, situs deposit dana 10k, slot anti rungkat, slot pragmatic, infini88, bomslot, hoki55, slot dana gratis, dana saldo gratis, slot dana tanpa potongan, keluaran sgp hari ini, keluaran sdy hari ini, keluaran hk hari ini, prediksi togel apa besok, ',
  verification: {
    google: '17I5CCSLClHuCsfUPROcbZIwIl4KRnyxqtG1OYEtYMk',
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
