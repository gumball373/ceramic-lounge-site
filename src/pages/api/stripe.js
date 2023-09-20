import Stripe from "stripe";

export async function POST({ params, request }) {

    const STRIPE_SECRET_KEY = await db(import.meta.env.STRIPE_SECRET_KEY);
    // const STRIPE_PUBLISHABLE_KEY = import.meta.env.STRIPE_PUBLISHABLE_KEY;

    //require('stripe')(STRIPE_SECRET_KEY);
    const stripe = new Stripe(STRIPE_SECRET_KEY, {
        apiVersion: '2023-08-16',
    });

    return new Response(JSON.stringify({message: STRIPE_SECRET_KEY}))

    try{
        const session = await stripe.checkout.sessions.create({
                line_items: params.body,
                mode: 'payment',
                success_url: `${request.headers.origin}/?success=true`,
                cancel_url: `${request.headers.origin}/?canceled=true`, 
            });
            return new Response(JSON.stringify({
                message: session.url
              }), {
                status: 303
              })
    } catch {
        console.log("checkout session denied");
    }    
}