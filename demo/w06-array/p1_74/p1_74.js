let c, f;

c = Number(prompt("Enter a temperature in C:")).toFixed(2);//.toFixed(2)取小數點後兩位

f = (c *9 /5 + 32).toFixed(2);

console.log(`${c} C = ${f} F`);