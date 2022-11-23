import { ColumnType } from 'typeorm';

const pgSqliteTypeMapping: { [key: string]: ColumnType } = {
  enum: 'text',
  timestamp: 'datetime',
};

export default function DbAwareType(pgType: ColumnType): ColumnType {
  const isTestEnv = process.env.NODE_ENV === 'test';

  const pgTypeStr = pgType.toString();
  if (isTestEnv && pgTypeStr in pgSqliteTypeMapping) {
    return pgSqliteTypeMapping[pgTypeStr];
  }

  return pgType;
}
