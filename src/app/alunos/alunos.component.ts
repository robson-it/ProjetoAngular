import { Component, TemplateRef } from '@angular/core';
import { Aluno } from '../models/aluno';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent {

  public modalRef?: BsModalRef;
  public alunoForm: FormGroup | any ;
  public titulo = 'Alunos';
  public alunoSelecionado: Aluno | undefined;
  //public textoSimples: string | undefined;

  public alunos = [
    { id: 1, nome: "Marta", sobrenome: "Silva", telefone: "3235-4455" },
    { id: 2, nome: "Paula", sobrenome: "Maria", telefone: "3435-4455" },
    { id: 3, nome: "Paulo", sobrenome: "Roberto", telefone: "3546-4455" },
    { id: 4, nome: "laura", sobrenome: "Martins", telefone: "7776-4455" },
    { id: 5, nome: "Lorena", sobrenome: "Souza", telefone: "3875-4455" },
    { id: 6, nome: "Luiza", sobrenome: "Lupe", telefone: "3985-4455" },
    { id: 7, nome: "Lucas", sobrenome: "Lima", telefone: "3337-4455" },
    { id: 8, nome: "Pedro", sobrenome: "Augusto", telefone: "3355-4455" },
  ];


  


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.criarForm();

  }

  criarForm() {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  removerSelecaoAluno() {
    this.alunoSelecionado = undefined;
  }

  alunoSubmit() {
    console.log(this.alunoForm.value);
  }
}
