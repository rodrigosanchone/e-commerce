import { Component, Input, OnInit, Output, forwardRef, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

type PasswordType = "password" | 'text';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=>PasswordComponent),
    multi:true
  }]
})
export class PasswordComponent implements OnInit {
  value!:string;
  isDisabled!: boolean;
  passwordType!: PasswordType
 @Input() placeholder!:string;
 @Output()changed = new EventEmitter<string>;
  constructor() {
    this.passwordType = 'password';
   }

  ngOnInit(): void {
  }

  private propagateChange: any=()=>{}
  private propagateTouched: any=()=>{}
  writeValue(value:string){
    this.value =value;
  }
  registerOnChanges(fn:any){
    this.propagateChange= fn;
  }

  registerOnTouched(fn:any){
    this.propagateTouched= fn;
  }

  setDisabledState(isDisabled: boolean){
    this.isDisabled =  isDisabled;
  }

  onkeyUp(event:Event):void{
    const {target}= event;
    this.value = (target as HTMLInputElement).value;
    this.propagateChange(this.value);
    this.changed.emit(this.value);
  }

  onBlur():void{
     this.propagateTouched();
  }

  toggledPassword():void{
    this
  }
}
