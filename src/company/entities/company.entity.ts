import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Company } from '../models/company';

@Entity({name: 'company'})
export class CompanyEntity implements Company {

    @PrimaryGeneratedColumn()
    id: number;

    @PrimaryColumn()
    @Column({
        nullable: false,
        length: 500,
        unique: true
    })
    name: string;

    @PrimaryColumn()
    @Column({
        length: 500
    })
    full_name: string;

    @PrimaryColumn()
    @Column({
        length: 250
    })
    created_by: string;

    @CreateDateColumn()
    createdAt;

    @UpdateDateColumn()
    updatedAt;
}