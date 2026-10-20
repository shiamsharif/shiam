import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const projects = [
  {
    name: 'Bikroy Plus',
    initials: 'BP',
    purpose: 'A point-of-sale and inventory management platform.',
    contribution:
      'Project planning support, requirements clarification, task tracking, feature verification, REST APIs, dashboards, and Excel import/export.',
    technologies: ['Django REST Framework', 'REST APIs', 'Excel'],
    link: { href: 'https://bikroyplus.com/', label: 'bikroyplus.com' },
  },
  {
    name: 'Miicon Solutions Website',
    initials: 'MS',
    purpose:
      'A company platform covering content, recruitment, contact management, staff dashboards, and employee verification.',
    contribution:
      'Implementation coordination, issue tracking, testing support, and backend development.',
    technologies: ['Django', 'Django Templates', 'Bootstrap', 'reCAPTCHA'],
    link: {
      href: 'https://www.miiconsolutions.com/',
      label: 'miiconsolutions.com',
    },
  },
  {
    name: 'ShodaiCart',
    initials: 'SC',
    purpose: 'An e-commerce platform for building and operating online stores.',
    contribution:
      'Independently developed the frontend using Django Templates and Tailwind CSS, including responsive, reusable interface components.',
    technologies: ['Django Templates', 'Tailwind CSS', 'JavaScript'],
    link: { href: 'https://shodaicart.com/', label: 'shodaicart.com' },
  },
  {
    name: 'Protocol People',
    initials: 'PP',
    purpose: 'An employee management platform.',
    contribution:
      'Built notification workflows for attendance reminders, leave updates, and company announcements.',
    technologies: ['Firebase Cloud Messaging', 'Celery', 'Redis'],
    link: {
      href: 'https://protocol.miicon.net/',
      label: 'protocol.miicon.net',
    },
  },
  {
    name: 'NUB ITSupport',
    initials: 'NI',
    purpose:
      'A university lab issue-reporting platform for students, teachers, and staff.',
    contribution:
      'Built Django REST APIs for issue submission, management, and status tracking.',
    technologies: ['Python', 'Django REST Framework', 'REST APIs'],
    link: {
      href: 'https://github.com/shiamsharif/NUB_ITSuppot',
      label: 'github.com/shiamsharif/NUB_ITSuppot',
    },
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
    'Selected projects coordinated and developed by Sheike Shiam Sharif, including business platforms, e-commerce, employee management, and REST APIs.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Selected projects and contributions."
      intro="A selection of products I’ve helped plan, coordinate, test, and build. Each entry separates the project’s purpose from my specific contribution."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2"
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
            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {project.purpose}
            </p>
            <div className="relative z-10 mt-5">
              <h3 className="text-xs font-semibold tracking-wide text-zinc-800 uppercase dark:text-zinc-200">
                My contribution
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {project.contribution}
              </p>
            </div>
            <ul className="relative z-10 mt-5 flex flex-wrap gap-2" role="list">
              {project.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {technology}
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
