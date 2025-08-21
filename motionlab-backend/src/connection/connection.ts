import { Sequelize } from "sequelize-typescript";
import { Match } from "../models/Match";
import { Round } from "../models/Round";
import { Student } from "../models/Student";
import { StudentScore } from "../models/StudentScore";
import { StudentTeam } from "../models/StudentTeam";
import { Teacher } from "../models/Teacher";
import { Team } from "../models/Team";
import { TeamScore } from "../models/TeamScore";
import { TeamStats } from "../models/TeamStats";
import dotenv from "dotenv";
dotenv.config();

const connection = new Sequelize(process.env.DB_URL as string, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  models: [
    Match,
    Round,
    Student,
    StudentScore,
    StudentTeam,
    Teacher,
    Team,
    TeamScore,
    TeamStats,
  ],
  logging: false,
});

async function connectionDB() {
  try {
    await connection.authenticate();
    console.log("Conexión a la base de datos establecida correctamente.");
    await connection.sync({ alter: true });
  } catch (error) {
    console.log("Error al conectar la base de datos:", error);
  }
}

export default connectionDB;
