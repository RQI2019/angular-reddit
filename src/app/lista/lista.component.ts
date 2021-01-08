import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
  //styleUrls: ['./lista.component.css']

})
export class ListaComponent implements OnInit {


  jsonCarpetas = {
    "Units": {
      "Unit": {
        "UnitId": "28",
        "UnitName": "Charlotte",
        "Functions": {
          "Function": [
            {
              "FunctionId": "34",
              "FunctionName": "Call All FIFO"
            },
            {
              "FunctionId": "35",
              "FunctionName": "Service 1 Only"
            },
            {
              "FunctionId": "36",
              "FunctionName": "Service 3 and 4 Only"
            }
          ]
        },
        "Unit": {
          "UnitId": "29",
          "UnitName": "Chicago",
          "Functions": {
            "Function": [
              {
                "FunctionId": "37",
                "FunctionName": "Call All FIFO"
              },
              {
                "FunctionId": "38",
                "FunctionName": "Service 1 Only"
              },
              {
                "FunctionId": "39",
                "FunctionName": "Service 3 and 4 Only"
              }
            ]
          }
        }
      }
    }
  }


  constructor() { 
    let toggler = document.getElementsByClassName("caret");
    console.log(toggler);
    console.log(toggler.length); 

    for (let i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function() {
        console.log("click");
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
      });
    }
  }

  ngOnInit(): void {
  }
  
  lista() {

  }

}
