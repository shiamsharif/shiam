import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import {
  certificateCategories,
  certifications,
  getCategoryLabel,
  getSortedCertifications,
  normalizeCertificateCategory,
} from '@/data/certifications'
import { formatDate } from '@/lib/formatDate'

const filters = [{ value: 'all', label: 'All' }, ...certificateCategories]

function CertificatePreview({ certification }) {
  if (!certification.file) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center bg-zinc-100 text-sm font-medium text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500">
        Certificate
      </div>
    )
  }

  if (certification.fileType?.toLowerCase() === 'pdf') {
    return (
      <div className="flex aspect-[4/3] items-center justify-center bg-zinc-100 text-sm font-semibold text-teal-600 dark:bg-zinc-800 dark:text-teal-400">
        PDF certificate
      </div>
    )
  }

  return (
    <div className="relative aspect-[4/3] bg-zinc-100 dark:bg-zinc-800">
      <Image
        src={certification.file}
        alt={`${certification.name} certificate`}
        fill
        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
        className="object-cover"
      />
    </div>
  )
}

export const metadata = {
  title: 'Certifications',
  description:
    'Professional certifications, credentials, and continuous learning achievements.',
}

function FilterTabs({ activeCategory }) {
  return (
    <div className="mb-12 flex flex-wrap gap-3">
      {filters.map((filter) => (
        <Link
          key={filter.value}
          href={
            filter.value === 'all'
              ? '/certifications'
              : `/certifications?category=${filter.value}`
          }
          className={clsx(
            'rounded-full px-4 py-2 text-sm font-medium ring-1 transition',
            activeCategory === filter.value
              ? 'bg-zinc-800 text-white ring-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:ring-zinc-100'
              : 'text-zinc-600 ring-zinc-200 hover:text-teal-500 hover:ring-teal-500 dark:text-zinc-400 dark:ring-zinc-700 dark:hover:text-teal-400 dark:hover:ring-teal-400',
          )}
        >
          {filter.label}
        </Link>
      ))}
    </div>
  )
}

export default async function Certifications({ searchParams }) {
  let resolvedSearchParams = await searchParams
  let activeCategory = normalizeCertificateCategory(
    resolvedSearchParams?.category,
  )
  let visibleCertifications = getSortedCertifications(activeCategory)

  return (
    <SimpleLayout
      title="Certifications and Licenses."
      intro="A collection of professional certifications that reflect my commitment to continuous learning and building stronger technical skills."
    >
      <FilterTabs activeCategory={activeCategory} />

      {visibleCertifications.length > 0 ? (
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visibleCertifications.map((certification) => (
            <Card as="li" key={certification.slug}>
              <div className="relative z-10 w-full overflow-hidden rounded-2xl ring-1 ring-zinc-900/10 dark:ring-white/10">
                <CertificatePreview certification={certification} />
              </div>
              <p className="relative z-10 mt-6 text-xs font-semibold uppercase tracking-widest text-teal-500">
                {getCategoryLabel(certification.category)}
              </p>
              <div className="mt-6">
                <Card.Title
                  href={`/certifications/${certification.slug}`}
                  as="h2"
                >
                  {certification.name}
                </Card.Title>
              </div>
              <p className="relative z-10 mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                {certification.organization}
              </p>
              <Card.Description>
                Issued {formatDate(certification.issueDate)}
              </Card.Description>
              <Card.Cta>View credential</Card.Cta>
            </Card>
          ))}
        </ul>
      ) : certifications.length > 0 ? (
        <div className="rounded-2xl border border-zinc-100 p-8 text-center dark:border-zinc-700/40">
          <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
            No {getCategoryLabel(activeCategory)} certifications yet
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Add a certificate with category &quot;{activeCategory}&quot; in the
            certifications data file to show it here.
          </p>
        </div>
      ) : (
        <div className="rounded-2xl border border-zinc-100 p-8 text-center dark:border-zinc-700/40">
          <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
            Certifications coming soon
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Verified credentials and certificates will be added here.
          </p>
        </div>
      )}
    </SimpleLayout>
  )
}
