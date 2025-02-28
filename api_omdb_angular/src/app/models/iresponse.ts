import { IPelicula } from "./ipelicula";

export interface IResponse {
    Search:       IPelicula[];
    totalResults: string;
    Response:     string;
}
