import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('estates')
export class Estate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'character varying', nullable: false })
  name: string;

  @Column({ type: 'character varying', nullable: false })
  image: string;

  @Column({ type: 'integer', nullable: false })
  price: number;

  @Column({ type: 'integer', nullable: false })
  ticket: number;

  @Column({ type: 'numeric', nullable: false })
  yield: number;

  @Column({ type: 'integer', nullable: false, name: 'days_left' })
  daysLeft: number;

  @Column({ type: 'numeric', nullable: false })
  sold: number;

  @CreateDateColumn({
    type: 'timestamp with time zone',
    name: 'created_at',
    select: false,
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
    name: 'updated_at',
    select: false,
  })
  updatedAt: Date;
}
