import americano from '../Americano.svg'
import Arabe from '../Arabe.svg'
import CafeComLeite from '../CaféComLeite.svg'
import CafeGelado from '../CaféGelado.svg'
import cappuccino from '../Capuccino.svg'
import ChocolateQuente from '../Chocolate Quente.svg'
import Cubano from '../Cubano.svg'
import Expresso from '../Expresso.svg'
import ExpressoCrema from '../ExpressoCremoso.svg'
import Havaiano from '../Havaiano.svg'
import irlandes from '../Irlandês.svg'
import latte from '../Latte.svg'
import macchiato from '../Macchiato.svg'
import Mochaccino from '../Mochaccino.svg'

const images ={
    americano,
    Arabe,
    CafeComLeite,
    CafeGelado,
    cappuccino,
    ChocolateQuente,
    Cubano,
    Expresso,
    ExpressoCrema,
    Havaiano,
    irlandes,
    latte,
    macchiato,
    Mochaccino
}

export const dataCoffees = [
    {
        image: images.Expresso,
        alt: 'Expresso',
        type: 'TRADICIONAL',
        title: 'Expresso Tradicional',
        subtitle: 'O tradicional café feito com água quente e grãos moídos',
        price: '5,00',
        quantity: 1
    },
    {
        image: images.americano,
        alt: 'Americano',
        type: 'TRADICIONAL',
        title: 'Expresso Americano',
        subtitle: 'Expresso diluido, menos intenso que o tradicional',
        price: '5,50',
        quantity: 1
    },
    {
        image: images.ExpressoCrema,
        alt: 'Expresso Cremoso',
        type: 'TRADICIONAL',
        title: 'Expresso Cremoso',
        subtitle: 'Café expresso tradicional com espuma cremosa',
        price: '5,90',
        quantity: 1
    },
    {
        image: images.CafeGelado,
        alt: 'Café Gelado',
        type: 'TRADICIONAL',
        title: 'Expresso Gelado',
        subtitle: 'Bebida preparada com café expresso e cubos de gelo',
        price: '6,00',
        quantity: 1
    },
    {
        image: images.CafeComLeite,
        alt: 'Café com Leite',
        type: 'TRADICIONAL',
        title: 'Café com Leite',
        subtitle: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: '5,00',
        quantity: 1
    },
    {
        image: images.latte,
        alt: 'Latte',
        type: 'TRADICIONAL',
        title: 'Latte',
        subtitle: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: '5,00',
        quantity: 1
    },
    {
        image: images.cappuccino,
        alt: 'Cappuccino',
        type: 'TRADICIONAL',
        title: 'Cappuccino',
        subtitle: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: '7,00',
        quantity: 1
    },
    {
        image: images.macchiato,
        alt: 'Macchiato',
        type: 'TRADICIONAL',
        title: 'Macchiato',
        subtitle: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: '7,50',
        quantity: 1
    },
    {
        image: images.Mochaccino,
        alt: 'Mochaccino',
        type: 'TRADICIONAL',
        title: 'Mochaccino',
        subtitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: '7,90',
        quantity: 1
    },
    {
        image: images.ChocolateQuente,
        alt: 'Chocolate Quente',
        type: 'ESPECIAL',
        title: 'Chocolate Quente',
        subtitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: '6,50',
        quantity: 1
    },
    {
        image: images.Cubano,
        alt: 'Cubano',
        type: 'ALCOÓLICO',
        title: 'Cubano',
        subtitle: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: '6,90',
        quantity: 1
    },
    {
        image: images.Havaiano,
        alt: 'Havaiano',
        type: 'ESPECIAL',
        title: 'Havaiano',
        subtitle: 'Bebida adocicada preparada com café e leite de coco',
        price: '6,90',
        quantity: 1
    },
    {
        image: images.Arabe,
        alt: 'Árabe',
        type: 'ESPECIAL',
        title: 'Árabe',
        subtitle: 'Bebida preparada com grãos de café árabe e especiarias',
        price: '7,10',
        quantity: 1
    },
    {
        image: images.irlandes,
        alt: 'Irlandês',
        type: 'ALCOÓLICO',
        title: 'Irlandês',
        subtitle: 'Bebida a base de café, uísque irlandês, açucas e chantilly',
        price: '8,50',
        quantity: 1
    }
]