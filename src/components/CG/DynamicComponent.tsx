import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';

const loadComponent = (componentName: string) => {
  return React.lazy(() => import(`./${componentName}`).catch(() => {
    return;
  }));
};

export const DynamicComponent: React.FC = () => {
  const { id } = useParams();
  const Component = React.useMemo(() => loadComponent(id || ''), [id]);
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
}; 