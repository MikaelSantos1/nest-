import { Module } from '@nestjs/common';
import { ListaArtistasService } from './lista-artistas.service';
import { ListaArtistasController } from './lista-artistas.controller';

@Module({
  controllers: [ListaArtistasController],
  providers: [ListaArtistasService]
})
export class ListaArtistasModule {}
