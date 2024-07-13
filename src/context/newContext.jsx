import { useContext, useEffect, useState } from "react";
import NoteContext from "./contextCreator";

const StateProvider = (props) => {
  const [value, setValue] = useState('');
  const [showImages, setShowImages] = useState([]);
  const [count, setCount] = useState(1)
  const [disabledBtn, setDisabledBtn] = useState('')

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const fetchAPI = async () => {
    let api = `https://api.unsplash.com/search/photos/?page=${count}&query=${value ? value : "nature"}&client_id=`;
    let response = await fetch(`${api}${import.meta.env.VITE_KEY}`);
    let resData = await response.json();
    setShowImages(resData.results);
    setDisabledBtn(resData.total_pages)
    console.log(count)
  }

  const nextfetchAPI = async () => {
    let api = `https://api.unsplash.com/search/photos/?page=${count + 1}&query=${value ? value : "nature"}&client_id=`;
    let response = await fetch(`${api}${import.meta.env.VITE_KEY}`);
    let resData = await response.json();
    setShowImages(resData.results);
    setDisabledBtn(resData.total_pages)
  }

  const prevfetchAPI = async () => {
    let api = `https://api.unsplash.com/search/photos/?page=${count - 1}&query=${value ? value : "nature"}&client_id=`;
    let response = await fetch(`${api}${import.meta.env.VITE_KEY}`);
    let resData = await response.json();
    setShowImages(resData.results);
    setDisabledBtn(resData.total_pages)
  }

  const nextHandler = () => {
    console.log('nex');
    setCount(count + 1);
    nextfetchAPI();
  }

  const prevHandler = () => {
    console.log("prev");
    setCount(count - 1)
    prevfetchAPI();
  }

  useEffect(() => {
    let timing = setTimeout(() => {
      fetchAPI();
    }, 1000);

    return () => clearTimeout(timing)
  }, [value])


  return <NoteContext.Provider value={{ disabledBtn, onChange, count, value, showImages, nextHandler, prevHandler }}>
    {props.children}
  </NoteContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(NoteContext);
};

export { StateProvider, useGlobalContext }
