import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";
import { HTTP_STATUS_CODE } from "../constants/http";
export const errorHandler = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).send({
    errors: [{ message: "Something went wrong" }],
  });
};
