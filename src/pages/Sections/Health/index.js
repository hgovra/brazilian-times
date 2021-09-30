import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

import Api from "../../../services/api";
import Article from "../../../components/Article";

import { Category } from "../../../themes/base";

const Health = () => {
  const history = useHistory();
  const [news, setNews] = useState([]);

  const handleNews = (content) => {
    setNews(content[0].value);
  };

  const openNews = (id) => {
    history.push(`/health/${id}`);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    Promise.allSettled([
      Api.getNews("health"),
    ]).then((result) => {
      handleNews(result);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Category className="side-col">
      {news.slice(1, 4).map((item, index) => {
        return (
          <Article
            key={`Health-${index}`}
            onClick={() => openNews(item.id)}
            image={item.urlToImage}
            content={item.description}
            title={item.title}
          />
        );
      })}
    </Category>
  );
};

export default Health;
