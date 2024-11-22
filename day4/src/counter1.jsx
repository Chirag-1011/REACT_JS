import Counter2 from "./counter2";
function Counter1(pops){
return(
<div>
    <h1>{pops.a}</h1>
    <Counter2 b ={pops.a}/>         
</div>
    
)
}

export default Counter1;