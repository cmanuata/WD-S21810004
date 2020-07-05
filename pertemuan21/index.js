//Array
    //deklarasi array 
    /*
    let names = ["Jhon", "Mark", "Jane"];//cara1
    let years = new Array(1990,1991,1992,2001,2002,2003); //cara2

    console.log(names);
    console.log(names.length); //indeks
    console.log(years);

    console.log(names[1]);//akses data dalam elem array -> mark
    console.log(years[years.length-1]); // ketahui panjang array dan elemen akhir 

    names[1] = "Bob"; // ganti elemen dalam array -> mark
    console.log(names);

    let jhon = ["Jhon", "Smith", 32, true];
    console.log(jhon.toString()); //ubah ke string
    console.log(jhon.join("#"));

    jhon.pop(); //hapus ele akhir
    jhon.shift(); // hapus ele pertma
    console.log(jhon);

    jhon.push(true);
    jhon.push("blue");
    console.log(jhon);
    jhon.unshift("Jhon");
    console.log(jhon);
    */

    
//Object
    //deklarasi objek
   /*
    let jhon = {
        firstname = "Jhon", //properti
        lastname = "Smith",
        birthYear= "1990",
        isMarried= true,
        family: ["mark","jane","bob"],
        calcAge: function(){
            this.age = 2020 - this.birthYear;
        },
    };

    console.log(jhon);
    console.log(jhon.birthYear); //akses properti dengan .
    console.log(jhon["lastname"]); // akses cara kedua

    jhon.job = "driver";
    console.log(jhon);

    delete jhon.job; //hapus obj
    jhon.calcAge(); //function
    console.log(jhon);
    */

//JS DOM
    //document object model ->DOM
    let tittle = document.getElementsByTagName("h1")[0].innerHTML;
    console.log(tittle);
    let username = document.getElementById("username").value;
    console.log(username);
    let username2 = document.getElementsByClassName("input-user");
    console.logN(username2);

    function helloworld(){
        alert("Hello World");
    }

    function getUserName(){
        let username = document.getElementById("username").value;
        document.getElementsByName("p")[0].innerHTML = username;
    }
    