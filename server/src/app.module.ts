import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Todo, TodoModule } from './todo';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('HOST'),
        port: config.get<number>('PORT'),
        username: config.get('USERNAME'),
        password: config.get('PASSWORD'),
        database: config.get('DB_NAME'),
        entities: [Todo],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    TodoModule,
  ],
})
export class AppModule {}
