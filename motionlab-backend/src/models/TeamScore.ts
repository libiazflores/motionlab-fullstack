import {
  Table,
  Model,
  Column,
  DataType,
  AllowNull,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Round } from "./Round";
import { Team } from "./Team";
import { Optional } from "sequelize";

interface TeamScoreAttributes {
  id: number;
  team_id: number;
  round_id: number;
  score: number;
  time: number;
  position: number;
}

interface TeamScoreCreationAttributes
  extends Optional<TeamScoreAttributes, "id"> {}

@Table({
  tableName: "team_scores",
  timestamps: true,
  updatedAt: false,
})
export class TeamScore extends Model<
  TeamScoreAttributes,
  TeamScoreCreationAttributes
> {
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  score!: number;

  @AllowNull(false)
  @Column({
    type: DataType.FLOAT,
  })
  time!: number;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  position!: number;

  @ForeignKey(() => Team)
  @Column({
    type: DataType.INTEGER,
  })
  team_id!: number;

  @ForeignKey(() => Round)
  @Column({
    type: DataType.INTEGER,
  })
  round_id!: number;

  @BelongsTo(() => Team, {
    foreignKey: "team_id",
    constraints: false,
  })
  team!: Team;

  @BelongsTo(() => Round, {
    foreignKey: "round_id",
    constraints: false,
  })
  round!: Round;
}
