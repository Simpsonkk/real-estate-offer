import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'character varying', unique: true, nullable: false })
  email: string;

  @Column({ type: 'text', nullable: false })
  password: string;

  @Column({ type: 'character varying', nullable: false })
  fullName: string;

  @CreateDateColumn({ type: 'timestamp with time zone', select: false })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone', select: false })
  updatedAt: Date;
}
