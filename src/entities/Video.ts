import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToMany, ManyToOne, JoinColumn, Timestamp, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";

@Entity("videos")
export class Video {
    @PrimaryGeneratedColumn()
    videoId: number;

    @Column()
    categoryId: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    duration: string;

    @ManyToOne(() => Category)
    @JoinColumn({name:"categoryId"})
    category: Category;  

    @CreateDateColumn()
    created_at: Date;
}