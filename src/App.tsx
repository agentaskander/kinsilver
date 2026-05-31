import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Metadata } from "./components/Metadata";
import { ArticlePage } from "./pages/ArticlePage";
import { FaqPage } from "./pages/FaqPage";
import { HomePage } from "./pages/HomePage";
import { JournalPage } from "./pages/JournalPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { OccasionsPage } from "./pages/OccasionsPage";
import { PersonalizationPage } from "./pages/PersonalizationPage";
import { ProductsPage } from "./pages/ProductsPage";
import { QualityPage } from "./pages/QualityPage";
import { StoryPage } from "./pages/StoryPage";
import { WaitlistPage } from "./pages/WaitlistPage";
import "./styles/site.css";

function App() {
  return (
    <>
      <Metadata />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="story" element={<StoryPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="personalization" element={<PersonalizationPage />} />
          <Route path="quality" element={<QualityPage />} />
          <Route path="occasions" element={<OccasionsPage />} />
          <Route path="journal" element={<JournalPage />} />
          <Route path="journal/:slug" element={<ArticlePage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="waitlist" element={<WaitlistPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
