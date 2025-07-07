"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        // Simulate placing an order
        console.log("Order placed successfully!");
        router.push("/");
        alert("Order placed successfully!");
    };
    return (
        <>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Place Order</button>
        </>
    );
}