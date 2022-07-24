import { Res } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import console from 'console';
import { Response } from 'express';
import { Repository } from 'typeorm';
import { CreateMahasiswaDto } from './dto/create-mahasiswa.dto';
import { UpdateMahasiswaDto } from './dto/update-mahasiswa.dto';
import { Mahasiswa } from './entities/mahasiswa.entity';

@Injectable()
export class MahasiswaService {

  constructor(
    @InjectRepository(Mahasiswa)
    private mahasiswaRepository: Repository<Mahasiswa>
  ){}

  async create(createMahasiswaDto: CreateMahasiswaDto, @Res() res:Response):Promise<any> {
    const data = await this.mahasiswaRepository.save(createMahasiswaDto);
    if(data){
        res.status(HttpStatus.OK).json({
          code:200,
          message:"success",
          data:data
        });
    }
  }

  async findAll():Promise<CreateMahasiswaDto[]> {
    return await this.mahasiswaRepository.find();
  }

  async findOne(id: number, @Res() res:Response):Promise<any> {

    const obj = await this.mahasiswaRepository.findOneBy({
      mmahasiswapk:id
    });

    if(obj !=null){
      res.status(HttpStatus.OK).json({
        code:200,
        message:"success",
        data:obj
      });
    }else {
      res.status(HttpStatus.NOT_FOUND).json({
        code:404,
        message:"Data Tidak ditemukan"
      });
    }
    
  }

  async update(id: number, updateMahasiswaDto: UpdateMahasiswaDto, @Res() res:Response):Promise<any> {
    const obj = await this.mahasiswaRepository.findOneBy({
      mmahasiswapk:id
    });

    if(obj !=null){
      await this.mahasiswaRepository.update(obj.mmahasiswapk, updateMahasiswaDto);
      res.status(HttpStatus.OK).json({
        code:201,
        message:'success',
        data:updateMahasiswaDto
      });
    }

  }

  async remove(id: number, @Res() res:Response):Promise<any> {
    const obj = await this.mahasiswaRepository.findOneBy({
      mmahasiswapk:id
    });

    if(obj!=null){
      await this.mahasiswaRepository.delete(id);
      res.status(HttpStatus.OK).json({
        code:201,
        message:'success delete data'
      });

    }else {
      res.status(HttpStatus.NOT_FOUND).json({
        code:404,
        message:"data tidak ditemukan"
      });
    }

  }
}
