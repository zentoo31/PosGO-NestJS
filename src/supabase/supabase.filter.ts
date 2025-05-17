// src/common/filters/supabase.filter.ts
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { InvalidCredentialsException } from '../auth/auth.service';

@Catch(InvalidCredentialsException)
export class SupabaseFilter implements ExceptionFilter {
  catch(exception: InvalidCredentialsException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.UNAUTHORIZED; // 401 por defecto para credenciales inválidas
    let message = 'Credenciales inválidas';

    // Puedes añadir más lógica aquí si necesitas diferenciar otros errores
    if (exception.message.includes('Email not confirmed')) {
      status = HttpStatus.FORBIDDEN;
      message = 'Por favor confirma tu email primero';
    }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
    });
  }
}