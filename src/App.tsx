/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Services } from './components/Services';
import { About } from './components/About';
import { Toolkit } from './components/Toolkit';
import { Process } from './components/Process';
import { AvailableBanner } from './components/AvailableBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { OwnerConfigModal } from './components/OwnerConfigModal';
import { Project } from './data/portfolioData';

function PortfolioApp() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [configModalOpen, setConfigModalOpen] = useState(false);
  const [contactProjectType, setContactProjectType] = useState('');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCommissionProject = (projectName: string) => {
    setSelectedProject(null);
    setContactProjectType(`Inquiry for project style: ${projectName}`);
    scrollTo('contact');
  };

  const handleSelectService = (serviceName: string) => {
    setContactProjectType(serviceName);
    scrollTo('contact');
  };

  return (
    <div className="min-h-screen bg-[#070709] text-[#F3F4F6] relative selection:bg-[#0066FF] selection:text-white">
      {/* Top Sticky Navigation */}
      <Navbar
        onOpenWork={() => scrollTo('work')}
        onOpenContact={() => scrollTo('contact')}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onViewWork={() => scrollTo('work')}
          onWorkTogether={() => scrollTo('contact')}
        />

        {/* 2. Selected Work (Major Portfolio Section) */}
        <SelectedWork
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenConfigHelp={() => setConfigModalOpen(true)}
        />

        {/* 3. Services ("WHAT I DO") */}
        <Services onSelectService={handleSelectService} />

        {/* 4. About ("BEHIND THE EDITS.") */}
        <About />

        {/* 5. The Toolkit */}
        <Toolkit />

        {/* 6. Process ("HOW WE WORK") */}
        <Process />

        {/* 7. Dedicated Callout ("AVAILABLE FOR SELECT PROJECTS") */}
        <AvailableBanner onStartProject={() => scrollTo('contact')} />

        {/* 8. Contact Section ("LET'S MAKE SOMETHING WORTH WATCHING.") */}
        <Contact initialProjectType={contactProjectType} />
      </main>

      {/* Footer */}
      <Footer onOpenConfigHelp={() => setConfigModalOpen(true)} />

      {/* Cinematic Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => setSelectedProject(proj)}
        onCommission={handleCommissionProject}
      />

      {/* Portfolio Owner Architecture & Replacement Guide Modal */}
      <OwnerConfigModal
        isOpen={configModalOpen}
        onClose={() => setConfigModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
}
