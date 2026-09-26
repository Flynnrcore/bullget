import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';

const CabinetPage = lazy(() =>
  import('../pages/CabinetPage').then(({ CabinetPage }) => ({ default: CabinetPage })),
);

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/cabinet"
          element={
            <Suspense fallback={<main className="cabinet-page">Загрузка кабинета...</main>}>
              <CabinetPage />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
