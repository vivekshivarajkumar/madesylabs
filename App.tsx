
import React, { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { DesignSystem } from './components/features/DesignSystem';
import { ML55 } from './components/features/ML55';
import { AppFooter } from './components/layout/AppFooter';
import { AppHeader } from './components/layout/AppHeader';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState('ML55');

  const handleNavigate = (view: string) => setActiveView(view);

  return (
    <div className="min-h-screen bg-void text-white flex flex-col scanlines overflow-hidden">
      <AppHeader activeView={activeView} onNavigate={handleNavigate} />
      <div className="flex-1 flex overflow-hidden h-[calc(100vh-120px)]">
        <Sidebar activeView={activeView} onNavigate={handleNavigate} />
        {activeView === 'DESIGN SYSTEM' && <DesignSystem />}
        {activeView === 'ML55' && <ML55 />}
        {activeView !== 'ML55' && activeView !== 'DESIGN SYSTEM' && (
          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-4xl font-black text-white/10 uppercase tracking-[0.5em]">{activeView}</h1>
          </div>
        )}
      </div>
      <AppFooter />
    </div>
  );
};

export default App;
