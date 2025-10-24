import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  try {
    const { text, targetLang } = await req.json();

    // converte para minúsculas
    const res = await fetch("https://libretranslate.de/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: text,
        source: "auto",
        target: targetLang.toLowerCase(), // <- isso resolve
        format: "text",
      }),
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Erro ao traduzir" }, { status: 500 });
  }
}
