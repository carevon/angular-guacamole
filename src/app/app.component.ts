import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Cachorreira';
  imagens:Array<string> = [];
  imageURL:string = "https://4.bp.blogspot.com/-Ne-KHti1gGM/V-Y1IGKqpTI/AAAAAAAAHS8/DwVvUXm9D0cRUXAMR3PMmVGG8y5d4scZwCLcB/s1600/pica%2Bpau.jpg"

  constructor(){}

  ngOnInit(){
    this.imagens = ['https://4.bp.blogspot.com/-Ne-KHti1gGM/V-Y1IGKqpTI/AAAAAAAAHS8/DwVvUXm9D0cRUXAMR3PMmVGG8y5d4scZwCLcB/s1600/pica%2Bpau.jpg',
      'https://upload.wikimedia.org/wikipedia/pt/thumb/4/48/Buzz_Buzzard.png/220px-Buzz_Buzzard.png',
      'http://pm1.narvii.com/6749/07bf68aeeca2009554f7e5be922106bc95adbf71v2_00.jpg',
      'https://3.bp.blogspot.com/-PiKEUADLecw/U7CfliRJOoI/AAAAAAAAvu4/i3td8In0f2Q/s1600/LOAN+STRANGER+3.png'];
  }
  adicionarImagem(){
    //this.imagens.push('https://picsum.photos/200/300?data=+new Date()')
    this.imagens.push(`https://picsum.photos/200/300?data=${new Date()}`)
  }
}
