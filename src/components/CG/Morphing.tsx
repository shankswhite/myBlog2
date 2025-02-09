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
      <>
        <h1>Beier Neely Morphing</h1>
        <p className={styles.description}>
          In this project, I understood and implemented the core concepts of the Beier-Neely Morphing algorithm. This algorithm introduces one or more intermediate frame Line Pairs to find the position of each pixel in the target image within the intermediate frame, and then performs color dissolve to achieve the morphing effect.
        </p>
        <p className={styles.description}>
          About LinePairs. I chose different LinePairs for different transformation effects and recorded the data in the record.xlsx file. For the humanoid (miku) figure transformation, I selected 26 LinePairs to achieve the effect.
        </p>
        <p className={styles.description}>
          About the algorithm. As the authors said, color dissolve is the easiest part. It only requires proportional color value distribution based on the intermediate frame. The difficult part is how to find the intermediate frame's LinePairs and how to warp based on these LinePairs.
        </p>
        <p className={styles.description}>
          For generating intermediate frame LinePairs, I tried multiple blending methods, including linear, sine, and some similar ones. In the end, I found that the linear method worked best with the least distortion. Simple makes beautiful, right?
        </p>
        <p className={styles.description}>
          In the construction of the warp function, I encountered many challenges. First, I spent about an hour just to realize the coordinate mismatch issue. The Eigen matrix's coordinate distribution is more like the traditional computer science format, where row represents the row, and col represents the column. However, in the algorithm's computation, it uses geometric coordinates, which are the opposite of Eigen's format.
        </p>
        <p className={styles.description}>
          Second, I noticed an abnormal shaking issue in the intermediate frames during morphing. This problem was caused by inconsistent ways of converting double format coordinates to int format during computation. In the end, I used clamp together with the floor function to fix this problem.
        </p>
        <p className={styles.description}>  
          Finally, my function performed well in translation morphing, but only moderately well in scaling, and had an unexpected rotation direction issue in rotation morphing. I ruled out the possibility of errors in intermediate frame LinePair generation and the Dissolve function, so I suspect that this was caused by the warp function. I even feel that it might be due to a bias in the implementation of getPosition. Since I spent too much time on this without making progress, I decided to use my current algorithm to create a similar morphing effect for my favorite anime characters Miku and Tianyi. Although it doesn't look perfect, I am really happy.
        </p>
      </>
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