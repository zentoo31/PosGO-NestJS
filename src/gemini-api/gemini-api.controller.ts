import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { GeminiApiService } from './gemini-api.service';

@Controller('gemini-api')
export class GeminiApiController {
    constructor(private readonly geminiApiService: GeminiApiService) { }

    @Post('generate-text')
    async generateText(@Body('prompt') prompt: string): Promise<string> {
        const stream = await this.geminiApiService.generateTextStream(prompt);
        let result = '';

        for await (const chunk of stream) {
            result += chunk.text;
        }

        return result;
    }
}
