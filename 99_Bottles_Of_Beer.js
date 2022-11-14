// 99 Bottles of Beer (Song)




var count =  99;

function bottleSong(count) {

    while( 1 <= count ) {
    
    console.log(count + " bottles of beer on the wall, "+ count +" bottles of beer.");
    count--;
    console.log("Take one down and pass it around, " + count + " bottles of beer on the wall.");
    
    }
    
    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
    }
    
    bottleSong(count);