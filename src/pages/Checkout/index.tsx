import { MapPinned } from 'lucide-react'

export function Checkout(){
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
                        <div>
                            <form action="">
                                <div>
                                    <input type="text" placeholder="CEP" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Rua" />
                                </div>
                                <div>
                                    <div>
                                        <input type="text" placeholder="Número" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Complemento" />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <input type="text" placeholder="Bairro" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Cidade" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="UF" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-[28rem]">
                    <h2 className="font-ballo2 font-bold text-lg">Cafés selecionados</h2>
                    <div className='bg-base-card p-10 my-4 rounded-tr-[3rem] rounded-bl-[3rem] rounded-lg'>

                    </div>
                </div>
            </div>
            
        </div>
    )
}