import PDFViewer from "~/components/PDFViewer";
import MyCV from "~/assets/files/TranCongTri_CV.pdf";

function MyResume() {
    return ( <>
        <h1>MyResume</h1>
        <PDFViewer 
            pdfUrl={MyCV}
        />
    </> );
}

export default MyResume;