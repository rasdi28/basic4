import { ApiProperty } from "@nestjs/swagger";

export class CreateMahasiswaDto {
    @ApiProperty()
    readonly name:string;
    
    @ApiProperty()
    readonly npm:string;

    @ApiProperty()
    readonly address:string;
    
    @ApiProperty({type:'string', format:'date-time'})
    readonly last_updated:string;
}
