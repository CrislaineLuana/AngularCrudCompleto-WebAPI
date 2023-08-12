import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario-service.service';
import { Funcionario } from 'src/app/models/Funcionarios';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit{

   funcionario?: Funcionario;
   id!:number;

  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute, private router : Router) {

  }

  ngOnInit(): void {

      this.id =  Number(this.route.snapshot.paramMap.get("id"));

      this.funcionarioService.GetFuncionario( this.id).subscribe((data) => {
         const dados = data.dados;
         dados.dataDeCriacao = new Date(dados.dataDeCriacao!).toLocaleDateString("pt-BR");
         dados.dataDeAlteracao = new Date(dados.dataDeAlteracao!).toLocaleDateString("pt-BR");

         this.funcionario = dados;
      });
  }


  InativaFuncionario(){

      this.funcionarioService.InativaFuncionario(this.id).subscribe((data) => {
        this.router.navigate(['']);
        }
      );

  }
}
