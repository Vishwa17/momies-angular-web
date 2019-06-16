import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    var btns = document.getElementsByClassName("menu-li");
    console.log("btn");
    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }
  move(fragment) {
    console.log("fragment", fragment);
    if (fragment) {
      document
        .querySelector("#" + fragment)
        .scrollIntoView({ behavior: "smooth" });
    }
  }
}
