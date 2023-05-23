export const Preloader = () => {
  return (
    <div className='preloader z-{100} fixed inset-0 overflow-hidden bg-whitesmoke dark:bg-prussianblue'>
      <div className='loader z-{101} relative inset-1/2 h-16 w-16 animate-spin rounded-full border-8 border-seagreen border-t-fuchsia'></div>
    </div>
  )
}
