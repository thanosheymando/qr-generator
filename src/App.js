import { useState } from 'react';
import QRCode from 'qrcode';
function App() {
  const [url, setUrl] = useState('');
  const [qrcode, setQrcode] = useState('');
  
  const GenerateQRCode = () => {
    QRCode.toDataURL(url, {width: 500, margin: 2, type: "svg"} , (err, url) => {
      if( err ) return console.error(err);

      console.log(url)
      setQrcode(url)
    })
  }
  return (
    <div className="app">
        <h1 className='title'>QR Generator</h1>
        <p className='paragraph'>Type the link of your Website and press <b>Generate</b> to get your QR.</p>
        <div className='flex'>
          <input type="text" placeholder="e.g. https://www.facebook.com/" value={url} onChange={(e) => setUrl(e.target.value)}/>
          <button onClick={GenerateQRCode}>Generate</button>
        </div>
        {qrcode && 
          <div className='qrcode-wrapper'>
          <img src={qrcode}/>
          <a className="download-btn" href={qrcode} download="qrcode-png">Download</a>
        </div>
        }
        
    </div>
  );
}

export default App;
