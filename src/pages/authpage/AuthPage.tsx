import './authpage.css'

import { Footer } from '@root/src/components/footer/Footer'
import { SVGComponent } from '@root/src/components/svgComponent/SvgComponent'
import authimage from 'src/assets/authpage.svg'

import { Header } from '../../components/header/Header'

export const AuthPage = () => {
  return (
    <div className='container'>
      <Header />
      <div className='wrapper'>
        <div className='image'>{<SVGComponent src={authimage} />}</div>
        <div className='info'>
          <h1 className='title'>Sign up</h1>
          <div className='description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis explicabo, minima non
            molestiae voluptatem maxime itaque sit excepturi veniam dolorem iste, voluptatum vero
            voluptate. Nulla, natus reprehenderit. Enim, natus dolorem.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
