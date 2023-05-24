import classNames from 'classnames/bind';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import styles from './PDFViewer.module.scss';
import mouseHelper from "~/core/helpers/MouseHelper";


pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// eslint-disable-next-line react/prop-types
const PDFViewer = ({ pdfUrl }) => {
    const cx = classNames.bind(styles);
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
                <button onClick={handleDownload} className={cx('download-btn', mouseHelper.addTargetTrigger(true))} >
                    Download
                </button>
            </div>
            <div style={{ marginTop: '10px' }} className={cx('pdf-wrapper')}>
                <Document
                    file={pdfUrl}
                    onLoadSuccess={handleDocumentLoadSuccess}
                    onLoadError={(error) => console.error('Error while loading PDF:', error)}
                    
                >
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page className={cx('pdf-document__page')} key={`page_${index + 1}`} pageNumber={index + 1} width={800} renderTextLayer={false} renderAnnotationLayer={false} />
                    ))}
                </Document>
            </div>
        </div>
    );
};

export default PDFViewer;
