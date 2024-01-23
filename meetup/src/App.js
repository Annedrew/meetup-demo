import { Route, Routes } from 'react-router-dom';
import AllMeetupPage from './pages/AllMeetup';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AllMeetupPage />} />
        <Route path='/new-meetup' element={<NewMeetupPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
