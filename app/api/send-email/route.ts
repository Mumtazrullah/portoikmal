import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Transporter (pakai Gmail contoh, bisa sesuaikan dengan SMTP lain)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // email pengirim
        pass: process.env.EMAIL_PASS, // app password (bukan password Gmail langsung)
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // email tujuan (misalnya email kamu sendiri)
      subject: `Pesan Contact dari Portofolio: ${name}`,
      text: message,
      html: `<p><strong>Nama:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Pesan:</strong><br/>${message}</p>`,
    });

    return NextResponse.json({ success: true, message: "Email terkirim" });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Gagal mengirim email" },
      { status: 500 }
    );
  }
}
