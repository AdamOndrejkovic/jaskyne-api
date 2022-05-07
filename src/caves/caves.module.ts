import { Module } from '@nestjs/common';
import { CavesService } from './caves.service';
import { CavesController } from './caves.controller';
import { MongodbModule } from '../infrastructure/mongo/mongodb.module';
import { CavesProvider } from '../infrastructure/mongo/providers/caves.provider';

@Module({
  imports: [MongodbModule],
  controllers: [CavesController],
  providers: [CavesService, ...CavesProvider],
})
export class CavesModule {}
