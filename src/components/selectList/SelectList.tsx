import React from 'react';
import './SelectList.scss';

interface SelectListProps {
    data: { [key: string]: string };
    onClick: (key: string) => void;
    placeholder?: string;
}

function SelectList({ data, onClick, placeholder }: SelectListProps) {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onClick(event.target.value);
    };

    return (
        <select onChange={handleChange} className="select-list" defaultValue="">
            {placeholder && (
                <option value="" disabled>
                    {placeholder}
                </option>
            )}
            {Object.entries(data).map(([key, value]) => (
                <option key={key} value={key}>
                    {value}
                </option>
            ))}
        </select>
    );
}

export default SelectList;