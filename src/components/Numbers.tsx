import type { FC } from 'react';
import Button from './Button';

import { useState } from 'react';

const Numbers: FC = () => {
  const ROWS = 6;
  const headerHeight = 40;
  const margin = 16;
  const buttonPanelHeight = '40vh';
  const rowHeight = `calc(${buttonPanelHeight} / ${ROWS})`;

  const [selectedType, setSelectedType] = useState<
    'single' | 'double' | 'tripple'
  >('single');
  const [throws, setThrows] = useState<Array<{ label: string; value: number }>>(
    []
  );

  // Oblicz sumę
  const sum = throws.reduce((acc, curr) => acc + curr.value, 0);

  // Czy przyciski wartości są disabled
  const isDisabled = throws.length >= 3;

  // Obsługa kliknięcia wartości
  const handleValueClick = (num: number) => {
    if (isDisabled) return;
    let label = '';
    let value = num;
    if (selectedType === 'double') {
      if (num === 25 || num === 50) {
        // 25 i 50 nie mogą być double/triple
        label = `${num}`;
      } else {
        label = `D${num}(${num * 2})`;
        value = num * 2;
      }
    } else if (selectedType === 'tripple') {
      if (num === 25 || num === 50) {
        label = `${num}`;
      } else {
        label = `T${num}(${num * 3})`;
        value = num * 3;
      }
    } else {
      label = `${num}`;
    }
    setThrows([...throws, { label, value }]);
    setSelectedType('single');
  };

  // Obsługa Miss
  const handleMiss = () => {
    if (isDisabled) return;
    setThrows([...throws, { label: 'Miss', value: 0 }]);
    setSelectedType('single');
  };

  // Obsługa 25 i 50
  const handleSpecial = (num: number) => {
    if (isDisabled) return;
    setThrows([...throws, { label: `${num}`, value: num }]);
    setSelectedType('single');
  };

  // Cofnij ostatni rzut
  const handleUndo = () => {
    setThrows(throws.slice(0, -1));
  };

  // Wyczyść całą listę
  const handleClear = () => {
    setThrows([]);
    setSelectedType('single');
  };

  return (
    <div
      style={{
        width: '100%',
        fontSize: '1.1rem',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          height: headerHeight,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span style={{ fontSize: '0.8rem' }}>score:</span>
        <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>
          {throws.map((t) => t.label).join(' + ')}
        </span>
      </div>
      <div
        style={{
          marginBottom: 8,
          fontSize: '4.4rem',
          color: '#333',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        <span style={{ fontWeight: 'bold', fontSize: '4.4rem' }}>{sum}</span>
      </div>
      <div
        style={{
          position: 'fixed',
          left: `${margin}px`,
          right: `${margin}px`,
          bottom: `${margin}px`,
          width: `calc(100% - ${margin * 2}px)`,
          height: buttonPanelHeight,
          background: 'transparent',
          boxShadow: '0 -2px 12px rgba(0,0,0,0.04)',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
          padding: 0,
          justifyContent: 'flex-end',
        }}
      >
        <div style={{ display: 'flex', gap: '2px', height: rowHeight }}>
          <Button
            onClick={handleClear}
            disabled={throws.length === 0}
            style={
              throws.length === 0 ? { background: '#eee', color: '#888' } : {}
            }
          >
            clear
          </Button>
          <Button
            onClick={handleUndo}
            disabled={throws.length === 0}
            style={
              throws.length === 0 ? { background: '#eee', color: '#888' } : {}
            }
          >
            {'<-'}
          </Button>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '2px',
            height: rowHeight,
            background: 'grey',
          }}
        >
          <Button
            typeColor={selectedType === 'single' ? 'red' : 'beige'}
            onClick={() => setSelectedType('single')}
            disabled={isDisabled}
            style={isDisabled ? { background: '#eee', color: '#888' } : {}}
          >
            single
          </Button>
          <Button
            typeColor={selectedType === 'double' ? 'red' : 'beige'}
            onClick={() => setSelectedType('double')}
            disabled={isDisabled}
            style={isDisabled ? { background: '#eee', color: '#888' } : {}}
          >
            double
          </Button>
          <Button
            typeColor={selectedType === 'tripple' ? 'red' : 'beige'}
            onClick={() => setSelectedType('tripple')}
            disabled={isDisabled}
            style={isDisabled ? { background: '#eee', color: '#888' } : {}}
          >
            tripple
          </Button>
        </div>
        <div style={{ display: 'flex', gap: '2px', height: rowHeight }}>
          <Button
            onClick={handleMiss}
            disabled={isDisabled}
            style={isDisabled ? { background: '#eee', color: '#888' } : {}}
          >
            Miss
          </Button>
          <Button
            typeColor="green"
            onClick={() => handleSpecial(25)}
            disabled={isDisabled}
            style={isDisabled ? { background: '#eee', color: '#888' } : {}}
          >
            25
          </Button>
          <Button
            typeColor="red"
            onClick={() => handleSpecial(50)}
            disabled={isDisabled}
            style={isDisabled ? { background: '#eee', color: '#888' } : {}}
          >
            Bull
          </Button>
        </div>
        <div style={{ display: 'flex', gap: '2px', height: rowHeight }}>
          <Button
            typeColor="beige"
            onClick={() => handleValueClick(1)}
            disabled={isDisabled}
            style={isDisabled ? { background: '#eee', color: '#888' } : {}}
          >
            1
          </Button>
          <Button
            typeColor="black"
            onClick={() => handleValueClick(2)}
            disabled={isDisabled}
            style={isDisabled ? { background: '#eee', color: '#888' } : {}}
          >
            2
          </Button>
          <Button
            typeColor="black"
            onClick={() => handleValueClick(3)}
            disabled={isDisabled}
            style={isDisabled ? { background: '#eee', color: '#888' } : {}}
          >
            3
          </Button>
          <Button
            typeColor="black"
            onClick={() => handleValueClick(4)}
            disabled={isDisabled}
            style={isDisabled ? { background: '#eee', color: '#888' } : {}}
          >
            4
          </Button>
          <Button
            typeColor="beige"
            onClick={() => handleValueClick(5)}
            disabled={isDisabled}
            style={isDisabled ? { background: '#eee', color: '#888' } : {}}
          >
            5
          </Button>
        </div>
        <div style={{ display: 'flex', gap: '2px', height: rowHeight }}>
          <Button
            typeColor="black"
            onClick={() => handleValueClick(6)}
            disabled={isDisabled}
            style={isDisabled ? { background: '#eee', color: '#888' } : {}}
          >
            6
          </Button>
          <Button
            typeColor="beige"
            onClick={() => handleValueClick(7)}
            disabled={isDisabled}
            style={isDisabled ? { background: '#eee', color: '#888' } : {}}
          >
            7
          </Button>
          <Button
            typeColor="black"
            onClick={() => handleValueClick(8)}
            disabled={isDisabled}
            style={isDisabled ? { background: '#eee', color: '#888' } : {}}
          >
            8
          </Button>
          <Button
            typeColor="beige"
            onClick={() => handleValueClick(9)}
            disabled={isDisabled}
            style={isDisabled ? { background: '#eee', color: '#888' } : {}}
          >
            9
          </Button>
          <Button
            typeColor="black"
            onClick={() => handleValueClick(10)}
            disabled={isDisabled}
            style={isDisabled ? { background: '#eee', color: '#888' } : {}}
          >
            10
          </Button>
        </div>
        <div style={{ display: 'flex', gap: '2px', height: rowHeight }}>
          <Button
            typeColor="beige"
            onClick={() => handleValueClick(11)}
            disabled={isDisabled}
            style={isDisabled ? { background: '#eee', color: '#888' } : {}}
          >
            11
          </Button>
          <Button
            typeColor="black"
            onClick={() => handleValueClick(12)}
            disabled={isDisabled}
            style={isDisabled ? { background: '#eee', color: '#888' } : {}}
          >
            12
          </Button>
          <Button
            typeColor="beige"
            onClick={() => handleValueClick(13)}
            disabled={isDisabled}
            style={isDisabled ? { background: '#eee', color: '#888' } : {}}
          >
            13
          </Button>
          <Button
            typeColor="black"
            onClick={() => handleValueClick(14)}
            disabled={isDisabled}
            style={isDisabled ? { background: '#eee', color: '#888' } : {}}
          >
            14
          </Button>
          <Button
            typeColor="beige"
            onClick={() => handleValueClick(15)}
            disabled={isDisabled}
            style={isDisabled ? { background: '#eee', color: '#888' } : {}}
          >
            15
          </Button>
        </div>
        <div style={{ display: 'flex', gap: '2px', height: rowHeight }}>
          <Button
            typeColor="black"
            onClick={() => handleValueClick(16)}
            disabled={isDisabled}
            style={isDisabled ? { background: '#eee', color: '#888' } : {}}
          >
            16
          </Button>
          <Button
            typeColor="beige"
            onClick={() => handleValueClick(17)}
            disabled={isDisabled}
            style={isDisabled ? { background: '#eee', color: '#888' } : {}}
          >
            17
          </Button>
          <Button
            typeColor="black"
            onClick={() => handleValueClick(18)}
            disabled={isDisabled}
            style={isDisabled ? { background: '#eee', color: '#888' } : {}}
          >
            18
          </Button>
          <Button
            typeColor="beige"
            onClick={() => handleValueClick(19)}
            disabled={isDisabled}
            style={isDisabled ? { background: '#eee', color: '#888' } : {}}
          >
            19
          </Button>
          <Button
            typeColor="black"
            onClick={() => handleValueClick(20)}
            disabled={isDisabled}
            style={isDisabled ? { background: '#eee', color: '#888' } : {}}
          >
            20
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
