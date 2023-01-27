import { Component, TemplateRef } from '@angular/core';
import { Professor } from '../models/professor';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent {

  public modalRef?: BsModalRef;
  public professorForm: FormGroup | any;
  titulo = "Professores";
  professorSelecionado: Professor | undefined;

  professores = [



    { id: 1, nome: "Edna", sobrenome: "P. Silva", telefone: "9 3235-4455", disciplina: "Matemática" },
    { id: 2, nome: "Rosana", sobrenome: "P. Maria", telefone: "9 3435-4455", disciplina: "Programação" },
    { id: 3, nome: "Monica", sobrenome: "P. Roberto", telefone: "9 3546-4455", disciplina: "Física" },
    { id: 4, nome: "Angela", sobrenome: "P. Martins", telefone: "9 7776-4455", disciplina: "Português" },
    { id: 5, nome: "Juliana", sobrenome: "P. Souza", telefone: "9 3875-4455", disciplina: "Filosofia" },
    { id: 6, nome: "Patricia", sobrenome: "P. Lupe", telefone: "9 3985-4455", disciplina: "Biologia" },


  ];


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }



  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.criarFormProfessor();

  }

  professorSelect(professor: Professor) {

    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);

  }

  removerSelecaoProfessor() {
    this.professorSelecionado = undefined;
  }

  criarFormProfessor() {
    this.professorForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required],
      disciplina: ['', Validators.required]
    });
  }

  professorSubmit() {
    console.log(this.professorForm.value);
  }

}
