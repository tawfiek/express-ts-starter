import { Request, Response, NextFunction } from "express";
import Logger from "../config/logger";


export function logger (req: Request, res: Response, next: NextFunction) {
    const winstonLogger = new Logger();
}