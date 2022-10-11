import dynamic from 'next/dynamic'
import Head from 'next/head'
import About from '../src/components/About'
import Blog from '../src/components/Blog'
import Contact from '../src/components/Contact'
import Home from '../src/components/Home'
import Resume from '../src/components/Resume'
import AboutMe from '../src/components/sections/AboutMe'

import ContactForm from '../src/components/sections/ContactForm'
import ContactInfo from '../src/components/sections/ContactInfo'

import ResumeSection from '../src/components/sections/Resume'
import Services from '../src/components/sections/Services'
import Skills from '../src/components/sections/Skills'

import TypingAnimation from '../src/components/TypingAnimation'
import Work from '../src/components/Work'
import ContentContainer from '../src/layout/ContentContainer'
import Header from '../src/layout/Header'
import Layout from '../src/layout/Layout'
const RecentWorks = dynamic(
  () => import('../src/components/sections/RecentWorks'),
  {
    ssr: false,
  },
)

const bio = `<p>
<strong>Je suis Julien Darras</strong>
Développeur Junior
</p>`

const services = [
  {
    icon: 'fa fa-html5',
    title: 'Front-end',
    desc:
      'Modern and mobile-ready website that will help you reach all of your marketing.',
  },
  {
    icon: 'fa fa-code',
    title: 'Back-End',
    desc:
      'UI/UX focus on the user, frontend focus on the settings of the user, and backend focus on the data.',
  },
  {
    icon: 'fa fa-wordpress',
    title: 'WordPress Development',
    desc: 'WordPress development services improve business websites.',
  },
  {
    icon: 'fa fa-server',
    title: 'WordPress Security',
    desc:
      'Security consultants can check the code and scan for vulnerabilities.',
  },
]
const animationText = [
  'Développeur Web/ Web Mobile Junior',
  "Développeur d'applications mobiles",
]
const IndexDark = () => {
  return (
    <Layout bg={'gradient'}>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/rtl-new.css" />
        <link rel="stylesheet" href="css/demos/demo-3-colors.css" />
        <link rel="stylesheet" href="css/new-skin/classic-skin.css" />
      </Head>
      <Header noSideBarBtn animationText={animationText} />
      <Home>
        <div className="profile no-photo">
          {/* profile image */}
          <div
            className="slide"
            style={{ backgroundImage: 'url(images/profile2.jpg)' }}
          />
          {/* profile titles */}
          <div className="title">Julien Darras</div>

          <TypingAnimation data={animationText} />
          {/* profile socials */}
          <div className="social">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/julien-darras/"
            >
              <span className="fa fa-github" />
            </a>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a href="#" className="lnk">
              <span className="text">Télécharger CV</span>
              <span className="ion ion-android-download" />
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          {/* <Services serviceList={services} /> */}
          {/* <Pricing /> */}
          {/* <Clients />
          <Testimonials />
          <FunFact /> */}
        </About>
        <Resume>
          <ResumeSection />
          <Skills />
          {/* <Quote /> */}
        </Resume>
        <Work>
          <RecentWorks />
        </Work>
        {/* <Blog>
          <BlogSection />
        </Blog> */}
        <Contact>
          <ContactInfo />
          <ContactForm />
        </Contact>
      </ContentContainer>
    </Layout>
  )
}
export default IndexDark
