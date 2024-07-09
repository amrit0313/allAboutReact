
import Searchbar from "./components/searchBar/searchbar";
import ImageList from "./components/imageLIst/imageList";
import './app.css';
import { useState } from "react";
const App = () => {

    const [images, setImages] = useState([]);
    const submit =async(s) => {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${s}&client_id=ZkI_s7cE3oxlfxg2x7etrk1ppdOcXmnp32jEOk2eLLw`);
        const data = await response.json();
        const urls = data.results.map(element => {
            return element.urls.small;
          });
          console.log(urls)
          setImages(urls);
    }


    return (
        <div className="app">
            <Searchbar  submit = {submit}/>
            <ImageList images ={images} />
        </div>
    );
};
export default App;