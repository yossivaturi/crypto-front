import React, {useState} from 'react';
import Coin from '../Coin/Coin';
import './Coins.css';
import Container from 'react-bootstrap/Container'

const Coins = (props) => {
    const [search, setSearch] = useState('');

    const handleChange = e => {
      setSearch(e.target.value)
    }

    const filteredCoins = props.coins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
          <div className="coin-search">
            <input onChange={handleChange} type="text" placeholder="Search Coin" className="coin-input"/>      
          </div>
          <Container fluid>
          {filteredCoins.map(coin => {
              return(
                <Coin 
                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  marketcap={coin.market_cap}
                  price={coin.current_price}
                  priceChange={coin.price_change_percentage_24h}
                  volume={coin.total_volume}
                  handleBuy={props.handleBuy}
                />  
              )
          })} 
          </Container>
        </>   
    )}
export default Coins;
