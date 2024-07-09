 import './imageList.css';

 const ImageList = ({images}) => {
    const renderedImages = images.map(imgs =>{
        return(
            <img src={`${imgs}`} />
        );
    }) ;
    return(
        <div>
            {renderedImages}
        </div>
    );
 };

 export  default ImageList ;