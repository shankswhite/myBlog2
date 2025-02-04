import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CG.module.scss';

interface Article {
  id: number;
  title: string;
  summary: string;
  publishDate: string;
  route: string;
}

const CG: React.FC = () => {
  const [articles] = useState<Article[]>([
    {
      id: 1,
      title: "Beier Neely Morphing",
      summary: "Beier Neely Morphing is a technique to create a smooth transition between two images.",
      publishDate: "2025-02-01",
      route: "Morphing"
    },
    {
      id: 2,
      title: "Ray Tracing Demo",
      summary: "Ray Tracing Project",
      publishDate: "2025-02-02",
      route: "RayTracing"
    },
    // 可以添加更多文章
  ]);

  return (
    <div className={styles.cgContainer}>
      <h1>Computer Graphics Projects</h1>
      <div className={styles.articleList}>
        {articles.map((article) => (
          <Link 
            to={`/cg/${article.route}`}
            key={article.id} 
            className={styles.articleCard}
          >
            <div className={styles.articleContent}>
              <h2>{article.title}</h2>
              <p className={styles.summary}>{article.summary}</p>
              <span className={styles.publishDate}>{article.publishDate}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CG; 