
let myMathObj =

{
    
areaSquare: function (s1, s2)
    {
      let  sqArea = s1 * s2;
      return sqArea;
     }
,
    
areaRectangle: function (rlength, width)
    {
        let recArea = rlength * width;
        return recArea;
        
    }
,

areaParallelogram: function (base, height)
{
    let parallelArea = base * height;
    return parallelArea;
    
}
,

areaTrapezoid: function (tBaseOne,tBaseTwo,tHeight)
{
    let trapezoidArea = (tBaseOne * tBaseTwo)* (tHeight/2);
    return trapezoidArea;
}
,

areaTriangle: function (tbase, theight)
{
let triangleArea = (tbase * theight)/2;
return triangleArea;
}

,
perimeterSquare: function (ps1, ps2, ps3, ps4)
{
    let perSquare = ps1 + ps2 + ps3 + ps4;
    return perSquare;
}

};



console.log(`Various Mathematical Function Calls Stored Within The Object: myMathObj`);
console.log(`-------------------------------------------------------------------------------------------------`);
console.log(``);
console.log(`The area of a TRIANGLE sidee 1 being 12 and side 2 being 5 is: `,myMathObj.areaSquare(12,5));
console.log(``);
console.log(`The area of a rectanlge, the length being 12 and the width being 5 is: `,myMathObj.areaRectangle(12,5));
console.log(``);
console.log("The area of a parallelogram, the base being 12 and the height being 5 is: ", myMathObj.areaParallelogram(12,5));
console.log(``);
console.log("The area of a trinage using a base of 12 and a height of 5 is: ",myMathObj.areaTriangle(12,5));
console.log(``);
console.log("The area of a trapezoid using a base1 of 12, base2 of 5 and a height of 2 is: ", myMathObj.areaTrapezoid(12,5,2));
console.log(``);
console.log("The perimeter of a square: ", myMathObj.perimeterSquare(12,14,15,69));