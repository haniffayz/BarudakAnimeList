import './globals.css'
import Navbar from '@/components/Utilities/Navbar'
import Footer from '@/components/Utilities/Footer/Footer'
import UserActionButton from '@/components/Utilities/Menu/userActionButton'
import SideMenu from '@/components/Utilities/SideMenu/SideMenu' 
import SplashScreen from '@/components/splashScreen'

export const metadata = {
  manifest: '/manifest.json',
  title: 'BarudakAnimeList',
  description: 'Website anime indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ `dark:bg-colos-sidebarColor border-colos-primary dark:border-colos-accent bg-colos-accent`} 
      suppressHydrationWarning={true}>
        <SplashScreen/>
        <Navbar />
          <div className='md:block hidden'>
            <UserActionButton className=""/>
          </div>
        {children}  
        <SideMenu/>
        <Footer className="bg-colos-accent dark:bg-colos-sidebarColor" />
        </body>
    </html>
  )
}
