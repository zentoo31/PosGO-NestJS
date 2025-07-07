import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getThankYouHTML(): string {
    return `
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Gracias por confirmar</title>
          <style>
            body {
              font-family: system-ui, -apple-system, Roboto, sans-serif;
              background-color: #f9fafb;
              padding: 2rem;
              text-align: center;
              color: #1f2937;
            }
            .message {
              background: white;
              padding: 2rem;
              border-radius: 10px;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
              display: inline-block;
              max-width: 500px;
            }
            h1 {
              color: #16429e;
            }
          </style>
        </head>
        <body>
          <div class="message">
            <h1>¡Gracias por confirmar tu email!</h1>
            <p>Ya puedes cerrar esta ventana y volver a la aplicación.</p>
          </div>
        </body>
      </html>
    `;
  }
}
