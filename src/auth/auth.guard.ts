import { CanActivate, ExecutionContext, Injectable, UnauthorizedException, Request} from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class AuthGuard implements CanActivate {

  private supabase = createClient(
    process.env.SUPABASE_URL || 'https://your-supabase-url.supabase.co',
    process.env.SUPABASE_KEY || 'your-supabase-key'
  )

  async canActivate(
    context: ExecutionContext
  ): Promise<boolean> {
    const req: Request = context.switchToHttp().getRequest();
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Falta el token');
    }
     const token = authHeader.split(' ')[1];
    const { data, error } = await this.supabase.auth.getUser(token);

    if (error || !data.user) {
      throw new UnauthorizedException('Token inválido');
    }

    (req as any).user = data.user;
    return true;
  }
}
