import path from "path";

export const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
export const TOKEN_PATH = path.join(process.cwd(), 'token.json');
export const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');
