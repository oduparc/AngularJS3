import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  @Input() user = new User();
  @Output() clicked: EventEmitter<User> = new EventEmitter();

  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.user.username],
      password: [this.user.password]
    });}

    public onSubmit(): void {
      this.clicked.emit(this.form.value);
      //this.clicked.emit(this.order);

    }
}
