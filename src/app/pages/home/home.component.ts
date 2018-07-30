import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../services/trainer/trainer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	trainers = []; //Array contendo as informações sobre os treinadores.

  constructor(public trainerService: TrainerService) { }

  ngOnInit() {
  	document.body.style.backgroundImage = "url('assets/bg2.jpg')";
    document.body.style.backgroundSize = "cover";
    //document.body.style.backgroundAttachment = "fixed";
    this.trainerService.getTrainers().subscribe((res)=> {
    	console.log(res.data);
    	for(let i=0; i < res.data.length; i++){
    		this.trainers.push(res.data[i]);
    	}
    });
  }

  deletaTrainer(id) {
  	this.trainerService.deleteTrainer(id).subscribe((res)=> {
  		console.log(res);
  	});
  }
}
