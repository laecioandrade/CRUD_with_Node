import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToMany, ManyToOne, JoinColumn } from "typeorm";
import { Category } from "./Category";

@Entity("videos")
export class Video {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    duration: number;

    @Column()
    category_id: string;

    @ManyToOne(() => Category)
    @JoinColumn({name:"category_id"})
    category: Category;  

    @CreateDateColumn()
    create_at: Date;
}