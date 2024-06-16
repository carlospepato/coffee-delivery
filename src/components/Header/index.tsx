import logoCoffeeDelivery from '../../assets/logo.svg'
import { ShoppingCart, MapPin  } from 'lucide-react';

export function Header(){
    return(
        <div className="max-w-[70rem] mx-auto my-2 h-24 flex items-center justify-between">
            <a href="/"><img src={logoCoffeeDelivery} alt=""/></a>
            <div className="flex gap-4">
                <div className='bg-purple-light p-1 text-purple-dark text-sm rounded-md flex items-center gap-1'>
                    <MapPin stroke='#4B2995'/> 
                    <a href="#">Porto Alegre, RS</a>
                </div>
                <a
                    href="/checkout"
                    className='bg-yellow-light p-1 rounded-md'>
                    <ShoppingCart fill='#C47F17' stroke='#C47F17'/>
                </a>
            </div>
        </div>
    )
}