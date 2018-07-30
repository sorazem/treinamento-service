import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../services/trainer/trainer.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

	codigoError: boolean = false;

  constructor(public trainerService: TrainerService) { }

  ngOnInit() {
    document.body.style.backgroundImage = "url('assets/bg2.jpg')";
    document.body.style.backgroundSize = "cover";
  }

  onSubmit(cadastro) {
    this.trainerService.registerTrainer(cadastro.value.nome, cadastro.value.codigo, cadastro.value.pokemon).subscribe((res)=>{
      console.log(res);
    });
  }

  checkCodigo(codigo) {
    if(codigo.value.length != 8){
      this.codigoError = true;
    }
    else {
      this.codigoError = false;
    }
  }

}
