import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const projects = [
  {
    name: 'Bikroy Plus',
    initials: 'BP',
    highlights: [
      'Contributed to a point-of-sale and inventory management platform built with Django REST Framework.',
      'Built and enhanced APIs for blog management, product import and export, dashboards, product summaries, customers, suppliers, and inventory workflows.',
      'Implemented structured API responses, filtering, sorting, data validation, and Excel-based product imports.',
    ],
    link: { href: 'https://bikroyplus.com/', label: 'bikroyplus.com' },
  },
  {
    name: 'Shodai Cart',
    initials: 'SC',
    highlights: [
      'Developed the complete storefront frontend using Django Templates, HTML, CSS, JavaScript, and Tailwind CSS.',
      'Created responsive, user-friendly interfaces and connected frontend pages to dynamic, backend-driven data.',
    ],
    link: { href: 'https://shodaicart.com/', label: 'shodaicart.com' },
  },
  {
    name: 'Miicon Solutions Website',
    initials: 'MS',
    highlights: [
      'Developed and deployed a full-stack Django application featuring a Q&A forum, blog, and job portal.',
      'Used Django Templates, Bootstrap, and Google reCAPTCHA to deliver secure, accessible, and user-friendly features.',
    ],
    link: {
      href: 'https://www.miiconsolutions.com/',
      label: 'miiconsolutions.com',
    },
  },
  {
    name: 'NUB ITSupport',
    initials: 'NI',
    highlights: [
      'Built a Django REST API-powered issue-reporting platform for students, teachers, and staff.',
      'Implemented workflows for reporting, managing, and tracking computer lab issues in real time.',
    ],
    link: {
      href: 'https://github.com/shiamsharif/NUB_ITSupport',
      label: 'github.com/shiamsharif/NUB_ITSupport',
    },
  },
  {
    name: 'Zenorin',
    initials: 'ZE',
    highlights: [
      'Developed a responsive service showcase application using Next.js and Tailwind CSS.',
      'Focused on a polished, consistent experience across desktop and mobile devices.',
    ],
    link: { href: 'https://zenorin.com/', label: 'zenorin.com' },
  },

]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description:
    'A selection of web applications and digital products I’ve helped build.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects I’ve helped bring to life."
      intro="A selection of full-stack applications, backend systems, and responsive web experiences I’ve built or contributed to using Django, Django REST Framework, Next.js, and modern frontend technologies."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div
              aria-hidden="true"
              className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-semibold text-teal-600 shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:text-teal-400 dark:ring-0"
            >
              {project.initials}
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {project.link.href ? (
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              ) : (
                project.name
              )}
            </h2>
            <ul className="relative z-10 mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="text-teal-500" aria-hidden="true">
                    •
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
