import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parcial-1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './parcial-1.component.html',
  styleUrl: './parcial-1.component.css'
})
export class Parcial1Component {
   color:string = "red";

  ValidarColor(){
    const exp = /[0-9a-zA-Z]/ig;
    const expText = /[a-z]/ig;

    if(expText.test(this.color)){
      this.clearMsgWarning();
    }
    else if(exp.test(this.color)){
      if(!this.color.includes('#')) {
        this.color = '#' + this.color;
        this.clearMsgWarning();
      }
    }else{
      this.msgWarning('Color no valido');
    }
  }

  msgWarning(msg: string){
    const help = document.getElementById('colorHelp');
    if(help) help.textContent = msg;
  }

  clearMsgWarning(){
    const help = document.getElementById('colorHelp');
    if(help) help.textContent = '';
  }
}
