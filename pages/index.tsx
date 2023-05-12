import { useState, useEffect } from "react";
import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk';



export default function Home() {

  const [amount, setAmount] = useState<number>(0);
  return (
    <div className="container mx-auto py-12 px-12 max-sm:px-6 flex flex-col gap-4">
    <div className="grid place-content-center h-screen"> 
    <div className="flex flex-col justify-between items-center p-24 h-screen">
    <input type='number' placeholder='Amount' className='outline-none bg-white border-2 rounded-md px-4 py-2 text-xl
      text-black border-orange-400 ' value={amount} onChange={(e: any) => { setAmount(e.target.value) }} />
      <PaymentForm
        applicationId="sandbox-sq0idb-lla6F4wtjdejc5-qlhMzRw"
        cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
          const response = await fetch("/api/payment", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              sourceId: token.token,
              payment_amount: amount
            }),
          });
          console.log(await response.json());
        }}
        locationId='LPPWJ2K9XFR34'
      >
        <CreditCard />
      </PaymentForm>
      </div>
    </div>
    </div>
  
  )
}