import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

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

export const metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I'm Shiam Sharif, who loves reading books.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              If you had asked me a few years ago what I wanted to become, I would have simply said, "a software engineer." Today, my answer is a little different. I still love writing code, but I'm just as interested in understanding how products are built, how teams work together, and how research can solve real-world problems.
            </p>
            <p>
              My journey started in 2009 when I used my father's Sony VAIO for the first time. Like many kids, I mostly clicked around without knowing what I was doing. But as I grew older, I became curious about what was happening behind the screen. That curiosity eventually led me to programming, and I realized that I could write a few lines of code and create something from nothing. I was hooked.
            </p>
            <p>
              As a kid, I wasn't someone who talked a lot. I spent most of my time reading books, playing football or cricket, and later experimenting with computers. I've always enjoyed learning new things. Looking back, I think that habit has had the biggest influence on my life.
            </p>
            <p>
              One of the hardest times I went through was having L5/S1 spine surgery when I was young. Recovery wasn't easy, but it changed me. Since I couldn't do many of the things I normally enjoyed, I spent more time reading books and the Holy Quran. That period taught me patience and made reading a part of my everyday life. Even today, whenever I want to learn something new, my first instinct is to find a good book.
            </p>

            <p>
              At university, I enjoyed almost every programming-related course, but Data Structures and Algorithms was my favorite. It was known as one of the toughest subjects, and I was happy to earn a perfect GPA in it. More than the grade itself, I enjoyed solving problems and understanding why things worked the way they did.
            </p>
            <p>
              Something else happened along the way. While reading <i>Inspired: How to Create Products Customers Love</i>, I started looking beyond code. I became interested in how successful products are planned, how engineering teams make decisions, and how technical leaders balance business goals with technology. That's what sparked my interest in technical project management.
            </p>
            <p>
              My goal isn't to stop being an engineer. I actually want to stay close to technology. I want to become someone who understands software engineering, AI research, product development, and project management well enough to connect all of them. I enjoy building things, but I also enjoy helping people build them together.
            </p>
            <p>
              Outside of work, you'll usually find me with a cup of coffee and a book. One of my dreams is to have a quiet farmhouse with a small library where I can read, think, work on research, and occasionally write code without distractions.
            </p>
            <p>
              I'm still learning, still making mistakes, and still building. I hope that never changes.
            </p>
            
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:spencer@planetaria.tech"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              spencer@planetaria.tech
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
