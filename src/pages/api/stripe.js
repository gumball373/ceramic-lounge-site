import Stripe from "stripe";
const STRIPE_SECRET_KEY = import.meta.env.STRIPE_SECRET_KEY;

const stripe = new Stripe(STRIPE_SECRET_KEY);

export async function POST({ request }) {
    
    const body = await request.json();
    var session;
    try{
        session = await stripe.checkout.sessions.create({
          shipping_address_collection: {
              allowed_countries: ['US'],
            },
            shipping_options: [
                {
                  shipping_rate_data: {
                    type: 'fixed_amount',
                    fixed_amount: {
                      amount: 0,
                      currency: 'usd',
                    },
                    display_name: 'Free shipping',
                    delivery_estimate: {
                      minimum: {
                        unit: 'business_day',
                        value: 5,
                      },
                      maximum: {
                        unit: 'business_day',
                        value: 7,
                      },
                    },
                  },
                }],
                mode: 'payment',
                line_items: body,
                success_url: 'http://localhost:4321',
                cancel_url: 'http://localhost:4321',
                automatic_tax: {enabled: true}
            });
    } catch {
        console.log("checkout session denied");
    }

    return new Response(JSON.stringify({
      url: session.url
    }, {
      status: 303
    }))
}


          //   , {
          //     status: 303
          // }


            // shipping_address_collection: {
            //   allowed_countries: ['US'],
            // },
            // shipping_options: [
            //     {
            //       shipping_rate_data: {
            //         type: 'fixed_amount',
            //         fixed_amount: {
            //           amount: 0,
            //           currency: 'usd',
            //         },
            //         display_name: 'Free shipping',
            //         delivery_estimate: {
            //           minimum: {
            //             unit: 'business_day',
            //             value: 5,
            //           },
            //           maximum: {
            //             unit: 'business_day',
            //             value: 7,
            //           },
            //         },
            //       },
            //     }],