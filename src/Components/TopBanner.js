import React from 'react';

const Header = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
      borderBottom: '1px solid #000',
      fontFamily: 'Arial, sans-serif',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      {/* Altria logo as text */}
      <div style={{
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#004990',
      }}>
        Altria<span style={{ color: '#f37021' }}>|</span>
      </div>

      {/* Snow Bridge text */}
      <div style={{
        fontSize: '18px',
        color: '#a9a9a9',
        fontWeight: 'lighter',
        letterSpacing: '1px'
      }}>
        SNOW BRIDGE
      </div>
    </div>
  );
};

export default Header;
