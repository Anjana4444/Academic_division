import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import StaffPage from './pages/StaffPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import SpecialNoticesPage from './pages/SpecialNoticesPage'
import ApplicationsPage from './pages/ApplicationsPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/notices" element={<SpecialNoticesPage />} />
        <Route path="/applications" element={<ApplicationsPage />} />

        <Route path="/applications/:slug" element={<ApplicationsPage />} />
      </Route>
    </Routes>
  )
}