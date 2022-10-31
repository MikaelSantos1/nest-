import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListaArtistasService } from './lista-artistas.service';
import { CreateListaArtistaDto } from './dto/create-lista-artista.dto';
import { UpdateListaArtistaDto } from './dto/update-lista-artista.dto';

@Controller('lista-artistas')
export class ListaArtistasController {
  constructor(private readonly listaArtistasService: ListaArtistasService) {}

  @Post()
  create(@Body() createListaArtistaDto: CreateListaArtistaDto) {
    return this.listaArtistasService.create(createListaArtistaDto);
  }

  @Get()
  findAll() {
    return this.listaArtistasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listaArtistasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListaArtistaDto: UpdateListaArtistaDto) {
    return this.listaArtistasService.update(+id, updateListaArtistaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listaArtistasService.remove(+id);
  }
}
