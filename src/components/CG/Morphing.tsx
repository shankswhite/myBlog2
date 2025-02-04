import React, { useState, useEffect } from 'react';
import styles from './Morphing.module.scss';

const Morphing: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = 31;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % totalImages);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slideshowContainer}>
      <h1>Beier Neely Morphing</h1>
      <h2>F_translated</h2>
      <div className={styles.imageContainer}>
        <img 
          src={`/CG/BeierNeely/translate/output_${currentImage.toString().padStart(2, '0')}.jpg`}
          alt={`Morphing Frame ${currentImage}`} 
        />
      </div>
      <p className={styles.description}>
        In my initial attempts, the first half of the animation would show up-and-down shaking. Initially, I guessed it was due to the line pair length, but after multiple adjustments, we found no difference. Then we tried various ways to optimize: including adding multiple line pairs for stabilization, using different algorithms to calculate the coordinates endpoint of intermediate line pairs. Finally, we found that after adjusting the std::clamp algorithm and changing the warp coordinate calculation to rounding method, we achieved the smoothest effect.
      </p>

      <h2>F_translated_scale</h2>
      <div className={styles.imageContainer}>
        <img 
          src={`/CG/BeierNeely/translate_scale/output_${currentImage.toString().padStart(2, '0')}.jpg`}
          alt={`Morphing Frame ${currentImage}`} 
        />
      </div>
      <p className={styles.description}>
      </p>

      <h2>F_scale_2d</h2>
      <div className={styles.imageContainer}>
        <img 
          src={`/CG/BeierNeely/scale/output_${currentImage.toString().padStart(2, '0')}.jpg`}
          alt={`Morphing Frame ${currentImage}`} 
        />
      </div>
      <p className={styles.description}>
      </p>

      <h2>F_rotated</h2>
      <div className={styles.imageContainer}>
        <img 
          src={`/CG/BeierNeely/rotate/output_${currentImage.toString().padStart(2, '0')}.jpg`}
          alt={`Morphing Frame ${currentImage}`} 
        />
      </div>
      <p className={styles.description}>
        I have tried different implementation for warp coordinate calculation, but the result is still not perfect. The rotation direction is opposite to the expected direction.
      </p>

      <h2>Miku && Tianyi</h2>
      <div className={styles.imageContainer}>
        <img 
          src={`/CG/BeierNeely/miku/output_${currentImage.toString().padStart(2, '0')}.jpg`}
          alt={`Morphing Frame ${currentImage}`} 
        />
      </div>
      <p className={styles.description}>
        I just tried two times since I applied 26 Line Pairs for transform the image. The result is ...good except the leg part. There is a little ghosting effect on the left leg. I have tried using different number of line pairs (ex: only 1 line for each leg, or 8 lines for each leg), the results are nearly the same.
      </p>
    </div>
  );
};

export default Morphing;