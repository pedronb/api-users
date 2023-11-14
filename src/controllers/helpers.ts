import { HttpStatusCodeEnum } from "./enums/HttpStatusCodeEnum";
import { HttpResponse } from "./protocols";

export const badRequest = (message: string): HttpResponse<string> => {
  return {
    statusCode: HttpStatusCodeEnum.BAD_REQUEST,
    body: message,
  };
};

export const ok = <T>(body: T) => {
  return {
    statusCode: HttpStatusCodeEnum.OK,
    body,
  };
};

export const created = <T>(body: T) => {
  return {
    statusCode: HttpStatusCodeEnum.CREATED,
    body,
  };
};

export const serverError = () => {
  return {
    statusCode: HttpStatusCodeEnum.SERVER_ERROR,
    body: "Something went wrong.",
  };
};
