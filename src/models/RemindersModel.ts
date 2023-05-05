import { Schema, Model, SchemaType } from "discordia-database-types";
import BaseApp from "../BaseApp";

interface RemindersSchema extends Schema {
  user_id: string;
  time: number;
  message: string;
  timestamp: Date;
}

export class RemindersModel extends Model<RemindersSchema> {
  @BaseApp.Database.Schema
  static schema: SchemaType<RemindersSchema> = {
    user_id: {
      type: String,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      required: true,
    },
  };

  static async getReminders(userId: string) {
    const reminders = await this.findAll({ user_id: userId });
    return reminders;
  }
}
