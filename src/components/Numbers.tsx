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
        style={{ height: headerHeight, display: 'flex', alignItems: 'center' }}
      >
        score:
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
          <Button>clear</Button>
          <Button>{'<-'}</Button>
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
          >
            single
          </Button>
          <Button
            typeColor={selectedType === 'double' ? 'red' : 'beige'}
            onClick={() => setSelectedType('double')}
          >
            double
          </Button>
          <Button
            typeColor={selectedType === 'tripple' ? 'red' : 'beige'}
            onClick={() => setSelectedType('tripple')}
          >
            tripple
          </Button>
        </div>
        <div style={{ display: 'flex', gap: '2px', height: rowHeight }}>
          <Button>Miss</Button>
          <Button typeColor="green">25</Button>
          <Button typeColor="red">Bull</Button>
        </div>
        <div style={{ display: 'flex', gap: '2px', height: rowHeight }}>
          <Button typeColor="beige">1</Button>
          <Button typeColor="black">2</Button>
          <Button typeColor="black">3</Button>
          <Button typeColor="black">4</Button>
          <Button typeColor="beige">5</Button>
        </div>
        <div style={{ display: 'flex', gap: '2px', height: rowHeight }}>
          <Button typeColor="black">6</Button>
          <Button typeColor="beige">7</Button>
          <Button typeColor="black">8</Button>
          <Button typeColor="beige">9</Button>
          <Button typeColor="black">10</Button>
        </div>
        <div style={{ display: 'flex', gap: '2px', height: rowHeight }}>
          <Button typeColor="beige">11</Button>
          <Button typeColor="black">12</Button>
          <Button typeColor="beige">13</Button>
          <Button typeColor="black">14</Button>
          <Button typeColor="beige">15</Button>
        </div>
        <div style={{ display: 'flex', gap: '2px', height: rowHeight }}>
          <Button typeColor="black">16</Button>
          <Button typeColor="beige">17</Button>
          <Button typeColor="black">18</Button>
          <Button typeColor="beige">19</Button>
          <Button typeColor="black">20</Button>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
