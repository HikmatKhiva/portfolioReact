import { Document, Page } from "react-pdf";import { pdfjs } from 'react-pdf';
import PropTypes from 'prop-types';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const PdfView = ({ url }) => {
    return (
        <Document style={{width:'100%'}} file={url} >
            <Page pageNumber={1} />
        </Document>
    )
}
PdfView.propTypes = {
    url: PropTypes.string.isRequired
}
export default PdfView;