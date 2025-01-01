import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

// SEO Keywords
const keywords = [
  'Edison Uwihanganye',
  'code with Edison',
  'codewithedison',
  'Fullstack Developer',
  'Computer Scientist',
  'AI Enthusiast',
  'Blockchain Developer',
  'Web Development',
  'Machine Learning',
  'Software Engineering',
  'Tech Mentorship',
  'Rwanda Developer',
  'Next.js Developer',
  'React Developer',
  'TypeScript Expert',
  'kigali developers',
  'Rwanda developers community',
  'kigali tech community',
  'kigali software development community',
  'kigali blockchain community',
  'kigali tech mentors',
  'Rwanda machine learning engireer',
  'kigali tech mentorship platform',
  'kigali tech mentors community',
  'kigali tech mentors for developers',
  'kigali tech mentors for blockchain developers',
  'kigali tech mentors for machine learning engineers',

]

// Structured Data (JSON-LD)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  'name': 'Edison Uwihanganye',
  'jobTitle': 'Fullstack Developer & AI/Blockchain Enthusiast',
  'worksFor': {
    '@type': 'Organization',
    'name': 'CodeWithEdison'
  },
  'alumni': {
    '@type': 'EducationalOrganization',
    'name': 'University of Rwanda'
  },
  'skills': [
    'Web Development',
    'React',
    'Next.js',
    'TypeScript',
    'Machine Learning',
    'Blockchain',
    'Solidity',
    'Node.js'
  ],
  'url': 'https://www.codewithedison.com',
  'sameAs': [
    'https://www.linkedin.com/in/uwihanganye-edison-7b2970236/',
    'https://github.com/codeWithEdison',
    'https://x.com/codewithedison'
  ]
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.codewithedison.com'),
  title: {
    default: 'Edison Uwihanganye | CodeWithEdison - Fullstack Developer & AI Mentor',
    template: '%s | CodeWithEdison'
  },
  description: 'Expert Fullstack Developer and AI/Blockchain Enthusiast. Mentoring 500+ developers, creating innovative tech solutions in Web Development, Machine Learning, and Blockchain technologies.',
  keywords: keywords,
  alternates: {
    canonical: 'https://www.codewithedison.com'
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    title: 'Edison Uwihanganye | CodeWithEdison',
    description: 'Fullstack Developer, AI Mentor, and Blockchain Enthusiast transforming ideas into cutting-edge technological solutions.',
    url: 'https://www.codewithedison.com',
    siteName: 'CodeWithEdison',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Edison Uwihanganye - Fullstack Developer and AI Mentor'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@codewithedison',
    creator: '@codewithedison',
    title: 'Edison Uwihanganye | CodeWithEdison',
    description: 'Fullstack Developer, AI Mentor, and Blockchain Enthusiast transforming ideas into cutting-edge technological solutions.',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        href: '/favicon.ico',
      },
      {
        url: '/favicon.svg',
        href: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180'
      }
    ]
  },
  verification: {
    google: 'YOUR_GOOGLE_SITE_VERIFICATION_CODE',
    // Add other verifications as needed
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}