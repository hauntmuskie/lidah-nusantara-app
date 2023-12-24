import Link from 'next/link';

const FoodCard = ({ title, description, image }: { title: string, description: string, image: string }) => {
    return (
        <div className="p-2 m-10 rounded-2xl shadow-2xl ">   
            <img src={image} alt={title} className="w-full h-32 object-cover mb-4 rounded-xl hover:scale-105 transition-all" />
            <div className='gap-2 flex items-center text-2xl font-semibold rounded-md'>
                <h2 className="mb-2 bg-[#C7FADD] inline-flex p-1 rounded-md">{title}</h2>
                <Link href='#' className='bg-rose-500 p-1 mb-2 rounded-md text-white'>
                    =&gt; 
                </Link>
            </div>
            <p className="">{description}</p>
        </div>
    );
};

const TopPicks = () => {
    const foodData = [
        {
            title: '#1 Nasi Goreng',
            description: 'Nasi goreng is a Southeast Asian dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat.',
            image: '/assets/images/masakan/foods/nasigoreng.jpg',
        },
        {
            title: '#2 Gudeg',
            description: 'Gudeg is a traditional Javanese cuisine from Yogyakarta and Central Java, Indonesia. Gudeg is made from young unripe jack fruit (Javanese: gori, Indonesian: nangka muda) boiled for several hours with palm sugar, and coconut milk.',
            image: '/assets/images/masakan/foods/gudeg.jpg',
        },
        {
            title: '#3 Mendoan',
            description: 'Mendoan is a traditional Javanese fried food made from thinly sliced tempeh or tofu dipped in batter made from rice flour and spices, and then fried. It is commonly found in markets or travelling food vendors in Central Java.',
            image: '/assets/images/masakan/foods/mendoan.jpg',
        },
    ];

    return (
        <div className="flex justify-center items-center h-full ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {foodData.map((food, index) => (
                    <FoodCard key={index} {...food} />
                ))}
            </div>
        </div>
    );
};

export default TopPicks;
