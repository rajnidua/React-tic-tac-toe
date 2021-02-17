import React,{useState} from 'react';
import logo from './logo.svg';

import Icon from './Components/Icon'
/*This is my Toastify import code,taken from  documentation*/
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/*This is my react strap import code taken directly from documentation*/
import {Card,CardBody,Container,Row,Col,Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const itemArray = new Array(9).fill("empty");


const App = () => {

const[isCross,setIsCross] = useState(false);
const[winMessage,setwinMessage]= useState("");

const reloadGame = () =>{
  setIsCross(false);
  setwinMessage("");
  itemArray.fill("empty",0,9);
}

const checkIsWinner = () => {
  if (itemArray[0] === itemArray[1] &&
  itemArray[0] === itemArray[2] &&
  itemArray[0] !== "empty"){

     setwinMessage(`${itemArray[0]}won`);
  } else if (itemArray[3] === itemArray[4] &&
    itemArray[4] === itemArray[5] &&
    itemArray[3] !== "empty") {
       setwinMessage(`${itemArray[3]}won`);
    }
    else if (itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] &&
      itemArray[6] !== "empty") {
         setwinMessage(`${itemArray[6]}won`);
      }
      else if (itemArray[3] === itemArray[6] &&
        itemArray[0] === itemArray[3] &&
        itemArray[0] !== "empty") {
           setwinMessage(`${itemArray[0]}won`);
        }
        else if (itemArray[1] === itemArray[4] &&
          itemArray[4] === itemArray[7] &&
          itemArray[1] !== "empty") {
             setwinMessage(`${itemArray[1]}won`);
          }
          else if (itemArray[2] === itemArray[5] &&
            itemArray[5] === itemArray[8] &&
            itemArray[2] !== "empty") {
               setwinMessage(`${itemArray[2]}won`);
            }
            else if (itemArray[0] === itemArray[4] &&
              itemArray[4] === itemArray[8] &&
              itemArray[0] !== "empty") {
                 setwinMessage(`${itemArray[0]}won`);
              }
              else if (itemArray[2] === itemArray[4] &&
                itemArray[4] === itemArray[6] &&
                itemArray[2] !== "empty") {
                   setwinMessage(`${itemArray[2]}won`);
                }
};

const changeItem = (itemNumber) => {
  
  if (winMessage)
  {
    return toast(winMessage,{ type : "success"});
  }

  if (itemArray[itemNumber] === "empty")
  {
    itemArray[itemNumber] = isCross ? "Cross" : "Circle";
    setIsCross(!isCross);
  }
  else{
    return toast("already filled",{ type : "error"})
  }

  checkIsWinner();
};


  return (
    <Container className="p-5">
      <ToastContainer position = "bottom-center"/>
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className = "mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">{winMessage}</h1>
              <Button color="success"
              block
              onClick ={reloadGame}>Reload the Game</Button>
            </div>
          ):(
          <h1 className= "text-primary text-uppercase text-center">{isCross? "Cross " : "Circle "}turn</h1>
          )}

          <div className="grid">
            {itemArray.map((item,index) => (
              <Card color = "warning" onClick = {() => changeItem(index)}>
                <CardBody className = "box">
                <Icon name={item}/>
                </CardBody>
              </Card>
              )
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
