import { Link } from 'react-router-dom'

type InfoType = {
  nickname: string
  fullname: string
  description: string
}

const info: InfoType[] = [
  {
    nickname: 'Mulwor',
    fullname: 'Ali Adigezalli',
    description: 'Team-Lead, Frontend Developer',
  },
  {
    nickname: 'YuliDemins',
    fullname: 'Yuli Demins',
    description: 'Frontend Developer, Designer',
  },
  {
    nickname: 'sodapng',
    fullname: 'Kamran Ismailov',
    description: 'Frontend Developer, Tech-Lead',
  },
]

export const TeamInfo = () => {
  return (
    <div className='mt-8 lg:mt-20'>
      <div>
        {info.map(({ nickname, fullname, description }) => (
          <div
            key={nickname}
            className='mt-1 hover:text-prussianblue dark:hover:text-white sm:mt-2'
          >
            <Link
              to={`https://github.com/${nickname}`}
              className='flex items-center'
              target='_blank'
            >
              <img
                className='flex h-8 w-8 rounded-full'
                src={`https://github.com/${nickname}.png`}
                alt={nickname}
              />
              <div className='ml-3'>
                <div className='text-sm font-bold'>{fullname}</div>
                <div className='text-xs'>{description}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
