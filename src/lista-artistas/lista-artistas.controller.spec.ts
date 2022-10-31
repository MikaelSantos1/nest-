import { Test, TestingModule } from '@nestjs/testing';
import { ListaArtistasController } from './lista-artistas.controller';
import { ListaArtistasService } from './lista-artistas.service';

describe('ListaArtistasController', () => {
  let controller: ListaArtistasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListaArtistasController],
      providers: [ListaArtistasService],
    }).compile();

    controller = module.get<ListaArtistasController>(ListaArtistasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
