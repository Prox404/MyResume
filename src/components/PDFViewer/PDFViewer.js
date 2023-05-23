import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// eslint-disable-next-line react/prop-types
const PDFViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);

  const handleDocumentLoadSuccess = ({ numPages }) => {
    console.log('Document loaded with ', numPages, ' pages');
    setNumPages(numPages);
  };

  const handleDownload = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div>
      <div>
        <button onClick={handleDownload} style={{ marginBottom: '10px' }}>
          Download PDF
        </button>
      </div>
      <div style={{ marginTop: '10px' }}>
        <Document
          file={pdfUrl}
          onLoadSuccess={handleDocumentLoadSuccess}
          onLoadError={(error) => console.error('Error while loading PDF:', error)}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} width={800} renderTextLayer={false} renderAnnotationLayer={false}/>
          ))}
        </Document>
      </div>
    </div>
  );
};

export default PDFViewer;
