import { Component} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


  one:string='hello';

  array:string[]=[];

  add(){

    if(this.one===''){
      console.log('Empty');
    }else{
      this.array.push(this.one);
    }

  }

  des:boolean=false;






}
