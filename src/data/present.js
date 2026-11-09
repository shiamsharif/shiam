// Add each new slide deck, PDF, or other presentation resource here.
//
// type can be 'slide', 'pdf', or 'other'. The URL may point to a hosted
// document (such as Google Slides) or to a file inside the public folder.
export const presentations = [
  // {
  //   title: 'Presentation title',
  //   type: 'pdf',
  //   url: '/presentations/presentation-name.pdf',
  // },
  {
    title: 'Nagorik Technologies Ltd.',
    type: 'slide',
    url: 'https://docs.google.com/presentation/d/1V6onJwq0j_GfY3opcgt-6AZ_5Hm9WZxM-wyaRXUmqW4/edit?usp=sharing',
  },
]

export function getPresentationTypeLabel(type) {
  let labels = {
    slide: 'Slide deck',
    pdf: 'PDF',
    other: 'Presentation',
  }

  return labels[type] ?? labels.other
}
