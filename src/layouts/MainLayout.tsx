import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavDrawer from '../components/NavDrawer'
import BottomNav from '../components/BottomNav'

const MainLayout = () => {
  return (
    <div className="bg-secondary-cream text-primary-dark font-body-md overflow-x-hidden">
      <Header />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
      <NavDrawer />
      <BottomNav/>
    </div>
  )
}

export default MainLayout
