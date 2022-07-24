import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MahasiswaService } from './mahasiswa.service';
import { CreateMahasiswaDto } from './dto/create-mahasiswa.dto';
import { UpdateMahasiswaDto } from './dto/update-mahasiswa.dto';
import { ApiTags } from '@nestjs/swagger';
import { Res } from '@nestjs/common';
import { Response } from 'express';

@ApiTags('mahasiswa')
@Controller('mahasiswa')
export class MahasiswaController {
  constructor(private readonly mahasiswaService: MahasiswaService) {}

  @Post()
  create(@Body() createMahasiswaDto: CreateMahasiswaDto, @Res() res:Response) {
    return this.mahasiswaService.create(createMahasiswaDto, res);
  }

  @Get()
  findAll() {
    return this.mahasiswaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res:Response) {
   return await this.mahasiswaService.findOne(+id, res);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMahasiswaDto: UpdateMahasiswaDto, @Res() res:Response) {
    return this.mahasiswaService.update(+id, updateMahasiswaDto,res);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() res:Response) {
    return this.mahasiswaService.remove(+id, res);
  }
}
