//import React, { createContext, useContext, useCallback, useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BR_TIMES_API_URL + 'api/',
});

const getNews = (subject) => {
  //return api.get(`top-headlines?category=${subject}&pageSize=${results}&country=br`)
  return api.get(subject)
    .then(
      ({data}) => {
        //console.log(data);
        return data;
      })
    .catch((err) => {
      console.error('Ocorreu um err', err)
    })
}

const getNewsById = (subject, id) => {
  return api.get(`${subject}/${id}`)
    .then(
      ({data}) => {
        //console.log(data);
        return data;
      })
    .catch((err) => {
      console.error('Ocorreu um err', err)
    })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getNews,
  getNewsById
}