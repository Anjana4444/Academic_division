import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import StaffPage from './pages/StaffPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import SpecialNoticesPage from './pages/SpecialNoticesPage'
import ApplicationsPage from './pages/ApplicationsPage'
import SearchPage from './pages/SearchPage' // 1. Imported SearchPage Component
import Dashboard from './admin/Dashboard'
import SpecialNote from './admin/SpecialNote'


// Form Imports
import AgreementForm from './applicationforms/AgreementForm'
import Appendix16Form from './applicationforms/Appendix16Form'
import ApplicationforConfirmationForm from './applicationforms/ApplicationforConfirmationForm'
import ApplicationforRailwayWarrantsForm from './applicationforms/ApplicationforRailwayWarrantsForm'
import ApplicationforSabbaticalLeaveForm from './applicationforms/ApplicationforSabbaticalLeaveForm'
import ApplicationforTRForm from './applicationforms/ApplicationforTRForm'
import ApplicationforUniversityIdentityCardsForm from './applicationforms/ApplicationforUniversityIdentityCardsForm'
import ConcessionaryMotorVehiclePermitForm from './applicationforms/ConcessionaryMotorVehiclePermitForm'
import ETFForm from './applicationforms/ETFForm'
import ProbationaryLeaveApplicationForm from './applicationforms/ProbationaryLeaveApplicationForm'

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
        
        
        {/* 2. Added the unified search engine result index path */}
        <Route path="/search" element={<SearchPage />} />

        {/* Application Sub-Forms Layout Elements */}
        <Route path="/applications/:slug" element={<ApplicationsPage />} />
        <Route path="/applications/agreement" element={<AgreementForm />} />
        <Route path="/applications/appendix-16" element={<Appendix16Form />} />
        <Route path="/applications/promotion" element={<ApplicationforConfirmationForm />} />
        <Route path="/applications/railway" element={<ApplicationforRailwayWarrantsForm />} />
        <Route path="/applications/sabbatical" element={<ApplicationforSabbaticalLeaveForm />} />
        <Route path="/applications/leave" element={<ApplicationforTRForm />} />
        <Route path="/applications/identity-cards" element={<ApplicationforUniversityIdentityCardsForm />} />
        <Route path="/applications/motor-vehicle" element={<ConcessionaryMotorVehiclePermitForm />} />
        <Route path="/applications/etf-form" element={<ETFForm />} />
        <Route path="/applications/probationary" element={<ProbationaryLeaveApplicationForm />} />
      </Route>

      <Route>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/specialnote" element={<SpecialNote />} />

      </Route>
    </Routes>
  )
}