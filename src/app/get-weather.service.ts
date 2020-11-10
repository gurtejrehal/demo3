import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  constructor(private http:HttpClient) { }

  getWeather(location:string){
    return this.http.get(
        'http://api.weatherstack.com/current?access_key=dac27ddc147d959e4f399426a59fa08a&query=' + location
    );
}

}
