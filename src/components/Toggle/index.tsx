type ToggleProp = {
  text: string
  choise: boolean
  onChange: () => void
}

export const Toggle = ({ text, choise, onChange }: ToggleProp) => {
  return (
    <label className='relative mr-3 inline-flex cursor-pointer items-center'>
      <input
        type='checkbox'
        value=''
        className='peer sr-only'
        onChange={onChange}
        checked={choise}
      />
      <div className="bg-write peer h-6 w-11 rounded-full border border-mainblue after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-mainblue after:bg-mainblue after:transition-all after:content-[''] peer-checked:bg-mainblue peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:after:bg-white dark:bg-darkblue"></div>
      <span className='ml-1 text-sm'>{text}</span>
    </label>
  )
}
