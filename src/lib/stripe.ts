import Stripe from "stripe";

let stripeInstance: Stripe | null = null;

export const stripe = new Proxy({} as Stripe, {
  get(target, prop, receiver) {
    if (!stripeInstance) {
      const key = process.env.STRIPE_SECRET_KEY;
      if (!key) {
        throw new Error("STRIPE_SECRET_KEY is not defined in environment variables");
      }
      stripeInstance = new Stripe(key);
    }
    return Reflect.get(stripeInstance, prop, receiver);
  }
});
