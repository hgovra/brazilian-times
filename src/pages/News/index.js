import { useEffect, useState, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";

import TimeAgo from "react-timeago";
import brStrings from 'react-timeago/lib/language-strings/pt-br';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

import Api from "../../services/api";

import { LargeColumn, SmallColumn, Row, Category, CatHeadline } from "../../themes/base";
import { Content, Date, Title } from "./styles";

import Article from "../../components/Article";

const News = () => {
  const history = useHistory();
  const { id, subject } = useParams();
  const [news, setNews] = useState([]);
  const [post, setPost] = useState([]);

  const formatter = buildFormatter(brStrings);

  const handleNews = useCallback((content) => {
    setNews(content[0].value);
    setPost(content[1].value);
  }, []);

  const openNews = (id) => {
    history.push(`/${subject}/${id}`);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    setNews([]);
    setPost([]);

    Promise.allSettled([
      Api.getNews(subject),
      Api.getNewsById(subject, id),
    ]).then((result) => {
      handleNews(result);
    });
  }, [id, subject, handleNews]);

  const createMarkup = (html) => ({ __html: html });

  return (
    <>
      <Row>
        <LargeColumn>
          <Title>{post.title}</Title>
          {post.publishedAt ? (
            <Date><TimeAgo date={post.publishedAt} formatter={formatter} /></Date>
          ) : (``) }

          <Content
            dangerouslySetInnerHTML={createMarkup(post.content)}
          ></Content>
        </LargeColumn>
        <SmallColumn>
          <Category className="side-col">
          <CatHeadline>Leia Também</CatHeadline>

            {news.slice(0, 4).map((item, index) => {
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
        </SmallColumn>
      </Row>
    </>
  );
};

export default News;
