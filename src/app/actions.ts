"use server"
// use stripe
import Stripe from 'stripe';

export async function handlePayment() {
	const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';
	try {
		const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

		const params: Stripe.Checkout.SessionCreateParams = {
			mode: 'payment',
			payment_method_types: ['card', 'us_bank_account'],
			line_items: [
				{
					price_data: {
						currency: 'usd',
						product_data: {
							name: 'Donation',
						},
						unit_amount: 500,
					},
					quantity: 1,
				},
			],
			success_url: `${baseUrl}/success`,
			cancel_url: `${baseUrl}/`,
		}
		const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(params)
		return {
			redirect: checkoutSession.url
		}
	} catch (error) {
		console.log(error)
		Promise.reject(new Error('Something went wrong'))
	}
}