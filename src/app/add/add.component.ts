import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  recipeName=""
  recipeItem=""
  recipeMake=""
  recipeQuality=""
  readvalues=()=>{
    let data={
      "recipeName":this.recipeName,
      "recipeItem":this.recipeItem,
      "recipeMake":this.recipeMake,
      "recipeQuality":this.recipeQuality,
    }
    console.log(data)
    this.myapi.addRecipe(data).subscribe(
      (response)=>{
        alert("Data Added")
      }
    )


  }
  ngOnInit(): void {
  }

}
