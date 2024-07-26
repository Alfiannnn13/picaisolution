import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'

const Layout = ({children}: {children:React.ReactNode}) => {
  return (
    <main className='root'>
      {/* SideBar */}
      <Sidebar/>
      {/* Mobilenav */}
      <MobileNav/>



        <div className="root-container">
            <div className="wrapper">
                {children}
            </div>
        </div>
    </main>
  )
}

export default Layout