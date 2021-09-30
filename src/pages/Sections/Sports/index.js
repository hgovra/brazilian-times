import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

import Api from "../../../services/api";
import FootArticle from "../../../components/FootArticle";

import { Category, SubColumns, CatHeadline } from "../../../themes/base";

const Sports = () => {
  const history = useHistory();
  const [news, setNews] = useState([]);

  const handleNews = (content) => {
    setNews(content[0].value);
  };

  const openNews = (id) => {
    history.push(`/sports/${id}`);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    Promise.allSettled([
      Api.getNews("sports"),
    ]).then((result) => {
      handleNews(result);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Category className="sports" style={{marginRight: 0}}>
      <CatHeadline>Esporte</CatHeadline>
      
      <SubColumns>
          {news.slice(1, 5).map((item, index) => {
              return (
                <FootArticle
                  key={`Sports-${index}-l`}
                  image={item.urlToImage}
                  onClick={() => openNews(item.id)}
                  title={item.title}
                />
              );
          })}
      </SubColumns>
    </Category>
  );
};

export default Sports;
