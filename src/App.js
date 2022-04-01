import './App.css';
import {useDispatch, useSelector} from "react-redux";
import CustomerComponent from "./components/customerComponent";
import PeopleComponent from "./components/peopleComponent";
import {getCashActionCreator, setCashActionCreator} from "./store/actionCreators/cashActionCreator";

function App() {

    const dispatch = useDispatch()
    const cash = useSelector(state => state.cashReduce.cash)


    const addCash = (cash) => {
        dispatch(setCashActionCreator(cash))
    }

    const getCash = (cash) => {
        dispatch(getCashActionCreator( cash))
    }


  return (
    <div className={"app"}>
        <div style={{display: "flex", justifyContent:"center", marginTop:"20%"}}>
            <div style={{display:""}}>{cash}</div>
          <div>
              <button onClick={() => addCash(Number(prompt()))}>
                  set cash
              </button>
              <button onClick={() => getCash(Number(prompt()))}>
                  get cash
              </button>
              <CustomerComponent/>
              <PeopleComponent/>
          </div>
     </div>
    </div>
  );
}

export default App;
