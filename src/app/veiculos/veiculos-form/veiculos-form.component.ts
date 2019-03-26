import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VeiculosService } from '../veiculos.service';
import { AlertModalService } from '../../shared/alert-modal.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-veiculos-form',
  templateUrl: './veiculos-form.component.html',
  styleUrls: ['./veiculos-form.component.css']
})
export class VeiculosFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private service: VeiculosService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    const veiculo = this.route.snapshot.data['veiculo'];

    this.form = this.fb.group({
      id: [veiculo.id],
      placaVeiculo: [veiculo.placaVeiculo, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      nomeFabricante: [veiculo.nomeFabricante, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      nomeModeloVeiculo: [veiculo.nomeFabricante, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      anoModelo: [veiculo.anoModelo, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      corVeiculo: [veiculo.corVeiculo, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      documentoVeiculo: [veiculo.documentoVeiculo, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      tipoCombustivelVeiculo: [veiculo.tipoCombustivelVeiculo, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    console.log('aqui');


    // if (this.form.valid) {
    //   console.log('submit');

    //   let msgSuccess = 'Veiculo criado com sucesso!';
    //   let msgError = 'Erro ao criar veiculo, tente novamente!';

    //   if (this.form.value.id) {
    //     msgSuccess = 'Veiculo atualizado com sucesso!';
    //     msgError = 'Erro ao atualizar veiculo, tente novamente!';
    //   }

    //   this.service.save(this.form.value).subscribe(
    //     success => {
    //       this.modal.showAlertSuccess(msgSuccess);
    //       this.location.back();
    //     },
    //     error => this.modal.showAlertDanger(msgError)
    //   );
    // }
  }

  onCancel() {
    console.log('sj');
    this.submitted = false;
    this.form.reset();
  }

}
