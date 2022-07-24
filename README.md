# DOCUMENTASI NEST JS

### INSTALL NEST JS

```
nest new namaaplikasi

```

### INSTALL SWAGGER UI

```
npm install --save @nestjs/swagger swagger-ui-express

```

### CONFIGURATION SWAGGER UI

```
main.ts


import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle('Demo Application')
                      .setDescription("Demo API Application")
                      .setVersion('v1')
                      .addTag('books')
                      .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();


```

### INSTALL TYPE ORM

```
npm i --save @nestjs/typeorm typeorm

```