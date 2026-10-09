import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { SchoolPreparation } from './pages/SchoolPreparation';
import { SchoolEnglish } from './pages/SchoolEnglish';
import { OGE } from './pages/OGE';
import { Children } from './pages/Children';
import { Adults } from './pages/Adults';
import { Courses } from './pages/Courses';
import { CourseDetail } from './pages/CourseDetail';
import { Lessons } from './pages/Lessons';
import { ReviewsPage } from './pages/ReviewsPage';
import { Pricing } from './pages/Pricing';
import { FAQPage } from './pages/FAQPage';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Contacts } from './pages/Contacts';
import { FreeCourses } from './pages/FreeCourses';
import { LegalPrivacy } from './pages/LegalPrivacy';
import { LegalOffer } from './pages/LegalOffer';
import { LegalPersonalData } from './pages/LegalPersonalData';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/school-preparation" element={<SchoolPreparation />} />
          <Route path="/school-english" element={<SchoolEnglish />} />
          <Route path="/oge" element={<OGE />} />
          <Route path="/children" element={<Children />} />
          <Route path="/adults" element={<Adults />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/free-courses" element={<FreeCourses />} />
          <Route path="/privacy" element={<LegalPrivacy />} />
          <Route path="/offer" element={<LegalOffer />} />
          <Route path="/personal-data" element={<LegalPersonalData />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}
