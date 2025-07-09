import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { GeminiApiService } from './gemini-api.service';

@Controller('gemini-api')
export class GeminiApiController {
    constructor(private readonly geminiApiService: GeminiApiService) { }

    @Post('generate-text')
    async generateText(@Body('prompt') prompt: string, @Res() res: Response) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.setHeader('Transfer-Encoding', 'chunked');

        const stream = await this.geminiApiService.generateTextStream(prompt);

        for await (const chunk of stream) {
            res.write(chunk.text);
        }

        res.end();
    }
}
