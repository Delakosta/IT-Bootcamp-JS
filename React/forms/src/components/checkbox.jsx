import { useState } from 'react';

const Checkbox = () => {
    const [lang, setLang] = useState([

        {label: "HTML", isChecked: false},
        {label: "CSS", isChecked: false},
        {label: "JS", isChecked: false},
        {label: "React", isChecked: false},
    ])

    const handleChange = (index) => {
        const updatedCheckboxes = [...lang];
        updatedCheckboxes[index].isChecked = !updatedCheckboxes[index].isChecked;
        setLang(updatedCheckboxes);
    }

    return <div>
            <h1>I know {lang.filter((lang) => lang.isChecked).length || 'zero'} language/s</h1>
            {lang.map((lang, index) => (
                <div key={index}>
                    <label>
                        <input type="checkbox" checked={lang.isChecked} onChange={() => handleChange(index)}/>
                        {lang.label}
                    </label>
                </div>
            ))
            }
        </div>  
}
export default Checkbox;