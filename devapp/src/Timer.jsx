import { Component } from react;

 class Timer extends Component(){
constructor(){
    this.timer ={
        timer:0
    },

   ComponentWillMount{
     this.timer = setInterval(()=>{
        this.setTimer((prev)=>prev+1)
    },1000)
   },
   ComponentDidUpdate(){
    this.timer = this.timer
   }, 
   ComponentWillUnmount(){
    clearInterval(this.timer)
   }
}
render (
    <>
    
    </>
)
 }