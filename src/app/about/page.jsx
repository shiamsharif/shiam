import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

const experience = [
  {
    company: 'Miicon Solutions Limited',
    role: 'Project Manager',
    arrangement: 'Hybrid',
    start: { label: 'September 2025', dateTime: '2025-09' },
    end: { label: 'Present' },
    highlights: [
      'Coordinate project planning and delivery for Bikroy Plus, Protocol People, and the Miicon Solutions platform.',
      'Translate requirements into actionable tasks and prioritize work in ClickUp.',
      'Track progress, dependencies, and blockers across active work.',
      'Collaborate with frontend and backend developers.',
      'Coordinate testing, bug tracking, and feature verification.',
      'Maintain documentation and communicate project updates.',
    ],
  },
  {
    company: 'Exoveon',
    role: 'Software Developer',
    arrangement: 'Part-time',
    start: { label: 'September 2025', dateTime: '2025-09' },
    end: { label: 'March 2026', dateTime: '2026-03' },
    highlights: [
      'Independently developed the ShodaiCart frontend using Django Templates and Tailwind CSS.',
      'Built responsive, reusable UI components.',
      'Contributed to Zenorin using Next.js and Tailwind CSS.',
    ],
  },
]

const skillGroups = [
  {
    title: 'Project management',
    skills: [
      'Project Planning',
      'Requirements Analysis',
      'Task Prioritization',
      'Team Coordination',
      'Progress and Milestone Tracking',
      'Stakeholder Communication',
      'Risk and Issue Tracking',
      'Testing Coordination',
      'Project Documentation',
      'Agile/Scrum and SDLC',
      'ClickUp',
    ],
  },
  {
    title: 'Software development',
    skills: [
      'Python',
      'Django and Django REST Framework',
      'REST API Development and Integration',
      'JavaScript',
      'React and Next.js',
      'Tailwind CSS',
      'PostgreSQL and MySQL',
      'Git and GitHub',
      'Postman',
      'Celery and Redis',
      'Docker fundamentals',
    ],
  },
]

function SocialLink({ className, href, children, icon: Icon }) {
  let isExternal = typeof href === 'string' && /^https?:\/\//.test(href)

  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function LocationIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 2.75a7 7 0 0 0-7 7c0 5.25 7 11.5 7 11.5s7-6.25 7-11.5a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'About Sheike Shiam Sharif, a Project Manager and Software Developer at Miicon Solutions Limited in Dhaka, Bangladesh.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Sheike Shiam Sharif"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              priority
            />
          </div>
        </div>

        <div className="lg:order-first lg:row-span-2">
          <p className="text-sm font-semibold tracking-wide text-teal-600 uppercase dark:text-teal-400">
            About
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I bring project direction and development context together.
          </h1>
          <div className="mt-6 space-y-6 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’m Sheike Shiam Sharif, a Project Manager at Miicon Solutions
              Limited. I coordinate software projects by clarifying
              requirements, prioritizing tasks, tracking progress, and keeping
              team members and stakeholders aligned.
            </p>
            <p>
              My day-to-day work includes team coordination, testing
              coordination, documentation, blocker tracking, and clear project
              updates. I’m interested in both technical and broader business
              projects, wherever thoughtful planning and communication can help
              a team deliver well.
            </p>
            <p>
              My software development background helps me understand technical
              challenges and communicate effectively with engineers. I can
              connect delivery decisions with the practical work involved in
              APIs, interfaces, data, testing, and deployment.
            </p>
            <p>
              I’m preparing for CAPM to strengthen my project management
              knowledge. I hold a BSc in Computer Science and Engineering from
              Northern University Bangladesh, with a GPA of 3.80/4.00.
            </p>
          </div>
        </div>

        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.instagram.com/shiam_sharif/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/shiamsharif"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/shiam-sharif"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Connect on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:shiam.sharif.07@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              shiam.sharif.07@gmail.com
            </SocialLink>
            <li className="mt-4 flex text-sm font-medium text-zinc-800 dark:text-zinc-200">
              <LocationIcon className="h-6 w-6 flex-none fill-zinc-500" />
              <span className="ml-4">Dhaka, Bangladesh</span>
            </li>
          </ul>
        </div>
      </div>

      <section aria-labelledby="experience-heading" className="mt-24 sm:mt-32">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-teal-600 uppercase dark:text-teal-400">
            Career
          </p>
          <h2
            id="experience-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
          >
            Experience
          </h2>
        </div>
        <div className="mt-10 space-y-12">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="grid gap-5 border-t border-zinc-100 pt-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,2fr)] dark:border-zinc-700/40"
            >
              <div>
                <h3 className="font-semibold text-zinc-800 dark:text-zinc-100">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {item.company} · {item.arrangement}
                </p>
                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
                  <time dateTime={item.start.dateTime}>{item.start.label}</time>{' '}
                  <span aria-hidden="true">—</span>{' '}
                  <time dateTime={item.end.dateTime}>{item.end.label}</time>
                </p>
              </div>
              <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-teal-500" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="skills-heading" className="mt-24 sm:mt-32">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-teal-600 uppercase dark:text-teal-400">
            Capabilities
          </p>
          <h2
            id="skills-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
          >
            Skills
          </h2>
        </div>
        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2" role="list">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-zinc-200 px-3 py-1.5 text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Container>
  )
}
