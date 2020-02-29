import React, {useEffect } from "react"
import { PayPalButton } from "react-paypal-button-v2"

export default function Team33PayPalButton() {
    return (
        <PayPalButton amount="1.00"  options={{clientId: "AdUhpXKvOMVKjIf9ttUz3j_OJhF3Xt5W22YgJcy9p742DK0IouekPrkXu_Ws87otWZVol_MnDAqxyNqa"}} />
    )
}
