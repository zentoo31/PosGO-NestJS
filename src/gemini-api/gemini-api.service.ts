import { Injectable } from '@nestjs/common';
import { GoogleGenAI } from '@google/genai';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GeminiApiService {
    private genAI: GoogleGenAI;

    constructor(private configService: ConfigService) {
        const apiKey = this.configService.get<string>('GOOGLE_GENAI_API_KEY');
        if (!apiKey) {
            throw new Error('GOOGLE_GENAI_API_KEY must be defined in environment variables');
        }
        this.genAI = new GoogleGenAI({ apiKey });
    }

    async generateTextStream(prompt: string) {
        return await this.genAI.models.generateContentStream({
            model: 'gemini-2.5-flash',
            contents:JSON.stringify(prompt),
            config: {
                systemInstruction:
                    'Eres un asistente de Ia que ayuda en una aplicación de punto de venta, se te va a enviar toda la información de los productos de la tienda en un formato json y debes responder con una apreciación de la información para el gerente de la tienda, no hables de cosas tecnicas sino de cosas que le interesen al gerente, como ventas, productos, etc.',
            },
        });
    }

}
