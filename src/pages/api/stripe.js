export async function STRIPE_CHECKOUT_PAGE({ params, request, redirect }) {

    const STRIPE_SECRET_KEY = import.meta.env.STRIPE_SECRET_KEY;
    // const STRIPE_PUBLISHABLE_KEY = import.meta.env.STRIPE_PUBLISHABLE_KEY;

    const stripe = require('stripe')(STRIPE_SECRET_KEY);

    try{
        const session = await stripe.checkout.sessions.create({
                line_items: params, //should be a json array
                mode: 'payment',
                success_url: `${request.headers.origin}/?success=true`,
                cancel_url: `${request.headers.origin}/?canceled=true`,
            });
        return redirect(session.url, 303);
    } catch {
        console.log("checkout session denied");
    }    
}