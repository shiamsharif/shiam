export const certificateCategories = [
  { value: 'swe', label: 'SWE' },
  { value: 'pm', label: 'PM' },
  { value: 'research', label: 'Research' },
  { value: 'else', label: 'Else' },
]

// Add certificate images and PDFs to `public/certificates`, then add an entry
// here. Use a path such as `/certificates/certificate-name.pdf` for `file`.
//
// category: 'swe' for software engineering, 'pm' for project/product
// management, 'research' for research work, and 'else' for everything else.
//
// displayOrder controls which certificate appears first. Use 1 for the first
// item, 2 for the second, etc. Certificates without displayOrder are sorted by
// newest issue date after ordered certificates.
export const certifications = [
  // {
  //   slug: 'certificate-name',
  //   name: 'Certificate name',
  //   organization: 'Issuing organization',
  //   category: 'swe',
  //   displayOrder: 1,
  //   issueDate: '2026-07-09',
  //   expirationDate: null,
  //   credentialId: 'ABC-123',
  //   credentialUrl: 'https://example.com/verify/ABC-123',
  //   file: '/certificates/certificate-name.pdf',
  //   fileType: 'pdf',
  // },
  {
    slug: 'free-introduction-project-management-professional-pmp',
    name: 'Free Introduction: Project Management Professional (PMP)®',
    organization: 'Project Management Institute (PMI.org)',
    category: 'pm',
    displayOrder: 1,
    issueDate: '2026-07-05',
    expirationDate: null,
    credentialId: '',
    credentialUrl: 'https://drive.google.com/file/d/1czrcYXJhLBwkxq3S7463xk5_AlRyD9r_/view?usp=sharing',
    file: '/certificates/FIPMP.png',
    fileType: 'image',
  },
  {
    slug: 'project-management',
    name: 'Project Management',
    organization: 'FutureNation',
    category: 'pm',
    displayOrder: 2,
    issueDate: '2026-07-03',
    expirationDate: null,
    credentialId: '',
    credentialUrl: 'https://drive.google.com/file/d/1elr4Ax4BeAX3iMamcO-_EshQI3lbdds6/view?usp=sharing',
    file: '/certificates/PM.png',
    fileType: 'image',
  },
  {
    slug: 'Introduction-to-Python',
    name: 'Introduction to Python',
    organization: 'DataCamp',
    category: 'swe',
    displayOrder: 1,
    issueDate: '2024-10-24',
    expirationDate: null,
    credentialId: '#36,783,536',
    credentialUrl: 'https://drive.google.com/file/d/1_M8M5DO2yLXs058idHJibU7kSWyFJKhm/view?usp=drive_link',
    file: '/certificates/ITP.png',
    fileType: 'image',
  },
  {
    slug: 'Introduction-to-SQL',
    name: 'Introduction to SQL',
    organization: 'DataCamp',
    category: 'swe',
    displayOrder: 2,
    issueDate: '2024-11-04',
    expirationDate: null,
    credentialId: '#36,873,228',
    credentialUrl: 'https://drive.google.com/file/d/13A4aQHgrCeZoYp-CK4G6CErUcNLh_muB/view?usp=sharing',
    file: '/certificates/ITS.png',
    fileType: 'image',
  },
  {
    slug: 'International-Student-LED-Con-2023',
    name: 'International Student LED-Con 2023',
    organization: 'IEEE',
    category: 'research',
    displayOrder: 1,
    issueDate: '2023-13-04',
    expirationDate: null,
    credentialId: '',
    credentialUrl: 'https://drive.google.com/file/d/1XOTfBskL1TCto8fVJUdqPGqhjzkMukGG/view?usp=sharing',
    file: '/certificates/IEEE.png',
    fileType: 'image',
  },
]



export function normalizeCertificateCategory(category) {
  return certificateCategories.some(({ value }) => value === category)
    ? category
    : 'all'
}

export function getCategoryLabel(category) {
  if (category === 'all') return 'All'

  return (
    certificateCategories.find(({ value }) => value === category)?.label ??
    'Else'
  )
}

export function getSortedCertifications(category = 'all') {
  let activeCategory = normalizeCertificateCategory(category)

  return certifications
    .filter((certification) => {
      if (activeCategory === 'all') return true
      return certification.category === activeCategory
    })
    .toSorted((a, b) => {
      let aOrder = a.displayOrder ?? Number.POSITIVE_INFINITY
      let bOrder = b.displayOrder ?? Number.POSITIVE_INFINITY

      if (aOrder !== bOrder) return aOrder - bOrder

      let aDate = new Date(`${a.issueDate}T00:00:00Z`).getTime()
      let bDate = new Date(`${b.issueDate}T00:00:00Z`).getTime()

      if (aDate !== bDate) return bDate - aDate

      return a.name.localeCompare(b.name)
    })
}

export function getCertification(slug) {
  return certifications.find((certification) => certification.slug === slug)
}
