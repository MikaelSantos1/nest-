import { PartialType } from '@nestjs/mapped-types';
import { CreateListaArtistaDto } from './create-lista-artista.dto';

export class UpdateListaArtistaDto extends PartialType(CreateListaArtistaDto) {}
