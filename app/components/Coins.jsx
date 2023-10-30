import { useState } from "react";
import Image from "next/image";

export default function Coins({ coins }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        const searchText = e.target.value;
        setSearchTerm(searchText);
    };

    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="search-bar mt-10">
                <input
                    type="text"
                    placeholder="Search coins..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-[500px] border-2 border-black px-3 h-12 rounded-full"
                />
            </div>
            <ul className="grid grid-cols-4 mx-auto max-w-[1260] gap-16 mt-32 w-[90%]">
                {filteredCoins.map(coin => (
                    <li key={coin.uuid} className="flex flex-col items-center justify-center gap-2 shadow-2xl px-4 py-16">
                        <Image src={coin.iconUrl} height={70} width={70} alt={coin.name} />
                        <h3>{coin.name}</h3>
                        <h3>{coin.rank}</h3>
                        <p>{coin.symbol}</p>
                        <p>{coin.price}</p>
                    </li>
                ))}
            </ul>

        </>
    );
}
