import React, {useState} from 'react';
import '../hojas estilo/PdfULM.css';
import 'bootstrap/dist/css/bootstrap.css';
//Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library

import pdfFile from '../pdfs/MANUAL-ULM.pdf'

function PdfULM() {

  const [defaultPdfFile]=useState(pdfFile);

  //Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="pdf-container-ULM">
      {defaultPdfFile&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
          <Viewer fileUrl={defaultPdfFile}
            plugins={[defaultLayoutPluginInstance]} />
      </Worker></>}
    </div>
  );
}

export default PdfULM;