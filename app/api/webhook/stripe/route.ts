import stripe from 'stripe'
import { NextResponse } from 'next/server'
import { createOrder } from '@/lib/actions/order.actions'

export async function POST(request: Request) {
  console.log('ponit A')
  const body = await request.text()
  console.log('ponit A body', body)

  const sig = request.headers.get('stripe-signature') as string
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

  let event

  try {
    console.log('ponit B')
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret)
  } catch (err) {
    return NextResponse.json({ message: 'Webhook error', error: err })
  }

  // Get the ID and type
  const eventType = event.type
  console.log('ponit C')

  // CREATE
  if (eventType === 'checkout.session.completed') {
    console.log('ponit D')
    const { id, amount_total, metadata } = event.data.object

    const order = {
      stripeId: id,
      eventId: metadata?.eventId || '',
      buyerId: metadata?.buyerId || '',
      totalAmount: amount_total ? (amount_total / 100).toString() : '0',
      createdAt: new Date(),
    }
    console.log('ponit E')
    const newOrder = await createOrder(order)
    console.log('ponit F')
    return NextResponse.json({ message: 'OK', order: newOrder })
  }

  return new Response('', { status: 200 })
}