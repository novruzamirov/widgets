import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: "Afrikaans",
        value: "af"
    },
    {
        label: "Arabic",
        value: "ar"
    },
    {
        label: "Hindi",
        value: "hi"
    },
    {
        label: "German",
        value: "de"
    },
    {
        label: "Albanian",
        value: "sq" 
    }, 
    {
        label: "Azerbaijani",
        value: "az"
    }, 
    {
        label: "Chinese",
        value: "zh"
    }, 
    {
        label: "French",
        value: "fr"
    }, 
    {
        label: "Italian",
        value: "it"
    }, 
    {
        label: "Irish",
        value: "es"
    }, 
    {
        label: "Spanish",
        value: "nl"
    }, 
    {
        label: "Turkish",
        value: "tr"
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return(
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => {setText(e.target.value)}}/>
                </div>
                
            </div>
            
            <Dropdown 
                label="Select a Language"
                options={options} 
                selected={language} 
                onSelectedChange={setLanguage}
            />
            <hr />
            <h3 className='ui header'>Output</h3>
            <Convert language={language} text={text}/>
            <h3>If the domain name of web site is not localhost:3000, the google translate api will not work regarding the issues of google</h3>
        </div>
    );
}

export default Translate;