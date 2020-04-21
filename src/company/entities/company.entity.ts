import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Company } from '../models/company';

@Entity({name: 'company'})
export class CompanyEntity implements Company {

    @PrimaryGeneratedColumn({
        // type: 'bigint',
    })
    id: number;

    @Column({
        nullable: false,
        unique: true,
        // type: 'text'
    })
    name: string;

    @Column({
        // type: 'text'
    })
    full_name: string;

    @Column({
        // type: 'text'
    })
    created_by: string;

    // @CreateDateColumn()
    // createdAt;

    // @UpdateDateColumn()
    // updatedAt;
}