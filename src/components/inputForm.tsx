interface InputFormProps {
    placeholder: string;
    haveSpan?: boolean;
    className?: string; // Adicione a prop className
}

export function InputForm({ placeholder, haveSpan, className }: InputFormProps) {
    return (
        <div className={`bg-base-input p-3 border-2 border-base-button rounded-md ${className} flex items-center`}>
            <input 
                type="text" 
                placeholder={placeholder} 
                className='font-roboto bg-transparent focus:outline-none w-full' 
            />
            {haveSpan ? <span className='font-roboto text-xs text-base-label italic'>Opcional</span> : ''}
        </div>
    )
}
