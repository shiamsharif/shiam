import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Container } from '@/components/Container'
import {
  certifications,
  getCategoryLabel,
  getCertification,
} from '@/data/certifications'
import { formatDate } from '@/lib/formatDate'

export function generateStaticParams() {
  return certifications.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
  let { slug } = await params
  let certification = getCertification(slug)

  if (!certification) {
    return { title: 'Certification not found' }
  }

  return {
    title: certification.name,
    description: `${certification.name}, issued by ${certification.organization}.`,
  }
}

function Detail({ label, children }) {
  if (!children) return null

  return (
    <div>
      <dt className="text-sm text-zinc-500 dark:text-zinc-400">{label}</dt>
      <dd className="mt-1 text-sm font-medium text-zinc-900 dark:text-zinc-100">
        {children}
      </dd>
    </div>
  )
}

export default async function CertificationDetail({ params }) {
  let { slug } = await params
  let certification = getCertification(slug)

  if (!certification) notFound()

  let fileType = certification.fileType?.toLowerCase()
  let isImage = certification.file && fileType !== 'pdf'

  return (
    <Container className="mt-16 sm:mt-32">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/certifications"
          className="text-sm font-medium text-teal-500 transition hover:text-teal-600 dark:hover:text-teal-400"
        >
          ← All certifications
        </Link>

        <header className="mt-8 max-w-2xl">
          <p className="text-base font-medium text-teal-500">
            {certification.organization}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {certification.name}
          </h1>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div
            className={
              isImage
                ? 'overflow-hidden'
                : 'overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-900/10 dark:bg-zinc-800 dark:ring-white/10'
            }
          >
            {fileType === 'pdf' ? (
              <object
                data={certification.file}
                type="application/pdf"
                className="h-[70vh] min-h-[32rem] w-full"
              >
                <div className="p-8 text-sm text-zinc-600 dark:text-zinc-400">
                  This browser cannot preview the PDF.{' '}
                  <a className="text-teal-500" href={certification.file}>
                    Open the certificate
                  </a>
                  .
                </div>
              </object>
            ) : certification.file ? (
              <img
                src={certification.file}
                alt={`${certification.name} certificate`}
                className="block h-auto w-full"
              />
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center text-zinc-400 dark:text-zinc-500">
                Certificate preview
              </div>
            )}
          </div>

          <aside>
            <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              Credential details
            </h2>
            <dl className="mt-6 space-y-6 border-t border-zinc-100 pt-6 dark:border-zinc-700/40">
              <Detail label="Issuing organization">
                {certification.organization}
              </Detail>
              <Detail label="Category">
                {getCategoryLabel(certification.category)}
              </Detail>
              <Detail label="Issue date">
                {formatDate(certification.issueDate)}
              </Detail>
              <Detail label="Expiration date">
                {certification.expirationDate
                  ? formatDate(certification.expirationDate)
                  : 'Does not expire'}
              </Detail>
              <Detail label="Credential ID">
                {certification.credentialId}
              </Detail>
            </dl>

            {certification.credentialUrl && (
              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-full bg-zinc-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
              >
                View & Download
              </a>
            )}
          </aside>
        </div>
      </article>
    </Container>
  )
}
