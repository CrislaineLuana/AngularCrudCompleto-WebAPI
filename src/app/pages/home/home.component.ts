import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario-service.service';
import { Funcionario } from '../../models/Funcionarios';
import { ExcluirComponent } from '../../components/excluir/excluir.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  funcionarios: Funcionario[] = [];
  funcionariosGeral: Funcionario[] = [];
  columnsToDisplay = ['Situacao', 'Nome', 'Sobrenome', 'Departamento', 'Ações', 'Teste'];


  constructor(private funcionarioService : FuncionarioService, public matDialog: MatDialog) { }


  ngOnInit(): void {
    this.funcionarioService.GetFuncionarios().subscribe((data) => {
      const dados = data.dados;
       dados.map((item) => {
         item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-BE');
       });

      this.funcionariosGeral = dados;
      this.funcionarios = dados;

    })
  }



  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.funcionarios = this.funcionariosGeral.filter(funcionario => {
      return funcionario.nome.toLowerCase().includes(value);
    })
  }


  openDialog(id : number){
    this.matDialog.open(ExcluirComponent,{
      width: '350px',
      height: '350px',
      data: {
        id: id
      }
    })
  }


}



