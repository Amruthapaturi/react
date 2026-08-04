import React, { useState } from 'react'

const Search = () => {
    const[search , setSearch]=useState("")


    const users = ["Bharath" , "Raju" , "Kamal" , "Krishna"]

    const filteredUsers = users.filter((user)=>
      user.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div>
      <input type="text" name="" id=""
      placeholder='Search Somthing'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />

      {
        filteredUsers.map((user)=>{
            return(
                <>
                <p>{user}</p>
                </>
            )
        })
      }

    </div>
  )
}

export default Search
