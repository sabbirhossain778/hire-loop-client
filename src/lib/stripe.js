import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export const PLAN_PRICE_ID = {
    'seeker_pro': 'price_1TggawGyds0nHkhIZfOLBPJe',
    'seeker_premium': 'price_1TghWDGyds0nHkhIu6xL2OO9',
    'recruiter_growth': 'price_1TghXKGyds0nHkhIBRGFH0WB',
    'recruiter_enterprise': 'price_1TghYfGyds0nHkhIG5AioSzr'
}

