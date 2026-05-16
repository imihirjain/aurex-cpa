import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, subject, message } = req.body;

    // SMTP configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: "true",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `Aurex CPA Website < ${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      replyTo: email,
      subject: `New Contact Form: ${name}`,
      html: `
              <!-- Header -->
      <tr>
        <td style="background-color:#1e3a8a; color:#ffffff; padding:20px; text-align:center;">
          <h1 style="margin:0; font-size:24px;">New Contact Form Submission</h1>
        </td>
      </tr>

      <!-- Content -->
      <tr>
        <td style="padding:30px; color:#333333; font-size:16px; line-height:1.6;">
          
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Location:</strong> ${location}</p>

          <hr style="border:none; border-top:1px solid #dddddd; margin:20px 0;" />

          <h3 style="margin-bottom:10px;">Message:</h3>
          <p style="background:#f9f9f9; padding:15px; border-radius:6px;">
            ${message}
          </p>

        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background-color:#f3f4f6; text-align:center; padding:15px; color:#666; font-size:14px;">
          Aurex CPA Website Contact Form
        </td>
      </tr>

    </table>
  </td>
</tr>

      `,
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
}
