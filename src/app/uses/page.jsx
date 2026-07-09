import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description:
    'The hardware, software, and tools I use every day for software development, learning, and managing projects.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Hardware and software I use every day."
      intro="Here's a look at the hardware and software I use every day for software development, learning, and managing projects."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstations">
          <Tool title="MacBook Pro (2019)">
            My portable development machine. Although it is an Intel-based
            MacBook with 8GB RAM, it handles my day-to-day development workflow
            well. I mainly use it for Django, Next.js, Docker, documentation,
            and project management while I am on the go.
          </Tool>
          <Tool title="Custom Ubuntu PC">
            My primary workstation for heavy development. It runs Ubuntu Linux
            and is equipped with 16GB RAM, a Radeon RX 580 8GB graphics card,
            and a 512GB SSD. I use it for backend development, Docker
            containers, virtualization, Linux server tasks, and workloads that
            need more computing power than my laptop.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Desk setup">
          <Tool title="Xiaomi 24 inch Monitor">
            A clean and comfortable external display that gives me more screen
            space for coding, debugging, and multitasking throughout the day.
          </Tool>
          <Tool title="A4Tech KRS-83 Keyboard">
            A simple and reliable keyboard that I have been using for years. It
            gets the job done without distractions.
          </Tool>
          <Tool title="Logitech M196">
            My everyday wireless mouse. It is lightweight, comfortable, and
            perfect for long coding sessions.
          </Tool>
          <Tool title="A4Tech OP-620D Mouse">
            A dependable backup that I still use regularly on my desktop setup.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Audio">
          <Tool title="Oraimo Earphones">
            Perfect for meetings, online courses, and staying focused while
            working.
          </Tool>
          <Tool title="Mi Portable Speaker">
            I use it for music, videos, and casual listening when I am not
            wearing earphones.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            My primary code editor. I use it for Django, React, Next.js, Python,
            JavaScript, and TypeScript development.
          </Tool>
          <Tool title="Antigravity">
            One of the tools in my development workflow for exploring,
            prototyping, and working with AI-assisted software development.
          </Tool>
          <Tool title="Ollama CLI">
            I use Ollama CLI when I want to experiment with local language
            models and AI workflows from the terminal.
          </Tool>
          <Tool title="GST CLI">
            A command-line tool I use as part of my everyday development and
            project workflow.
          </Tool>
          <Tool title="IntelliJ IDEA">
            I occasionally use IntelliJ when working with Java or exploring
            JVM-based technologies.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Terminal">
          <Tool title="macOS Terminal">
            My default terminal for everyday development on macOS.
          </Tool>
          <Tool title="iTerm2">
            I use iTerm2 whenever I want a more powerful and customizable
            terminal experience.
          </Tool>
          <Tool title="Ubuntu Terminal">
            On my desktop, I primarily work inside Ubuntu&apos;s native terminal
            for Linux development and server-related tasks.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Browser">
          <Tool title="Google Chrome">
            My main browser for development, debugging, testing, and everyday
            browsing.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Database tools">
          <Tool title="pgAdmin">
            The tool I use most often for managing PostgreSQL databases.
          </Tool>
          <Tool title="DBeaver">
            A great all-in-one database client whenever I need to work with
            multiple database systems.
          </Tool>
        </ToolsSection>
        <ToolsSection title="API development">
          <Tool title="Bruno">
            My preferred API client because it is lightweight, fast, and stores
            API collections as files.
          </Tool>
          <Tool title="Postman">
            I also use Postman for testing APIs and collaborating with
            teammates.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Version control">
          <Tool title="Git & GitHub">
            Every project I work on is managed with Git and hosted on GitHub,
            making collaboration and version tracking straightforward.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Containers">
          <Tool title="Docker">
            Docker is part of my daily workflow for running PostgreSQL, Redis,
            Django applications, and maintaining consistent development
            environments.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Deployment">
          <Tool title="Vercel">
            I deploy Next.js applications to Vercel for quick previews and
            production deployments.
          </Tool>
          <Tool title="Netlify">
            I also use Netlify for hosting frontend projects and static
            websites.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Databases">
          <Tool title="PostgreSQL, MySQL, Redis, and MongoDB">
            My primary database is PostgreSQL, but I am also comfortable working
            with MySQL, Redis, and MongoDB whenever a project requires them.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            The first tool I open when reviewing UI designs or collaborating
            with designers.
          </Tool>
          <Tool title="Canva">
            Great for creating presentations, social media graphics, and quick
            design assets.
          </Tool>
          <Tool title="Google Stitch">
            A helpful tool I use while experimenting with AI-assisted interface
            design.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Notion">
            My main workspace for documentation, notes, organizing projects,
            planning work, and keeping project documentation in one place.
          </Tool>
          <Tool title="Google Docs">
            Perfect for collaborating on documents and sharing ideas quickly.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Project management">
          <Tool title="Kanban Boards">
            I enjoy visual task management and usually organize my work using
            Kanban workflows.
          </Tool>
          <Tool title="Notion">
            I also use Notion to keep track of project planning and
            documentation.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Communication">
          <Tool title="Discord">
            The platform I use most for team collaboration and project
            discussions.
          </Tool>
          <Tool title="Google Meet">
            My choice for meetings, interviews, and client calls.
          </Tool>
        </ToolsSection>
        <ToolsSection title="AI tools">
          <Tool title="ChatGPT, Claude, Gemini, Perplexity, and NotebookLM">
            Artificial intelligence has become a big part of my daily workflow.
            I use these tools for brainstorming, debugging, documentation,
            research, learning, and improving code quality.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Reading">
          <Tool title="Books">
            If there is one hobby that defines me, it is reading. I am a
            passionate book enthusiast and always have a book within reach. I
            genuinely enjoy collecting books, and every month I add a few new
            titles to my personal library.
          </Tool>
          <Tool title="Pen-and-paper reading">
            While I appreciate digital resources for work and research, I still
            prefer pen-and-paper reading. There is something special about
            holding a physical book, taking notes in the margins, and spending
            uninterrupted time with it.
          </Tool>
          <Tool title="Fiction and non-fiction">
            I enjoy both fiction and non-fiction. Fiction helps me explore
            different perspectives and stories, while non-fiction allows me to
            continuously learn about technology, psychology, productivity,
            business, history, and personal growth. Reading has become more than
            a hobby. It is a lifelong habit that shapes the way I think, learn,
            and solve problems.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Favorite tech stack">
          <Tool title="Django, Django REST Framework, Next.js, PostgreSQL, and Docker">
            If I had to choose one stack to build almost anything, this would be
            it.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
