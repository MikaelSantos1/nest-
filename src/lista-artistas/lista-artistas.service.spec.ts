import { Test, TestingModule } from '@nestjs/testing';
import { ListaArtistasService } from './lista-artistas.service';

describe('ListaArtistasService', () => {
  let service: ListaArtistasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListaArtistasService],
    }).compile();

    service = module.get<ListaArtistasService>(ListaArtistasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
