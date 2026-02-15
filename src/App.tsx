import { useState } from 'react';
import './App.css';
import Numbers from './components/Numbers';
import Dartboard from './components/Dartboard';

type TabKey = 'numbers' | 'dartboard';

function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('numbers');

  return (
    <div className="app-container">
      <header className="tab-header">
        <nav className="tab-bar" aria-label="Score mode selector">
          <button
            type="button"
            className={`tab-button tab-button--numbers ${activeTab === 'numbers' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('numbers')}
          >
            Numbers
          </button>
          <button
            type="button"
            className={`tab-button tab-button--dartboard ${activeTab === 'dartboard' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('dartboard')}
          >
            Dartboard
          </button>
        </nav>
      </header>
      <main className="tab-content" aria-live="polite">
        {activeTab === 'numbers' ? <Numbers /> : <Dartboard />}
      </main>
    </div>
  );
}

export default App;
