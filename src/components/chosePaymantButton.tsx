import { ReactNode } from 'react';

interface RadioButtonProps {
    id: string;
    name: string;
    value: string;
    checked: boolean;
    onChange: () => void;
    children: ReactNode;
}

export function RadioButton({ id, name, value, checked, onChange, children }: RadioButtonProps) {
    return (
        <div className='w-full'>
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="hidden"
            />
            <label
                htmlFor={id}
                className={`flex items-center my-4 p-3 rounded-lg justify-center
                            text-xs w-full gap-2 cursor-pointer 
                            ${checked ? 'bg-purple-light border-2 border-purple' : 'bg-base-button hover:bg-base-hover'}`}
            >
                {children}
            </label>
        </div>
    );
}
