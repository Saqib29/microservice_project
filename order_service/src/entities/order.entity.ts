import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('order')
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    product: string;

    @Column()
    quantity: number;

    @Column()
    orderedBy: string;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    
}