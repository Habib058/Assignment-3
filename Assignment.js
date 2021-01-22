
//Function for Converting Kilometer To Meter
function kilometerToMeter(kilo){
    if(kilo<0){
        console.log("Meter Can't Be Negative");
    }
    else {
        return (kilo*1000);
    }
}

//Function For Calculating Total Budget for Different Products
function budgetCalculator(numberOfWatch, numberOfMobile, numberOfLaptop){
    if(numberOfWatch<0 || numberOfMobile<0 || numberOfLaptop<0){
        console.log("Numbers Can't Be Negative");
    }
    else if((Math.round(numberOfWatch)!=numberOfWatch)||(Math.round(numberOfMobile)!=numberOfMobile)||(Math.round(numberOfLaptop)!=numberOfLaptop)){
        console.log("Number Can't Be floating Value");
    }
    else{
        return (numberOfWatch*50+numberOfMobile*100+numberOfLaptop*500);
    }
}


//Calculating Total Hotel Cost
function hotelCost(days){
    if(days<0){
        console.log("Days Can't Be Negative");
    }
    else if(Math.round(days)!=days){
        console.log("Unexpected Value");
    }
    else if(days>20){
        var daysLeft=days;
        var totalHotelCost=100*10;
        totalHotelCost+=(10*80);
        daysLeft=daysLeft-20;
        totalHotelCost+=(50*daysLeft);
        return (totalHotelCost);
    }
    else if(days>10){
        var daysLeft=days;
        var totalHotelCost=100*10;
        daysLeft=daysLeft-10;
        totalHotelCost+=(80*daysLeft);
        return(totalHotelCost);
    }
    else{
        return(days*100);
    }
}


//Returning largest Name of Friends
function megaFriend(listOfFriendsName){
    var numberOfFriends=listOfFriendsName.length;
    var maximumLength =0;
    var index =0;
    if(numberOfFriends==0){
        console.log("No names given");
    }
    for( i=0;i<numberOfFriends;i++){
        var friendsName= listOfFriendsName[i];
        var lengthOfFriendsName=friendsName.length;
        if(lengthOfFriendsName==0){
            console.log("name Can't have zero characters");
            return ;
        }
        if(lengthOfFriendsName>maximumLength){
            maximumLength=lengthOfFriendsName;
            index=i;
        }
    }
    return(listOfFriendsName[index])


}
