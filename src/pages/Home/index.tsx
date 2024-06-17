import { createContext } from 'react'
import { Timer, ShoppingCart, Coffee, Package } from 'lucide-react'
import { Card } from './components/card';
import cupCoffee from '../../assets/cupCoffee.svg';
import { dataCoffees } from '../../assets/coffeeIcons/ExportImages'

export const CartContext = createContext({} as unknown);


export function Home() {

    return (
        <div className='max-w-[70rem] mx-auto'>
            <div className='w-full flex flex-col lg:flex-row my-24 items-center justify-between gap-10'>
                <div className='w-full lg:w-[40rem] flex flex-col gap-10'>
                    <h2 className='font-ballo2 font-bold text-3xl lg:text-5xl text-center lg:text-left'>
                        Encontre o café perfeito para qualquer hora do dia
                    </h2>
                    <p className='font-roboto text-lg lg:text-xl text-center lg:text-left'>
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora!
                    </p>
                    <div className='flex flex-col gap-4 lg:flex-row lg:gap-6'>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center justify-center bg-yellow-dark rounded-full w-8 h-8'>
                                <ShoppingCart size='1rem' stroke='#FFFF' fill='#FFFF' />
                            </div>
                            <p className='font-roboto'>Compra simpes e segura</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center justify-center bg-base-subtitle rounded-full w-8 h-8'>
                                <Package size='1rem' stroke='#FFFF' />
                            </div>
                            <p className='font-roboto'>Embalagem mantém o café intacto</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 lg:flex-row lg:gap-4'>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center justify-center bg-yellow rounded-full w-8 h-8'>
                                <Timer size='1rem' stroke='#FFFF' />
                            </div>
                            <p className='font-roboto'>Entrega rápida e rastreada</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center justify-center bg-purple-dark rounded-full w-8 h-8'>
                                <Coffee size='1rem' stroke='#FFFF' />
                            </div>
                            <p className='font-roboto'>O café chega fresquinho até você</p>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-auto mt-10 lg:mt-0'>
                    <img src={cupCoffee} alt='Cup Coffee' className='w-full max-w-xl mx-auto' />
                </div>
            </div>
            <div className='w-full'>
                <h2 className='font-ballo2 font-bold text-2xl lg:text-3xl text-center lg:text-left'>Nossos Cafés</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-16 gap-y-8">
                    {dataCoffees.map((coffee) => (
                        <Card
                            key={coffee.id}
                            coffee={coffee}
                        />
                    ))}
            </div>
            </div>
        </div>
        
    );
}
