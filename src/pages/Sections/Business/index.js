import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

import Api from "../../../services/api";
import Banner from "../../../components/Banner";
import ShortArticle from "../../../components/ShortArticle";

import { SmallColumn, SubColumns, Category } from "../../../themes/base";

const Business = () => {
  const history = useHistory();
  const [news, setNews] = useState([]);

  const selBanner = Number(Math.floor(Math.random() * 8));

  const handleNews = (content) => {
    setNews(content[0].value);
  };

  const openNews = (id) => {
    history.push(`/business/${id}`);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    Promise.allSettled([
      // business entertainment general health science sports technology
      Api.getNews("business"),
    ]).then((result) => {
      handleNews(result);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Category>
      {news.length > 0 ? (
        <Banner
          image={news[selBanner]?.urlToImage}
          title={news[selBanner]?.title}
          onClick={() => openNews(news[selBanner]?.id)}
        />
      ) : (
        ``
      )}

      <SubColumns>
        <SmallColumn>
          {news.slice(1, 3).map((item, index) => {
            return (
              <ShortArticle
                key={`Business-${index}-l`}
                title={item.title}
                onClick={() => openNews(item.id)}
              />
            );
          })}
        </SmallColumn>

        <SmallColumn>
          {news.slice(4, 6).map((item, index) => {
            return (
              <ShortArticle
                key={`Business-${index}-r`}
                onClick={() => openNews(item.id)}
                title={item.title}
              />
            );
          })}
        </SmallColumn>
      </SubColumns>
    </Category>
  );
};

export default Business;
