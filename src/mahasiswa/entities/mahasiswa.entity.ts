import { ApiProperty } from "@nestjs/swagger";
import { Table } from "sequelize-typescript";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("mmahasiswa")
export class Mahasiswa {
    @PrimaryGeneratedColumn()
    mmahasiswapk:number;

    @Column()
    name:string;

    @Column()
    npm:string;
    
    @Column()
    address:string;

    @Column('date')
    last_updated:string;

    @Column()
    created_by:string;

    @Column()
    updated_by:string;

}
