import React from 'react'

export default function InputSelect({id, label, value='', onChange, options}) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <select name={id} id={id} onChange={(e) => onChange(e.target.value)} value={value}>
                <option value=""> --select-- </option>
                {
                    options.map( option => {
                        return <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    })
                }
            </select> 
        </div>
    )
}
