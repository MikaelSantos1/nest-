import { Injectable } from '@nestjs/common';
import { CreateListaArtistaDto } from './dto/create-lista-artista.dto';
import { UpdateListaArtistaDto } from './dto/update-lista-artista.dto';

@Injectable()
export class ListaArtistasService {
  create(createListaArtistaDto: CreateListaArtistaDto) {
    return 'This action adds a new listaArtista';
  }

  findAll() {
    return `This action returns all listaArtistas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} listaArtista`;
  }

  update(id: number, updateListaArtistaDto: UpdateListaArtistaDto) {
    return `This action updates a #${id} listaArtista`;
  }

  remove(id: number) {
    return `This action removes a #${id} listaArtista`;
  }
}
