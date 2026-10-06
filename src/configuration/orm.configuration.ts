import { DataSource, type DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'better-sqlite3',
    database: 'mydb.sqlite',
    synchronize: false,
    entities: [import.meta.dirname + '/../**/*.model.{js,ts}'],
    migrations: [import.meta.dirname + '/../migrations/*.{js,ts}']
}

export default new DataSource(dataSourceOptions);
