import { CustomError } from "./custom-error";
import { HTTP_STATUS_CODE } from "../constants/http";

export class NotFoundError extends CustomError {
  statusCode = HTTP_STATUS_CODE.NOT_FOUND;

  constructor() {
    super("Route not found");

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: "Not found" }];
  }
}
