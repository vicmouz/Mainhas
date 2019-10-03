import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
 
  posts = [{"nome":"Gabi","descricao":"ela é mãe solo,ela é mãe solo,ela é mãe solo,ela é mãe solo,ela é mãe solo", "foto":"../../assets/images/foto1.jpeg"},
  {"nome":"Madu","descricao":"ela é mãe solo,ela é mãe solo,ela é mãe solo,ela é mãe solo,ela é mãe solo", "foto":"../../assets/images/foto2.jpeg"},
  {"nome":"Jessica","descricao":"ela é mãe solo,ela é mãe solo,ela é mãe solo,ela é mãe solo,ela é mãe solo", "foto":"../../assets/images/foto3.jpeg"}]
   constructor() {}
  
   Postar(){
    var descricao = document.getElementById('descricaoPost').value;
    console.log(descricao);
    console.log(this.posts);
    this.posts = [{"nome":"Gabi","descricao":"ela é mãe solo,ela é mãe solo,ela é mãe solo,ela é mãe solo,ela é mãe solo", "foto":"../../assets/images/foto1.jpeg"},
    {"nome":"Madu","descricao":"ela é mãe solo,ela é mãe solo,ela é mãe solo,ela é mãe solo,ela é mãe solo", "foto":"../../assets/images/foto2.jpeg"},
    {"nome":"Jessica","descricao":"ela é mãe solo,ela é mãe solo,ela é mãe solo,ela é mãe solo,ela é mãe solo", "foto":"../../assets/images/foto3.jpeg"},
    {"nome":"Gabi","descricao":descricao, "foto":"../../assets/images/foto1.jpeg"}];
     document.getElementById('descricaoPost').innerText = '';
   }
 
}
