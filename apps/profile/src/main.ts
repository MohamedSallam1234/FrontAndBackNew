import { NestFactory } from '@nestjs/core';
import { ProfileModule } from './profile.module';

async function bootstrap() {
  const app = await NestFactory.create(ProfileModule);
  await app.listen(3004);
}
bootstrap().then(() => {
  console.log('Profile service started');
});
