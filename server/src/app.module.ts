import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

const moduleImports = [] as any;
if(process.env.ENV === 'prod') {
  moduleImports.push(ServeStaticModule.forRoot({
    rootPath: path.join(__dirname, '../..', 'front/dist'),
  }))
}
@Module({
  imports: moduleImports,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
