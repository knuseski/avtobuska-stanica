import Image from 'next/image';

const ItemCard = ({ item, handleClick }) => {
    return (
        <div
            onClick={() => {
                if (handleClick) {
                    handleClick(item);
                }
            }}
            className="flex flex-col gap-4 cursor-pointer p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
            key={item.id}
        >
            {item.image && (
                <Image
                    className="object-cover"
                    alt={item.name}
                    width={50}
                    height={50}
                    src={item.image}
                />
            )}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">{item.name}</h5>
            <p className="font-normal text-gray-700">{item.description}</p>
            {item.price && (
                <p className="mt-auto text-right font-bold text-gray-700">{item.price} mkd</p>
            )}
        </div>
    );
};

export default ItemCard;
