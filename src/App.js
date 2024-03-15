import { useState } from 'react';
import './App.css';

function App() {

  const styles = {
    display: 'flex',
    alignItems: 'flex-end',
    overflow: 'auto',
  }

  //states...
  const [showOption, setShowoption] = useState(false);
  const [checkedValues, setCheckedValues] = useState([]);

  //contents shown in dropdown menu...
  let content = ["hello", "this is a custom dropdown", "welcome", "enjoy!", "yoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo", "oh wow!"];

  const options ='Select an option or options...';
  let sizeOfContnet = content.length-1;

  //function to handle checkbox clicks
  const handleCheckboxChange = (e, value) => {
    if(e.target.checked){
      setCheckedValues(prev => [...prev, value]);
    }else{
      setCheckedValues(prev => prev.filter(items => items!==value));
    }
  }

  return (
    <div className='container' onClick={() => setShowoption(false)}>
      <div className='dropdownmenu'>
        <button onClick={(e) => { e.stopPropagation(); setShowoption(!showOption) }}>
          {checkedValues.length < 1 ? options : checkedValues.join(", ")}
        </button>
        {
          showOption ? <div className='options-container'>
            {
              content.map((Element, index) => (
                showOption ? <div className={index===sizeOfContnet ? "":"single-option"} style={index===sizeOfContnet ? styles : {}} key={index} onClick={(e) => e.stopPropagation()}>
                  <input type='checkbox' value={Element} checked={checkedValues.includes(Element)} onChange={(e) => handleCheckboxChange(e,Element)}></input>
                  <span>{Element}</span>
                </div> : ""
              ))
            }
          </div> : null
        }
      </div>
    </div>
  );
}

export default App;
