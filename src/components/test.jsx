    import React, { useState } from 'react';
    import QRCode from 'react-qr-code';

    function Test() {
      const [qrValue, setQrValue] = useState("https://example.com");

      return (
        <div>
          <h1>QR Code Generator</h1>
          <input
            type="text"
            value={qrValue}
            onChange={(e) => setQrValue(e.target.value)}
            placeholder="Enter text or URL"
          />
          <div style={{ background: 'white', padding: '16px' }}>
            <QRCode value={qrValue} size={256} level="H" />
          </div>
        </div>
      );
    }

    export default Test;