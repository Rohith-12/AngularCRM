import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-leadlist",
  templateUrl: "./leadlist.component.html",
  styleUrls: ["./leadlist.component.css"],
})
export class LeadlistComponent implements OnInit {
  backdropbool: boolean = false;
  getleads: any;

  list: string[][] = [
    [
      "1",
      "4658",
      "rokit",
      "9884538089",
      "rokitraina7@gmail.com",
      "chennai",
      "12/06/20220",
      "Bix",
    ],
    [
      "2",
      "4659",
      "arjun",
      "73588089090",
      "arjun@gmail.com",
      "mumbai",
      "8/08/2020",
      "bix",
    ],

    [
      "2",
      "4659",
      "arjun",
      "73588089090",
      "arjun@gmail.com",
      "mumbai",
      "8/08/2020",
      "bix",
    ],
    [
      "2",
      "4659",
      "SOUNDER K RAJA ",
      "73588089090",
      "arjun@gmail.com",
      "mumbai",
      "8/08/2020",
      "bix",
    ],
    [
      "2",
      "4659",
      "arjun",
      "73588089090",
      "arjun@gmail.com",
      "mumbai",
      "8/08/2020",
      "bix",
    ],
    [
      "2",
      "4659",
      "arjun",
      "73588089090",
      "arjun@gmail.com",
      "mumbai",
      "8/08/2020",
      "bix",
    ],
    [
      "2",
      "4659",
      "arjun",
      "73588089090",
      "arjun@gmail.com",
      "mumbai",
      "8/08/2020",
      "bix",
    ],
    [
      "2",
      "4659",
      "arjun",
      "73588089090",
      "arjun@gmail.com",
      "mumbai",
      "8/08/2020",
      "bix",
    ],
    [
      "2",
      "4659",
      "arjun",
      "73588089090",
      "arjun@gmail.com",
      "mumbai",
      "8/08/2020",
      "bix",
    ],
    [
      "2",
      "4659",
      "arjun",
      "73588089090",
      "arjun@gmail.com",
      "mumbai",
      "8/08/2020",
      "bix",
    ],
    [
      "2",
      "4659",
      "arjun",
      "73588089090",
      "arjun@gmail.com",
      "mumbai",
      "8/08/2020",
      "bix",
    ],
  ];
  constructor() {}

  ngOnInit(): void {}

  BackDropFunction(get) {
    this.backdropbool = true;
    console.log(get);
    this.getleads = get;
  }
  BackDropFunctionClose() {
    this.backdropbool = false;
  }
}
