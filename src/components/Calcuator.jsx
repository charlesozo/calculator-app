import React, { useState } from "react";

const Calcuator = () => {
  const [myNo, setMyNo] = useState("");
  const [mySymbol, setMySymbol] = useState([]);
  const [finalanswer, setFinalanswer] = useState(false);
  const [displayResult, setDisplayResult] = useState("");
  const Array = Object.values(mySymbol);
  const answer = Array.filter((item) => item !== "");
  const myAns = [answer, myNo].flat(1);
  const AC = "AC";
  const zero = "0";
  const equals = "=";
  const one = 1;
  const two = 2;
  const three = 3;
  const four = 4;
  const five = 5;
  const six = 6;
  const seven = 7;
  const eight = 8;
  const nine = 9;
  const decimal = ".";
  const add = "+";
  const subtract = "-";
  const multiply = "*";
  const divide = "/";
  const del = "DEL";

  function getNo(number) {
    setDisplayResult("");
    if (number && finalanswer === false) {
      setMyNo((text) => [...text, number]);
    } else if (number && finalanswer) {
      setMyNo([number]);
      setMySymbol([]);
      setFinalanswer(false);
    }
  }
  function getSymbol(value) {
    const data = Object.values(myNo).join("");

    setDisplayResult("");
    if (value && finalanswer === false) {
      setMySymbol((text) => [...text, data, value]);
      setMyNo("");
    } else if (value && finalanswer) {
      setMySymbol([data, value]);
      setMyNo("");
      setFinalanswer(false);
    }
    if (myNo === "undefined" && value) {
      setMySymbol(value);
      setMyNo("");
    }
  }
  const deleteButton = () => {
    if (myNo) {
      console.log(myNo);
      setMyNo(myNo.slice(0, myNo.length - 1));
    }
    if (mySymbol && myNo == "") {
      const ans = Object.values(mySymbol.map((s) => s.split("")));
      const flattenedAns = ans.flat(1);
      setMySymbol(flattenedAns.slice(0, flattenedAns.length - 1));
    }
    if (displayResult && myNo === "") {
      setDisplayResult("");
    }
    if (myNo === "Synthax error" || myNo === "undefined") {
      setMyNo("");
      setDisplayResult("");
    }
  };
  const allClear = () => {
    setDisplayResult("");
    setMyNo("");
    setMySymbol([]);
    setFinalanswer(false);
  };

  function getFinalAnswer() {
    setMySymbol("");
    setDisplayResult(myAns);
    let Answer;
    try {
      Answer = eval(myAns.join(""));
    } catch (err) {
      if (err) {
        Answer = "Synthax error";
      }
    }
    if (Answer == "Infinity" || isNaN(Answer)) {
      Answer = "undefined";
    }
    console.log(Answer);
    setMyNo(Answer.toString());
    setFinalanswer(true);
  }
  console.log(displayResult);
  return (
    <>
      <header>
        <p style={{ color: "red", marginBottom: "20px" }}>
          ...<cite>Designed and developed by charles.c</cite>
        </p>
      </header>
      <div className="container main-calc">
        <div className="main-display">
          <div className="after-display">
            {displayResult === "" ? mySymbol : displayResult}
          </div>
          <div
            className={
              myNo.length <= 20
                ? "display display-big"
                : "display display-small"
            }
            id="display"
          >
            {myNo}
          </div>
        </div>
        <div className="main-body">
          <div className="number-section container ">
            <div className="row row-cols-3 numbers">
              <div className="col no" id="seven" onClick={() => getNo(seven)}>
                {seven}
              </div>
              <div className="col no" id="eight" onClick={() => getNo(eight)}>
                {eight}
              </div>
              <div className="col no" id="nine" onClick={() => getNo(nine)}>
                {nine}
              </div>
              <div className="col no" id="four" onClick={() => getNo(four)}>
                {four}
              </div>
              <div className="col no" id="five" onClick={() => getNo(five)}>
                {five}
              </div>
              <div className="col no" id="six" onClick={() => getNo(six)}>
                {six}
              </div>
              <div className="col no" id="one" onClick={() => getNo(one)}>
                {one}
              </div>
              <div className="col no" id="two" onClick={() => getNo(two)}>
                {two}
              </div>
              <div className="col no" id="three" onClick={() => getNo(three)}>
                {three}
              </div>
              <div className="col no" id="clear" onClick={allClear}>
                {AC}
              </div>
              <div className="col no" id="zero" onClick={() => getNo(zero)}>
                {zero}
              </div>
              <div className="col no" id="equals" onClick={getFinalAnswer}>
                {equals}
              </div>
            </div>
          </div>
          <div className="symbol-section">
            <div className="symbol" id="delete" onClick={deleteButton}>
              {del}
            </div>
            <div className="symbol" id="add" onClick={() => getSymbol(add)}>
              {add}
            </div>
            <div
              className="symbol"
              id="subtract"
              onClick={() => getSymbol(subtract)}
            >
              {subtract}
            </div>
            <div
              className="symbol"
              id="multiply"
              onClick={() => getSymbol(multiply)}
            >
              {multiply}
            </div>
            <div
              className="symbol"
              id="divide"
              onClick={() => getSymbol(divide)}
            >
              {divide}
            </div>
            <div className="symbol" id="decimal" onClick={() => getNo(decimal)}>
              {decimal}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calcuator;
