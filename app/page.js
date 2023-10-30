"use client"

import { useState, useEffect } from 'react'
import Coins from './components/Coins';

export default function Home() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const getCoins = async () => {
      const response = await fetch('/api/coins')
      const coins = await response.json();
      setCoins(coins.data.coins);
    }
    getCoins();
  }, []);

  return (
    <div className='text-center'>
      <h1 className='font-bold text-6xl pt-12'>Crypto Coins</h1>
      <Coins coins={coins} />
    </div>
  )
}
