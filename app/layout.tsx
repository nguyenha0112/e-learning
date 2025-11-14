import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/components/AuthContext'
import { StudyEngEraHeader } from '@/components/StudyEngEraHeader'
import { AIChatBot } from '@/components/AIChatBot'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StudyEngEra - Nền tảng học tiếng Anh trực tuyến',
  description: 'Nền tảng học tiếng Anh trực tuyến hàng đầu Việt Nam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <StudyEngEraHeader />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <AIChatBot />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}