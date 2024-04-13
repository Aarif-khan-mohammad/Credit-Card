import React from 'react'
import { useState } from 'react'
import { MainContainer , LeftContainer ,RightContainer , 
    Heading , FormContainer , InputElement , Para , 
    CardImageContainer, CardNumber , Label , HolderName
    } from './styledComponent'

const CreditCard = () => {

    const [cardNumber , setCardNumber] = useState("")
    const [cardHolderName , setCardHolderName] = useState("")

    const onChangeCardNumber = (event) => {
        setCardNumber(event.target.value)
    }

    const onChangeName = (event) => {
        setCardHolderName(event.target.value)
    }

  return (
    <MainContainer>
        <LeftContainer>
        <Heading>CREDIT CARD</Heading>
        <CardImageContainer>
            <CardNumber>{cardNumber}</CardNumber>
            <Label>CARDHOLDER NAME</Label>
            <HolderName>{cardHolderName}</HolderName>
        </CardImageContainer>
        </LeftContainer>
        <RightContainer>
            <Para>Payment Method</Para>
            <FormContainer>
                <InputElement type="text" onChange={onChangeCardNumber} placeholder="Card Number" />
                <InputElement type="text" onChange={onChangeName} placeholder="Card Holder Name" />
            </FormContainer>
        </RightContainer>
      
    </MainContainer>
  )
}

export default CreditCard
