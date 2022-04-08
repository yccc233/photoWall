import './css/App.css';
import PicTab from "./jsx/PicTab";
import {useSelector} from "react-redux";


function App() {
    const reduxState = useSelector(state => state);

    return (
        <div>
            <PicTab
                picJson={{
                    picUrl: reduxState.imgs,
                    text: reduxState.titles,
                    bText: reduxState.descs,
                }}
            />
        </div>
    );
}

export default App;
