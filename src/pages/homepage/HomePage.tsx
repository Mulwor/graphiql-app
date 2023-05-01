import './homepage.css'

import homeimage from '@/assets/homepage.svg'
import { Button } from '@/components/button/Button'
import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import { SVGComponent } from '@/components/svgComponent/SvgComponent'

export const HomePage = () => {
  return (
    <div className='container'>
      <Header />
      <div className='wrapper'>
        <div className='info'>
          <h1 className='title'>GraphiQL</h1>
          <div className='description'>Application for your queries</div>
          <div>придумать что еще тут написать</div>
          <div className='buttons'>
            <Button text='Sign in' />
            <Button text='Sign up' />
          </div>
        </div>
        <div className='image'>{<SVGComponent src={homeimage} />}</div>
      </div>
      <Footer />
    </div>
  )
}
