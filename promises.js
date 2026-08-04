// function fetchData(dataId , getNextData){
// setTimeout(() => {
//     console.log(dataId)
//     if(getNextData){
//         getNextData()
//     }
// }, 5000);
// }
// fetchData(1 , ()=>{
//     fetchData(2,()=>{
//         fetchData(3)
//     })
// })

// Promises

function fetchData(dataId){
  return  new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(dataId)
        }, 2000);
    })
}
fetchData(1)
.then(()=>fetchData(2))
.then(()=>fetchData(3))
.catch((err)=>{console.log(err)})

//Async and await

function fetchData(dataId){
  return  new Promise((resolve, reject) => { 
            console.log(dataId)
            resolve("Fullfilled")  
    })

}
async function getData() {
    await fetchData(1)
    await fetchData(2)
    await fetchData(3)
}
getData()