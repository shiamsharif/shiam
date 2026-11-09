import { Button } from '@/components/Button'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getPresentationTypeLabel, presentations } from '@/data/present'

export const metadata = {
  title: 'Presentations',
  description: 'Slides, PDFs, and other presentation materials.',
}

function OpenIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 3.75H3.5a1 1 0 0 0-1 1v7.75a1 1 0 0 0 1 1h7.75a1 1 0 0 0 1-1V9.25M9.25 2.5h4.25v4.25M13.25 2.75l-6 6"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Present() {
  return (
    <SimpleLayout
      title="Presentations."
      intro="A collection of my slide decks, PDFs, and other presentation materials."
    >
      {presentations.length > 0 ? (
        <ul role="list" className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {presentations.map((presentation) => (
            <li
              key={presentation.url}
              className="flex flex-col items-start rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
            >
              <p className="text-xs font-semibold tracking-widest text-teal-500 uppercase">
                {getPresentationTypeLabel(presentation.type)}
              </p>
              <h2 className="mt-3 text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                {presentation.title}
              </h2>
              <Button
                href={presentation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6"
              >
                Open
                <OpenIcon className="h-4 w-4" />
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="rounded-2xl border border-zinc-100 p-8 text-center dark:border-zinc-700/40">
          <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
            Presentations coming soon
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Add an item to the present data file to show it here.
          </p>
        </div>
      )}
    </SimpleLayout>
  )
}
