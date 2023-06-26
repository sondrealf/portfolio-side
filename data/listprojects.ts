import reactspring from './logos/reactspring-icon.png'
import tailwind from './logos/tailwindcss-icon.svg'
import gatsbyjs from './logos/gatsbyjs-icon.svg'
import nextjs from './logos/nextjs-icon.svg'
import reactlogo from './logos/react-icon.svg'
import firebase from './logos/firebase.svg'
import chakraui from './logos/chakra-ui.svg'
import w3_css from './logos/w3_css-icon.svg'
import w3_html from './logos/w3_html5-icon.svg'
import w3_js from './logos/w3_js-icon.svg'
import front1 from './images/front1.png'
import back1 from './images/back1.png'
import cvFront from './images/cvFront.png'
import cvBak from './images/cvBak.png'
import nalaFront from './images/nalaFront.png'
import nalaBack from './images/nalaBack.png'
import vamosFront from './images/vamosFront.png'
import vamosBack from './images/vamosBack.png'

const data: any[] = [
  {
    header: 'Backpack trip website',
    subheader: 'A school project about backpacking page',
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
        name: 'Firebase',
        logo: firebase,
        features: ['Firestore', 'Authentication'],
      },
      {
        name: 'Chakra UI',
        logo: chakraui,
        features: [],
      },
    ],
    frontImage: vamosFront,
    backImage: vamosBack,
    source: 'https://github.com/sondrealf/vamos',
    live: 'https://pu.alfnes.dev/',
  },
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
        features: ['useSpring'],
      },
    ],
    frontImage: front1,
    backImage: back1,
    source: 'https://github.com/sondrealf/portfolio-side',
    live: '',
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
    frontImage: cvFront,
    backImage: cvBak,
    source: 'https://github.com/sondrealf/cv',
    live: 'https://cv.alfnes.dev/',
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
    frontImage: nalaFront,
    backImage: nalaBack,
    source: 'https://github.com/Ulisman/Webtek-prosjekt',
    live: 'https://nala.alfnes.dev/',
  },
]
export default data
