import IpadIcon from '../../public/icons/ipadLogo.svg';
import ArrowIcon from '../../public/icons/arrow-left.svg';
import MealsIcon from '../../public/icons/meals.svg'
import BurgerIcon from '../../public/icons/burgers.svg'
import SandwhichesIcon from '../../public/icons/sandwhiches.svg'
import SidesICon from '../../public/icons/sides.svg'
import DrinksIcon from '../../public/icons/drinks.svg'
import DessertIcon from '../../public/icons/dessert.svg'
// import { useRouter } from 'next/router';
import Link from 'next/link';

const OrderNav = () => {
    // const router = useRouter();
    const Menus = [
        {
            id : 1,
            icon : <MealsIcon className='mx-auto mt-5'/>,
            name : 'Meals',
            path : '#'
        },
        {
            id : 2,
            icon : <BurgerIcon className='mx-auto mt-5'/>,
            name : 'Burgers',
            path : '/#'
        },
        {
            id : 3,
            icon : <SandwhichesIcon className='mx-auto mt-5'/>,
            name : 'Sandwhiches',
            path : '/#'
        },
        {
            id : 4,
            icon : <SidesICon className='mx-auto mt-5'/>,
            name : 'Sides',
            path : '/#'
        },
        {
            id : 5,
            icon : <DrinksIcon className='mx-auto mt-5'/>,
            name : 'Drinks',
            path : '/#'
        },
        {
            id : 6,
            icon : <DessertIcon className='mx-auto mt-5'/>,
            name : 'Desserts',
            path : '/#'
        }
    ]
  return (
    <div className='flex flex-col items-start xl:w-1/12 md:w-36 h-screen mx-auto'>
            <div className='flex flex-row mx-2 my-2.5'>
                <Link href="/">
                    <ArrowIcon className='cursor-pointer'/>
                </Link>
                <h3 className='font-bold mx-2'> Back </h3>
            </div>
            <div className='mx-auto'>
                <IpadIcon/>
            </div>
            <div className='overflow-y-auto scrollbar-hide mx-auto p-1.5'>
                {Menus.map(menu => (
                <div key={menu.id} className='flex mx-auto p-1'>
                    <div className={`shadow-xl xl:shadow-lg rounded-md xl:my-3 sm:my-1.5 justify-center w-28 h-24 
                    ${menu.id == '2'
                    ? 'fill-white-100 invert bg-black-110' 
                    :'hover:fill-white-100 bg-white-100 hover:invert hover:bg-black-110'}
                    `}
                    >
                        <Link href={menu.path}>
                            <a>
                                {menu.icon}
                                <div className='text-xs text-center mt-1'>
                                <span>{menu.name}</span>
                                </div>
                            </a>
                        </Link>
                    </div> 
                </div>
                    ))}    
            </div>
        </div>
  )
}

export default OrderNav