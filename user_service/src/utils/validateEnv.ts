import { cleanEnv, port, str } from "envalid";

const validateEnv = () => {
  cleanEnv(process.env, {
    PORT: port(),
    MYSQL_DATABASE: str(),
    MYSQL_USER: str(),
    MYSQL_PASSWORD: str(),
    MYSQL_ROOT_PASSWORD: str(),
    MYSQL_HOST: str(),
    MYSQL_PORT: port(),
  });
};

export default validateEnv;
