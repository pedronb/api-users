import { HttpStatusCodeEnum } from "./enums/HttpStatusCodeEnum";

export interface HttpResponse<T> {
  statusCode: HttpStatusCodeEnum;
  body: T;
}

export interface HttpRequest<B> {
  params?: any;
  headers?: any;
  body?: B;
}

export interface IController {
  handle(HttpRequest: HttpRequest<unknown>): Promise<HttpResponse<unknown>>;
}
