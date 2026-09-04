import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { findProduct, PRODUCTS } from "@/lib/products";

export async function POST(req: Request) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  // Ensure the base URL has a protocol
  const normalizedBaseUrl = baseUrl.startsWith("http")
    ? baseUrl
    : `https://${baseUrl}`;

  try {
    const body = await req.json().catch(() => ({}));
    const productKey: string = body.productKey || PRODUCTS.GUIA_PRACTICA.key;
    const selectedProduct = findProduct(productKey);

    // Sin fallback: cobrar otro producto porque la clave no existe es peor que
    // fallar de forma visible.
    if (!selectedProduct) {
      return NextResponse.json(
        { error: `Producto no disponible: ${productKey}` },
        { status: 400 }
      );
    }

    const lineItems = [
      {
        price_data: {
          currency: selectedProduct.currency,
          product_data: {
            name: selectedProduct.name,
            description: selectedProduct.description,
          },
          unit_amount: selectedProduct.unitAmount,
        },
        quantity: 1,
      },
    ];
    const successUrl = `${normalizedBaseUrl}${selectedProduct.successPath}?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${normalizedBaseUrl}${selectedProduct.cancelPath}`;
    const metadata = {
      product: selectedProduct.key,
    };

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
