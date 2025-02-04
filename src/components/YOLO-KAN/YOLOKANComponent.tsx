import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import css from './YOLOKANComponent.module.scss';

export default function YOLOKANComponent() {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <h1>YOLO-KAN: A Computer Vision Architecture for Real-Time Object Detection</h1>
        <p>A Novel Approach based on KAN Networks</p>
      </div>

      <div className={css.pdfContainer}>
        <Worker workerUrl="/pdfjs/pdf.worker.js">
          <Viewer fileUrl="/Research/Levon_Poster.pdf" />
        </Worker>
      </div>
    </div>
  );
}