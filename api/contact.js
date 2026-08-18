// Vercel serverless function — POST /api/contact
// Sends the contact form submission to your inbox via Resend (https://resend.com).
//
// SETUP (one-time):
//   1. Create a free Resend account: https://resend.com/signup
//   2. Grab an API key: https://resend.com/api-keys
//   3. In your Vercel project settings -> Environment Variables, add:
//        RESEND_API_KEY   = re_xxxxxxxxxxxx
//        CONTACT_TO_EMAIL = mohammeduzair873@gmail.com   (where you want to receive messages)
//   4. Redeploy. That's it — no server to run, no domain verification required
//      for testing (Resend lets you send from their shared onboarding@resend.dev
//      sender until you verify your own domain).
//
// Local dev: copy .env.example to .env.local and fill in the same two values,
// then run `vercel dev` (or `npm run dev` — the Vite dev server proxies /api
// to Vercel's local dev server when you use `vercel dev`).

export const config = {
  runtime: "edge",
};

const RESEND_ENDPOINT = "https://api.resend.com/emails";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", Allow: "POST" },
    });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const name = (body.name || "").toString().trim();
  const email = (body.email || "").toString().trim();
  const message = (body.message || "").toString().trim();
  // honeypot field — real users never fill this in; bots usually do
  const company = (body.company || "").toString().trim();

  if (company) {
    // Silently pretend success so bots don't learn the honeypot worked.
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Name, email, and message are required." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return new Response(JSON.stringify({ error: "One or more fields are too long." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  if (!isValidEmail(email)) {
    return new Response(JSON.stringify({ error: "Please provide a valid email address." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "mohammeduzair873@gmail.com";

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return new Response(
      JSON.stringify({ error: "Contact form is not configured yet. Please email directly instead." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const resendRes = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact Form <onboarding@resend.dev>",
        to: [toEmail],
        reply_to: email,
        subject: `Portfolio inquiry from ${name}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6;">
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
          </div>
        `,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      console.error("Resend API error:", resendRes.status, errText);
      return new Response(JSON.stringify({ error: "Failed to send message. Please try again shortly." }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return new Response(JSON.stringify({ error: "Something went wrong. Please try again shortly." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
