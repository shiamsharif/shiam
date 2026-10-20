import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s | Sheike Shiam Sharif',
    default: 'Sheike Shiam Sharif | Project Manager & Software Developer',
  },
  description:
    'Project Manager and Software Developer in Dhaka, Bangladesh, coordinating software delivery at Miicon Solutions Limited.',
  openGraph: {
    type: 'website',
    title: 'Sheike Shiam Sharif | Project Manager & Software Developer',
    description:
      'Project planning, team coordination, and hands-on software development.',
    siteName: 'Sheike Shiam Sharif',
  },
  twitter: {
    card: 'summary',
    title: 'Sheike Shiam Sharif | Project Manager & Software Developer',
    description:
      'Project planning, team coordination, and hands-on software development.',
  },
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  let personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sheike Shiam Sharif',
    jobTitle: 'Project Manager',
    description: 'Project Manager and Software Developer',
    email: 'mailto:shiam.sharif.07@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhaka',
      addressCountry: 'Bangladesh',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Miicon Solutions Limited',
      url: 'https://www.miiconsolutions.com',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Northern University Bangladesh',
    },
    sameAs: [
      'https://github.com/shiamsharif',
      'https://www.linkedin.com/in/shiam-sharif',
      'https://www.instagram.com/shiam_sharif/',
    ],
  }

  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, '\\u003c'),
          }}
        />
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
