export default function AutomaticEmail({ name, message }) {
  const emailHtml = `
  <div style="width: 100%; padding: 20px; box-sizing: border-box; background-color: #f5f5f5;">
  <div style="max-width: 600px; margin: 0 auto; text-align: left;">
    <h3 style="margin-bottom: 20px;">Hola ${name},</h3>
    <p style="margin-bottom: 20px;">
      Gracias por tu mensaje. Me pondré en contacto contigo lo antes posible. Saludos cordiales,
    </p>
    <div style="display: flex; align-items: center;">
      <img
        alt="Image Preview"
        src="https://res.cloudinary.com/dk5oluny4/image/upload/v1699659779/zfsnskbdzkq7ez9jycor.png"
        style="max-width: 60px; max-height: 60px; margin-right: 20px;"
      />
      <div>
        <h5 style="margin: 0;">Gerson Centurión</h5>
      </div>
    </div>
  </div>
</div>
  `;
  return emailHtml;
}
