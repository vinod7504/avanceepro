import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Taxreturn from './pages/Taxreturn';
import About from './pages/About';
import Account from './pages/Account';
import AccountingBookkeeping from './pages/AccountingBookkeeping';
import AnnualCompliance from './pages/AnnualCompliance';
import Appeals from './pages/Appeals';
import Australia from './pages/Australia';
import Contact from './pages/Contact';
import FssaiRegistration from './pages/FssaiRegistration';
import GstCancellation from './pages/GstCancellation';
import GstFiling from './pages/GstFiling';
import GstNotice from './pages/GstNotice';
import GstRegistration from './pages/GstRegistration';
import IecRegistration from './pages/IecRegistration';
import IncomeTaxNotice from './pages/IncomeTaxNotice';
import Index from './pages/Index';
import India from './pages/India';
import IndirectTax from './pages/IndirectTax';
import IsoRegistration from './pages/IsoRegistration';
import LiquorLicense from './pages/LiquorLicense';
import Llp from './pages/Llp';
import Opc from './pages/Opc';
import Partnership from './pages/Partnership';
import PrivateLimited from './pages/PrivateLimited';
import PsaraRegistration from './pages/PsaraRegistration';
import SecretarialAudit from './pages/SecretarialAudit';
import Services from './pages/Services';
import SoleProprietorship from './pages/SoleProprietorship';
import TdsReturnFiling from './pages/TdsReturnFiling';
import Tds from './pages/Tds';
import Usa from './pages/Usa';
import SeoManager from './components/SeoManager';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <SeoManager />
      <ScrollToTop />
      <Routes>
        <Route path="/Taxreturn.html" element={<Taxreturn />} />
        <Route path="/Taxreturn" element={<Taxreturn />} />
        <Route path="/about.html" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/account.html" element={<Account />} />
        <Route path="/account" element={<Account />} />
        <Route path="/accounting-bookkeeping.html" element={<AccountingBookkeeping />} />
        <Route path="/accounting-bookkeeping" element={<AccountingBookkeeping />} />
        <Route path="/annual-compliance.html" element={<AnnualCompliance />} />
        <Route path="/annual-compliance" element={<AnnualCompliance />} />
        <Route path="/appeals.html" element={<Appeals />} />
        <Route path="/appeals" element={<Appeals />} />
        <Route path="/australia.html" element={<Australia />} />
        <Route path="/australia" element={<Australia />} />
        <Route path="/contact.html" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fssai-registration.html" element={<FssaiRegistration />} />
        <Route path="/fssai-registration" element={<FssaiRegistration />} />
        <Route path="/gst-cancellation.html" element={<GstCancellation />} />
        <Route path="/gst-cancellation" element={<GstCancellation />} />
        <Route path="/gst-filing.html" element={<GstFiling />} />
        <Route path="/gst-filing" element={<GstFiling />} />
        <Route path="/gst-notice.html" element={<GstNotice />} />
        <Route path="/gst-notice" element={<GstNotice />} />
        <Route path="/gst-registration.html" element={<GstRegistration />} />
        <Route path="/gst-registration" element={<GstRegistration />} />
        <Route path="/iec-registration.html" element={<IecRegistration />} />
        <Route path="/iec-registration" element={<IecRegistration />} />
        <Route path="/income-tax-notice.html" element={<IncomeTaxNotice />} />
        <Route path="/income-tax-notice" element={<IncomeTaxNotice />} />
        <Route path="/" element={<Index />} />
        <Route path="/india.html" element={<India />} />
        <Route path="/india" element={<India />} />
        <Route path="/indirect-tax.html" element={<IndirectTax />} />
        <Route path="/indirect-tax" element={<IndirectTax />} />
        <Route path="/iso-registration.html" element={<IsoRegistration />} />
        <Route path="/iso-registration" element={<IsoRegistration />} />
        <Route path="/liquor-license.html" element={<LiquorLicense />} />
        <Route path="/liquor-license" element={<LiquorLicense />} />
        <Route path="/llp.html" element={<Llp />} />
        <Route path="/llp" element={<Llp />} />
        <Route path="/opc.html" element={<Opc />} />
        <Route path="/opc" element={<Opc />} />
        <Route path="/partnership.html" element={<Partnership />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/private-limited.html" element={<PrivateLimited />} />
        <Route path="/private-limited" element={<PrivateLimited />} />
        <Route path="/psara-registration.html" element={<PsaraRegistration />} />
        <Route path="/psara-registration" element={<PsaraRegistration />} />
        <Route path="/secretarial-audit.html" element={<SecretarialAudit />} />
        <Route path="/secretarial-audit" element={<SecretarialAudit />} />
        <Route path="/services.html" element={<Services />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sole-proprietorship.html" element={<SoleProprietorship />} />
        <Route path="/sole-proprietorship" element={<SoleProprietorship />} />
        <Route path="/tds-return-filing.html" element={<TdsReturnFiling />} />
        <Route path="/tds-return-filing" element={<TdsReturnFiling />} />
        <Route path="/tds.html" element={<Tds />} />
        <Route path="/tds" element={<Tds />} />
        <Route path="/usa.html" element={<Usa />} />
        <Route path="/usa" element={<Usa />} />
      </Routes>
    </Router>
  );
};

export default App;
