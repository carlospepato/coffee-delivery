// src/components/Card.tsx
import { ShoppingCart } from 'lucide-react';
import { useContext } from 'react';
import { MyContext } from '../../../contexts/routesContexts';

type CardProps = {
    coffee: {
        id: string;
        image: string;
        alt: string;
        type: string;
        title: string;
        subtitle: string;
        price: string;
        quantity: number;
    };
};

export function Card({ coffee }: CardProps) {
    const { state, dispatch } = useContext(MyContext);

    const onAdd = () => {
        
        dispatch({ type: 'somar' });
    };

    const onRemove = () => {
        dispatch({ type: 'subtrair' });
    };

    return (
        <div className="w-[16.5rem] h-auto bg-base-card rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-lg rounded-br-lg flex flex-col items-center p-6">
            <div className="relative w-full flex justify-center -top-12">
                <img src={coffee.image} alt={coffee.alt} className="w-24 h-24" />
            </div>
            <div className="flex flex-col items-center justify-center">
                <span className="font-roboto bg-yellow-light text-yellow-dark font-semibold px-2 py-1 rounded-full text-xs mb-2">
                    {coffee.type}
                </span>
                <h3 className="font-ballo2 font-bold text-xl text-base-text mb-2">
                    {coffee.title}
                </h3>
                <p className="font-roboto text-sm text-center text-base-label mb-4">
                    {coffee.subtitle}
                </p>
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-1">
                        <span className="text-base-label font-semibold">R$</span>
                        <p className="font-ballo2 text-xl font-bold text-base-text">
                            {coffee.price}
                        </p>
                    </div>
                    <div className="flex items-center gap-1 bg-base-button rounded-md">
                        <button className="text-purple-dark px-2 py-1 cursor-pointer" onClick={onRemove}>
                            -
                        </button>
                        <span className="text-base-text px-2 py-1">{state.count}</span>
                        <button className="text-purple-dark px-2 py-1 cursor-pointer" onClick={onAdd}>
                            +
                        </button>
                    </div>
                    <button className="bg-purple-dark p-1 rounded-md">
                        <ShoppingCart fill="#FFFF" stroke="#FFFF" size={22} />
                    </button>
                </div>
            </div>
        </div>
    );
}
