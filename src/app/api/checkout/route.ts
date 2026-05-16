import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  // Ensure the base URL has a protocol
  const normalizedBaseUrl = baseUrl.startsWith("http")
    ? baseUrl
    : `https://${baseUrl}`;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Guía Práctica — Transformación Integral",
              description:
                "Guía de Ainara: silencia tu mente crítica, gestiona la ansiedad y reconecta con tu autoestima en 21 días.",
            },
            unit_amount: 2700, // $27.00 USD
          },
          quantity: 1,
        },
      ],
      success_url: `${normalizedBaseUrl}/guia-practica/exito?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${normalizedBaseUrl}/guia-practica`,
      metadata: {
        product: "guia-practica-transformacion-integral",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    const stripeError = error as { type?: string; message?: string; code?: string };
    console.error("Stripe checkout error:", {
      type: stripeError.type,
      message: stripeError.message,
      code: stripeError.code,
    });
    return NextResponse.json(
      {
        error: "Error al crear la sesión de pago",
        details: stripeError.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
