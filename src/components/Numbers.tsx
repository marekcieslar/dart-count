import type { FC } from 'react';
import Button from './Button';

const Numbers: FC = () => {
  const ROWS = 6;
  const headerHeight = 40;
  const margin = 16;
  const buttonPanelHeight = '40vh';
  const rowHeight = `calc(${buttonPanelHeight} / ${ROWS})`;

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
      {/* ...możliwe inne elementy... */}
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
          <Button>single</Button>
          <Button>double</Button>
          <Button>tripple</Button>
        </div>
        <div style={{ display: 'flex', gap: '2px', height: rowHeight }}>
          <Button>Miss</Button>
          <Button>25</Button>
          <Button>Bull</Button>
        </div>
        <div style={{ display: 'flex', gap: '2px', height: rowHeight }}>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
        </div>
        <div style={{ display: 'flex', gap: '2px', height: rowHeight }}>
          <Button>6</Button>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>10</Button>
        </div>
        <div style={{ display: 'flex', gap: '2px', height: rowHeight }}>
          <Button>11</Button>
          <Button>12</Button>
          <Button>13</Button>
          <Button>14</Button>
          <Button>15</Button>
        </div>
        <div style={{ display: 'flex', gap: '2px', height: rowHeight }}>
          <Button>16</Button>
          <Button>17</Button>
          <Button>18</Button>
          <Button>19</Button>
          <Button>20</Button>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
