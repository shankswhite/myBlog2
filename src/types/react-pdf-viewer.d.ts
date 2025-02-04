declare module '@react-pdf-viewer/core' {
  export interface ViewerProps {
    fileUrl: string;
  }
  
  export interface WorkerProps {
    workerUrl: string;
    children: React.ReactNode;
  }
  
  export const Viewer: React.FC<ViewerProps>;
  export const Worker: React.FC<WorkerProps>;
} 