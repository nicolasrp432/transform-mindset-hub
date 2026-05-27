import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { PRODUCTS } from "@/lib/products";

export async function POST(req: Request) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  // Ensure the base URL has a protocol
  const normalizedBaseUrl = baseUrl.startsWith("http")
    ? baseUrl
    : `https://${baseUrl}`;

  try {
    const body = await req.json().catch(() => ({}));
    const productKey = body.productKey || "guia-practica";
    const premiumProduct = Object.values(PRODUCTS).find(
      (product) => product.key === productKey
    );

    let lineItems = [];
    let successUrl = "";
    let cancelUrl = "";
    let metadata = {};

    if (premiumProduct) {
      lineItems = [
        {
          price_data: {
            currency: premiumProduct.currency,
            product_data: {
              name: premiumProduct.name,
              description: premiumProduct.description,
            },
            unit_amount: premiumProduct.unitAmount,
          },
          quantity: 1,
        },
      ];
      successUrl = `${normalizedBaseUrl}/${premiumProduct.key}?session_id={CHECKOUT_SESSION_ID}`;
      cancelUrl = `${normalizedBaseUrl}/${premiumProduct.key}`;
      metadata = {
        product: premiumProduct.key,
      };
    } else if (productKey === "libro-princesa") {
      lineItems = [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "La Princesa que se le cayó la Corona",
              description:
                "Un cuento inspirador sobre el empoderamiento femenino, la sanación y la búsqueda de la autoestima.",
            },
            unit_amount: 1500, // $15.00 USD
          },
          quantity: 1,
        },
      ];
      successUrl = `${normalizedBaseUrl}/libro-princesa/exito?session_id={CHECKOUT_SESSION_ID}`;
      cancelUrl = `${normalizedBaseUrl}/libro-princesa`;
      metadata = {
        product: "libro-princesa",
      };
    } else if (productKey === "agenda-reflexion") {
      lineItems = [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Agenda de Reflexión Diaria",
              description:
                "Espacio íntimo de crecimiento personal para reflexionar, practicar gratitud y reconectar contigo.",
            },
            unit_amount: 1900, // $19.00 USD
          },
          quantity: 1,
        },
      ];
      successUrl = `${normalizedBaseUrl}/agenda-reflexion/exito?session_id={CHECKOUT_SESSION_ID}`;
      cancelUrl = `${normalizedBaseUrl}/agenda-reflexion`;
      metadata = {
        product: "agenda-reflexion",
      };
    } else {
      // Default to guia-practica
      lineItems = [
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
      ];
      successUrl = `${normalizedBaseUrl}/guia-practica/exito?session_id={CHECKOUT_SESSION_ID}`;
      cancelUrl = `${normalizedBaseUrl}/guia-practica`;
      metadata = {
        product: "guia-practica-transformacion-integral",
      };
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems,
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: metadata,
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
