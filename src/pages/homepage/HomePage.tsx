import './homepage.css'

import { Footer } from '@root/src/components/footer/Footer'
import { SVGComponent } from '@root/src/components/svgComponent/SvgComponent'
import homeimage from 'src/assets/homepage.svg'

import { Header } from '../../components/header/Header'

export const HomePage = () => {
  return (
    <div className='container'>
      <Header />
      <div className='wrapper'>
        <div className='info'>
          <h1 className='title'>GraphiQL</h1>
          <div className='description'>
            Application for your queries
          </div>
          <div>придумать что еще тут написать</div>
        </div>
        <div className='image'>{<SVGComponent src={homeimage} />}</div>
      </div>
      <Footer />
    </div>
  )
}
