import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import Wallet from '../Wallet/Wallet'





const OverlayWallet = ({wallet}) => {

    return (
        
            <OverlayTrigger
                trigger="click"
                key={1}
                placement={'bottom'}
                overlay={
                <Popover id={`popover-positioned-bottom`}>
                    <Popover.Header as="h3">{`Wallet`}</Popover.Header>
                    <Popover.Body>
                   
                    <Wallet coins={wallet} />
                    </Popover.Body>
                </Popover>
                }
                >
                <Button  variant="warning">My Wallet</Button>
            </OverlayTrigger>
        
    )
}


export default OverlayWallet
