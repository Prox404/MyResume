import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const PDFViewer = ({url}) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleDownload = () => {
    window.open(url, '_blank');
  };

  return (
    <div>
      {!loaded && <div>Loading PDF...</div>}
      <iframe
        src={url}
        width="100%"
        height="600px"
        onLoad={handleLoad}
        style={{ display: loaded ? 'block' : 'none' }}
      />
      {loaded && (
        <button onClick={handleDownload} style={{ marginTop: '10px' }}>
          Download PDF
        </button>
      )}
    </div>
  );
};

export default PDFViewer;
