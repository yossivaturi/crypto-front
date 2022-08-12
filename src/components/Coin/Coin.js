import React from 'react';
import './Coin.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Coin = ({ name, image, symbol ,price, volume, priceChange, marketcap, handleBuy }) => {
    return (

            
            <Row className="d-flex justify-content-between" style={{backgroundColor: "#212529", color: "white", border: "1px solid #0D6EFD"}}>
                <Col style={{marginTop: "0.5%"}} lg={1} xs={12} ><img style={{height:'50px', width:'50px'}} src={image} alt="crypto"/></Col>

                <Col style={{paddingTop: "1.5%"}} lg={2}><p>{name}</p></Col>
                <Col style={{paddingTop: "1.5%"}} lg={2}>{price}₪</Col>
                    


                <Col style={{paddingTop: "1.5%"}} lg={2}>
                    
                    { priceChange < 0 ? 
                        (<p className="red">Daily Change: {priceChange.toFixed(3)}%</p>)
                            :
                        (<p className="green">Daily Change: {priceChange.toFixed(3)}%</p>)
                    }               
                </Col>

                <Col sm={6} lg={2} className="d-flex justify-content-between" >
                <form className="center-block" onSubmit={(e) => handleBuy(e, price, name)}>
   
                    <Button variant="outline-success" id={'buy'} type="submit">Buy</Button>{' '}
                    <Button variant="outline-success" id={'sell'} type="submit">Sell</Button>

                    <Form.Control className="center-block buy-input" style={{backgroundColor: "black", color: "white", width: "150px"}} size={'sm'} id={name} type="number" step="0.00001" placeholder="Enter a number" />

                    {/* <button id={'buy'} type="submit">Buy</button>
                    <button id={'sell'} type="submit">Sell</button> */}
                    {/* <input id={name} type="number" step="0.00001" placeholder="Enter a number" ></input> */}
                </form>                
                </Col>

                
                {/* 
                <Col></Col> */}

            </Row>
            

    //     <ListGroup.Item
    //         style={{backgroundColor: "#212529", color: "white", border: "1px solid #0D6EFD"}}
    //         as="li"
    //         className="d-flex justify-content-between align-items-start"
    //     >
    //         <div className="ms-2 me-auto">     
    //             <img style={{height:'50px', width:'50px'}} src={image} alt="crypto"/>
    //         </div>            
           
    //         <div className="ms-2 me-auto">     
    //             <div className="fw-bold">{name}</div>
    //         </div>
    //         <div className="ms-2 me-auto">     
    //             <div className="fw-bold">{symbol.toUpperCase()}</div>
    //         </div>
    //         <Badge variant="primary" pill>
    //         <div className="ms-2 me-auto">     
    //             <div className="fw-bold">Daily Change</div>
    //             <div className="fw-bold">{priceChange} %</div>
                
    //         </div>
                
    //         </Badge>
    //   </ListGroup.Item>
    
















    //     <>    
    //       <tr>
    //         <td><img style={{height:'6vh', width:'3vw'}} src={image} alt="crypto"/></td>
    //         <td style={{paddingTop:'20px'}} >{name}</td>
    //         <td style={{paddingTop:'20px'}}>{symbol.toUpperCase()}</td>
    //         <td style={{paddingTop:'20px'}}>
    //         { priceChange < 0 ? 
    //             (<p className="red">{priceChange.toFixed(3)}%</p>)
    //             :
    //             (<p className="green"> {priceChange.toFixed(3)}%</p>)
    //         } 
    //         </td>
    //         <td style={{paddingTop:'20px'}}>{price}₪</td>

    //         <td style={{paddingTop:'20px'}}>    
    //             <form onSubmit={(e) => handleBuy(e, price, name)}>
    //                 <button id={'buy'} type="submit">Buy</button>
    //                 <button id={'sell'} type="submit">Sell</button>
    //                 <input id={name} type="number" step="0.00001" placeholder="Enter a number" ></input>
    //             </form>
    //         </td>
    //       </tr>
       
      

    //      <div className="coin-container">
    //         <div className="coin-row">
    //             <div className="coin">
    //                 <img src={image} alt="crypto"/>
    //                 <h1>{name}</h1>
    //                 <h1>{symbol.toUpperCase()}</h1>
    //                 <h1>{price}₪</h1>
    //                 <h1>Daily change: </h1>
    //                 { priceChange < 0 ? 
    //                     (<h1 className="red">{priceChange.toFixed(3)}%</h1>)
    //                     :
    //                     (<h1 className="green"> {priceChange.toFixed(3)}%</h1>)
    //                 }
    //             </div>

    //                 <form onSubmit={(e) => handleBuy(e, price, name)}>
    //                     <button id={'buy'} type="submit">Buy</button>
    //                     <button id={'sell'} type="submit">Sell</button>
    //                     <input id={name} type="number" step="0.00001" placeholder="Enter a number" ></input>
    //                 </form>
    //         </div>  
    //     </div> 
    //    </>
    )
}

export default Coin