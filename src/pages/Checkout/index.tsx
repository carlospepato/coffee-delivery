import { MapPinned, DollarSign, Landmark, Banknote, CreditCard, Trash2 } from 'lucide-react'
import { InputForm } from '../../components/inputForm'
import { RadioButton } from '../../components/chosePaymantButton'
import { useState } from 'react'
import arabe from '../../assets/coffeeIcons/Arabe.svg'


export function Checkout(){
    const [selectedPayment, setSelectedPayment] = useState<string>('credit-card')

    return(
        <div className='max-w-[70rem] mx-auto'>
            <div className="flex items-start justify-start my-6 gap-10">
                <div className="w-[40rem]">
                    <h2 className="font-ballo2 font-bold text-lg">Complete seu pedido</h2>
                    <div className='bg-base-card p-10 my-4 rounded-lg'>
                        <div>
                            <div className='flex gap-2 items-center'>
                                <MapPinned size='1rem' stroke='#C47F17' />
                                <h2>Endereço de Entrega</h2>
                            </div>
                            <span className='mx-6'>Informe o endereço onde deseja receber seu pedido</span>
                        </div>
                        <div className='flex flex-col items-center justify-start my-8 w-full'>
                            <form action="">
                                <div className='flex flex-col gap-4 mb-4'>
                                    <InputForm placeholder='CEP' className='w-full'/>
                                    <InputForm placeholder='Rua' className='w-full'/>
                                </div>
                                <div className='flex gap-4 mb-4'>
                                    <InputForm placeholder='Número' className='w-2/6'/>
                                    <InputForm placeholder='Complemento' haveSpan className='w-4/6'/>
                                </div>
                                <div className='flex gap-4'>
                                    <InputForm placeholder='Bairro' className='w-2/6'/>
                                    <InputForm placeholder='Cidade' className='w-3/6'/>
                                    <InputForm placeholder='UF' className='w-1/6'/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='w-full bg-base-card p-10 rounded-lg'>
                        <div className='flex gap-2 items-center'>
                            <DollarSign stroke='#8047F8'/>
                            <h2 className='font-roboto'>Pagamento</h2>
                        </div>
                        <span className='mx-8'>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                       <div className='flex gap-3 my-4 items-center w-full justify-center'>
                            <RadioButton
                                id="credit-card"
                                name="payment"
                                value="credit-card"
                                checked={selectedPayment === 'credit-card'}
                                onChange={() => setSelectedPayment('credit-card')}
                            >
                                <CreditCard stroke='#8047F8' size={20} />
                                CARTÃO DE CRÉDITO
                            </RadioButton>
                            <RadioButton
                                id="debit-card"
                                name="payment"
                                value="debit-card"
                                checked={selectedPayment === 'debit-card'}
                                onChange={() => setSelectedPayment('debit-card')}
                            >
                                <Landmark stroke='#8047F8' size={20} />
                                CARTÃO DE DÉBITO
                            </RadioButton>
                            <RadioButton
                                id="cash"
                                name="payment"
                                value="cash"
                                checked={selectedPayment === 'cash'}
                                onChange={() => setSelectedPayment('cash')}
                            >
                                <Banknote stroke='#8047F8' size={20} />
                                DINHEIRO
                            </RadioButton>
                       </div>
                    </div>
                </div>
                <div className="w-[28rem]">
                    <h2 className="font-ballo2 font-bold text-lg">Cafés selecionados</h2>
                    <div className='bg-base-card p-10 my-4 rounded-tr-[3rem] rounded-bl-[3rem] rounded-lg'>
                        <div>
                            <div className='flex items-center justify-center gap-4'>
                                <img src={arabe} alt="" className='w-16 h-16'/>
                                <div className='w-full'>
                                    <div className='flex gap-2 w-full justify-between'>
                                        <h3 className='font-roboto'>Expresso Tradicional</h3>
                                        <span className='font-roboto font-semibold text-base-text'>R$ 9,90</span>
                                    </div>
                                    <div className='flex gap-3'>
                                        <div className="flex items-center gap-1 bg-base-button rounded-md">
                                            <button className="text-purple-dark px-2 py-1">-</button>
                                            <span className="text-base-text px-2 py-1">1</span>
                                            <button className="text-purple-dark px-2 py-1">+</button>
                                        </div>
                                        <div className="flex items-center gap-1 bg-base-button rounded-md">
                                            <button 
                                                className="px-2 py-1 flex items-center gap-2 rounded-md hover:bg-base-hover ">
                                                <Trash2 size={20} stroke='#8047F8'/>
                                                REMOVER
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='w-full border-1 my-6'/>
                        </div>
                        <div>
                            <div className='flex items-center justify-center gap-4'>
                                <img src={arabe} alt="" className='w-16 h-16'/>
                                <div className='w-full'>
                                    <div className='flex gap-2 w-full justify-between'>
                                        <h3 className='font-roboto'>Expresso Tradicional</h3>
                                        <span className='font-roboto font-semibold text-base-text'>R$ 9,90</span>
                                    </div>
                                    <div className='flex gap-3'>
                                        <div className="flex items-center gap-1 bg-base-button rounded-md">
                                            <button className="text-purple-dark px-2 py-1">-</button>
                                            <span className="text-base-text px-2 py-1">1</span>
                                            <button className="text-purple-dark px-2 py-1">+</button>
                                        </div>
                                        <div className="flex items-center gap-1 bg-base-button rounded-md">
                                            <button 
                                                className="px-2 py-1 flex items-center gap-2 rounded-md hover:bg-base-hover ">
                                                <Trash2 size={20} stroke='#8047F8'/>
                                                REMOVER
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='w-full border-1 my-6'/>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center justify-between font-roboto'>
                                <h2>Total de itens</h2>
                                <span>R$ 29,70</span>
                            </div>
                            <div className='flex items-center justify-between font-roboto'>
                                <h2 >Entrega</h2>
                                <span>R$ 3,50</span>
                            </div>
                            <div className='flex items-center justify-between font-roboto font-bold text-lg'>
                                <h2 >Total</h2>
                                <span>R$ 33,20</span>
                            </div>
                            <button 
                                className='bg-yellow text-base-button font-roboto text-sm
                                            font-bold h-12 w-full rounded-md
                                            hover:bg-yellow-dark'
                                >
                                CONFIRMAR PEDIDO
                            </button>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}