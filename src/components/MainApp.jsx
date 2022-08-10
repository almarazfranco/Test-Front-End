import { Routes, Route, Navigate } from "react-router-dom";
import {ProductProvider} from "../context/ProductProvider";
import { ContacPage, Footer, Header, HomePage, NotFoundPage } from './';

const MainApp = () => {
  return (
    <>
      {/* Provider */}
      <ProductProvider>

        {/* Header */}
        <Header />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContacPage />} />
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route path="/*" element={<Navigate to="/not-found" />} />
        </Routes>

      </ProductProvider>

      {/* Footer */}
      <Footer />

    </>
  )
};

export default MainApp;