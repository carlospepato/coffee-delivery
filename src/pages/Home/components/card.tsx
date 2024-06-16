import { ShoppingCart } from 'lucide-react'

interface CardProps {
    image: string
    alt: string
    type: string
    title: string
    subtitle: string
    price: string
    quantity: number
    onAdd: () => void
    onRemove: () => void
    addToCheckout: () => void
}

export function Card(props: CardProps) {
    return (
        <div className="w-[16.5rem] h-auto bg-base-card rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-lg rounded-br-lg flex flex-col items-center p-6">
            <div className="relative w-full flex justify-center -top-12">
                <img 
                    src={props.image} 
                    alt={props.alt} 
                    className="w-24 h-24" 
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <span className="font-roboto bg-yellow-light text-yellow-dark font-semibold px-2 py-1 rounded-full text-xs mb-2">{props.type}</span>
                <h3 className="font-ballo2 font-bold text-xl text-base-text mb-2">{props.title}</h3>
                <p className="font-roboto text-sm text-center text-base-label mb-4">{props.subtitle}</p>
                <div className="flex items-center justify-between w-full">
                    <div className='flex items-center gap-1'>
                        <span className='text-base-label font-semibold'>R$</span>
                        <p className="font-ballo2 text-xl font-bold text-base-text">{props.price}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-base-button rounded-md">
                        <button className="text-purple-dark px-2 py-1" onClick={props.onRemove}>-</button>
                        <span className="text-base-text px-2 py-1">{props.quantity}</span>
                        <button className="text-purple-dark px-2 py-1" onClick={props.onAdd}>+</button>
                    </div>
                    <button
                        onClick={props.addToCheckout}
                        className='bg-purple-dark p-1 rounded-md'>
                        <ShoppingCart fill='#FFFF' stroke='#FFFF' size={22}/>
                    </button>
                </div>
            </div>
        </div>
    )
}