`use strict`
let records = {
    flyweight: ["Most Finishes: 7 - Demetrious Johnson / Deiveson Figueiredo   ", "Fastest Finish: 15s - Dustin Ortiz   ", "Most Knockouts: 5 - Joseph Benavidez", "Most Submissions: 5 - Demetrious Johnson   ", "Most Takedowns Landed: 58 - Demetrious Johnson"], 
    bantamweight: ["Most Finishes: 9 - Marlon Vera", "Fastest Finish: 17s Erik Perez", "Most Knockouts: 7 - T.J Dillashaw", "Most Submissions: 6 - Uriah Faber", "Most Takedowns Landed: 50 - Merab Dvalishvili"],
    featherweight: ["Most Finishes: 10 - Max Holloway", "Fastest Finish: 7s - Chan Sung Jung", "Most Knockouts: 8 - Max Holloway", "Most Submissions: 6 - Charles Olivera", "Most Takedowns Landed: 49 - Darren Elkins"],
    lightweight: ["Most Finishes: 14 - Jim Miller", "Fastest Finish: 7s - Terrence McKinney", "Most Knockouts: 8 - Dustin Poirier", "Most Submissions: 9 - Charles Olivera / Jim Miller", "Most Takedowns Landed: 84 - Gleison Tibau"],
    welterweight: ["Most Finishes: 14 - Matt Brown", "Fastest Finish: 5s - Jorge Masvidal", "Most Knockouts: 12 - Matt Brown", "Most Submissions: 6 - Gunnar Nelson / Demian Maia", "Most Takedowns Landed: 87 -  Georges St-Pierre"],
    middleweight: ["Most Finishes: 11 - Anderson Silva", "Fastest Finish: 10s - Mark Weir", "Most Knockouts: 8 - Thiago Santos / Anderson Silva / Uriah Hall", "Most Submissions: 8 - Gerald Meerschaert", "Most Takedowns Landed: 42 - Chris Weidman"],
    lightHeavyweight: ["Most Finishes: 13 - Glover Teixeira", "Fastest Finish: 7s - Ryan Jimmo", "Most Knockouts: 10 - Chuck Liddell", "Most Submissions: 7 - Glover Teixera", "Most Takedowns Landed: 58 - Tito Ortiz"],
    heavyweight: ["Most Finishes: 13 - Derrick Lewis / Frank Mir", "Fastest Finish: 7s - Todd Duffee", "Most Knockouts: 13 - Derrick Lewis", "Most Submissions: 8 - Frank Mir", "Most Takedowns Landed: 62 - Curtis Blaydes"]


};


function findRecords() {
    let division = document.getElementById("dropdown").value;
    switch (division) {
        case ("flyweight"):
            document.getElementById("result").innerHTML = records.flyweight[0];
            document.getElementById("result1").innerHTML = records.flyweight[1];
            document.getElementById("result2").innerHTML = records.flyweight[2];
            document.getElementById("result3").innerHTML = records.flyweight[3];
            document.getElementById("result4").innerHTML = records.flyweight[4];
            break;
        case ("bantamweight"):
            document.getElementById("result").innerHTML = records.bantamweight[0];
            document.getElementById("result1").innerHTML = records.bantamweight[1];
            document.getElementById("result2").innerHTML = records.bantamweight[2];
            document.getElementById("result3").innerHTML = records.bantamweight[3];
            document.getElementById("result4").innerHTML = records.bantamweight[4];
            break;
        case ("featherweight"):
            document.getElementById("result").innerHTML = records.featherweight[0];
            document.getElementById("result1").innerHTML = records.featherweight[1];
            document.getElementById("result2").innerHTML = records.featherweight[2];
            document.getElementById("result3").innerHTML = records.featherweight[3];
            document.getElementById("result4").innerHTML = records.featherweight[4];
            break;
        case ("lightweight"):
            document.getElementById("result").innerHTML = records.lightweight[0];
            document.getElementById("result1").innerHTML = records.lightweight[1];
            document.getElementById("result2").innerHTML = records.lightweight[2];
            document.getElementById("result3").innerHTML = records.lightweight[3];
            document.getElementById("result4").innerHTML = records.lightweight[4];
            break;
        case ("welterweight"):
            document.getElementById("result").innerHTML = records.welterweight[0];
            document.getElementById("result1").innerHTML = records.welterweight[1];
            document.getElementById("result2").innerHTML = records.welterweight[2];
            document.getElementById("result3").innerHTML = records.welterweight[3];
            document.getElementById("result4").innerHTML = records.welterweight[4];
            break;
        case ("middleweight"):
            document.getElementById("result").innerHTML = records.middleweight[0];
            document.getElementById("result1").innerHTML = records.middleweight[1];
            document.getElementById("result2").innerHTML = records.middleweight[2];
            document.getElementById("result3").innerHTML = records.middleweight[3];
            document.getElementById("result4").innerHTML = records.middleweight[4];
            break;
        case ("lightHeavyweight"):
            document.getElementById("result").innerHTML = records.lightHeavyweight[0];
            document.getElementById("result1").innerHTML = records.lightHeavyweight[1];
            document.getElementById("result2").innerHTML = records.lightHeavyweight[2];
            document.getElementById("result3").innerHTML = records.lightHeavyweight[3];
            document.getElementById("result4").innerHTML = records.lightHeavyweight[4];
            break;
        case ("heavyweight"):
            document.getElementById("result").innerHTML = records.heavyweight[0];
            document.getElementById("result1").innerHTML = records.heavyweight[1];
            document.getElementById("result2").innerHTML = records.heavyweight[2];
            document.getElementById("result3").innerHTML = records.heavyweight[3];
            document.getElementById("result4").innerHTML = records.heavyweight[4];
            break;
    }
}