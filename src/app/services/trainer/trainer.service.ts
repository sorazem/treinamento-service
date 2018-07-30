import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TrainerService {

	constructor(private http: HttpClient) { }

	trainerUrl: string = 'http://localhost:8000/api/trainers/';
	private httpHeaders = {
		headers: new HttpHeaders({'Content-Type': 'application/json'})
	};

	registerTrainer(nome: string, codigo: string, pokemon: string): Observable<any> {
		return this.http.post(this.trainerUrl, {
			'nome': nome,
			'codigo': codigo,
			'pokemon': pokemon
		})	
	};

	getTrainers(): Observable<any> {
		return this.http.get(this.trainerUrl).map(res => res);
	};

	deleteTrainer(id) {
		return this.http.delete(this.trainerUrl + id).map(res => res);
	}
}
