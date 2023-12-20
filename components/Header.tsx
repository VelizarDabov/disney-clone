import Link from 'next/link'
import logo from '@/app/assets/logo.png'
import Image from 'next/image'
import { ThemeToggler } from './ThemeToggler'
import SearchInput from './SearchInput'
import GenreSelection from './GenreSelection'
const Header = () => {
  return (
 <header className='fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900'>
    <Link href='/' className='mr-10' >
    <Image src={logo} alt='Disney logo' width={120} height={100} className='cursor-pointer invert-0 dark:invert'/>
    </Link>
    <div className='flex space-x-2'>
      <GenreSelection />
      <SearchInput />
<ThemeToggler/>
    </div>
 </header>
  )
}

export default Header