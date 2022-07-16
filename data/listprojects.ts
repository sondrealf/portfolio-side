import reactspring from './logos/reactspring-icon.png'
import tailwind from './logos/tailwindcss-icon.svg'
import gatsbyjs from './logos/gatsbyjs-icon.svg'
import nextjs from './logos/nextjs-icon.svg'
import reactlogo from './logos/react-icon.svg'
import w3_css from './logos/w3_css-icon.svg'
import w3_html from './logos/w3_html5-icon.svg'
import w3_js from './logos/w3_js-icon.svg'
import front1 from './images/front1.png'
import back1 from './images/back1.png'

const data: any[] = [
  {
    header: 'Portfolio website',
    subheader: 'A personal website about me',
    technology: [
      {
        name: 'NextJS',
        logo: nextjs,
        features: [],
      },
      {
        name: 'Tailwind CSS',
        logo: tailwind,
        features: [],
      },
      {
        name: 'ReactSpring',
        logo: reactspring,
        features: ['useSpring', 'useTrail', 'transitions'],
      },
    ],
    frontImage: front1,
    backImage: back1,
    source: '#',
    live: '#',
  },
  {
    header: 'CV',
    subheader: 'A CV page about me',
    technology: [
      {
        name: 'Gatsby',
        logo: gatsbyjs,
        features: [],
      },
      {
        name: 'Tailwind CSS',
        logo: tailwind,
        features: [],
      },
    ],
    frontImage: front1,
    backImage: back1,
    source: '#',
    live: '#',
  },
  {
    header: 'Dog website',
    subheader: 'A website about the dog Nala',
    technology: [
      {
        name: 'HTML',
        logo: w3_html,
        features: [],
      },
      {
        name: 'CSS',
        logo: w3_css,
        features: [],
      },
      {
        name: 'JavaScript',
        logo: w3_js,
        features: [],
      },
    ],
    frontImage: front1,
    backImage: back1,
    source: '#',
    live: '#',
  },
]
export default data
