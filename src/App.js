import { Routes, Route } from 'react-router-dom';

//Page Imports
import _404 from './pages/404';
import HomePage from './pages/HomePage';
import BlankTemplate from './pages/BlankTemplate';
import ComingSoon from './pages/ComingSoon';
import Maintenance from './pages/Maintenance';
import TermsOfService from './pages/ToS';
import ProvablyFair from './pages/ProvablyFair';

//Profile Related Pages
import Profile from './pages/Profile';
import Referral from './pages/Referral';
import Withdraw from './pages/Withdraw';
import Deposit from './pages/Deposit';

//Game Pages
import Towers from './pages/Towers';
import Crash from './pages/Crash';
import _50x from './pages/50x';
import Roulette from './pages/Roulette';
import Dice from './pages/Dice';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="blank/" element={<BlankTemplate />} />
      <Route path="terms-of-service/" element={<TermsOfService />} />
      <Route path="provably-fair/" element={<ProvablyFair />} />
      <Route path="coming/" element={<ComingSoon />} />
      <Route path="maintenance/" element={<Maintenance />} />
      <Route path="profile/" element={<Profile />} />
      <Route path="referral/" element={<Referral />} />
      <Route path="withdraw/" element={<Withdraw />} />
      <Route path="deposit/" element={<Deposit />} />
      <Route path="towers/" element={<Towers />} />
      <Route path="crash/" element={<Crash />} />
      <Route path="50x/" element={<_50x />} />
      <Route path="roulette/" element={<Roulette />} />
      <Route path="dice/" element={<Dice />} />
      <Route path="*" element={<_404 />} />
    </Routes>
  );
}