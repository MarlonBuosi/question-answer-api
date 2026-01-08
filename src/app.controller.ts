import { Get, Post } from '@nestjs/common'
// biome-ignore lint/style/useImportType: <will break>
import { AppService } from './app.service'
import type { PrismaService } from './prisma/prisma.service'

export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Post('/hello')
  async store() {
    return await this.prisma.users.findMany()
  }
}
