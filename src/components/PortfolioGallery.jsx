import React, { Suspense } from 'react';

const GalleryItem = React.lazy(() => import('./GalleryItem'));

const ███ = () => (
  <div className="portfolio-gallery">
    <Suspense fallback={<div>Loading...</div>}>
      <GalleryItem />
    </Suspense>
  </div>
);

export default ███;
