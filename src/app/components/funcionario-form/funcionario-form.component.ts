import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario-service.service';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Funcionario>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input()  dadosFuncionario: Funcionario | null = null;

  funcionarioForm!: FormGroup;
  ativo:number = 1;


  constructor(private funcionarioService : FuncionarioService, private router: Router) {
  }


  ngOnInit(): void {

    console.log(this.dadosFuncionario?.ativo);



    this.funcionarioForm = new FormGroup ({
      id: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.id : 0),
      nome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.nome : '', [Validators.required]),
      sobrenome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.sobrenome : '',[Validators.required]),
      departamento: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.departamento : '',[Validators.required]),
      turno: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.turno : '',[Validators.required]),
      ativo:  new FormControl(this.dadosFuncionario ? this.dadosFuncionario?.ativo : true),
      dataDeCriacao: new FormControl(new Date()),
      dataDeAlteracao: new FormControl(new Date())
    });
  }


  get nome(){
    return this.funcionarioForm.get('nome')!;
  }

  submit(){

      console.log(this.funcionarioForm.value)

      this.onSubmit.emit(this.funcionarioForm.value);
  }

}
