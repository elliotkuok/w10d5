import harvardArt from "./data/harvardArt.js";
import GalleryNavigation from "./components/GalleryNavigation/index.js"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <GalleryNavigation galleries={harvardArt.records}/>
    <Route path="/galleries/:galleryId" render={() => <GalleryView galleries={harvardArt.records} />} />
    </>
  );
}

export default App;
