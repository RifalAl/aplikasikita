import React from 'react';


function HelloWorld(){
   return (
      <p style={{color:'tomato'}}>
         Hello World!!
      </p>
   )
}
function ButtonWelcome(){
   return (
      <button onClick={() => alert('Selamat Datang')}>
         coba klik saya!
      </button>
   )
}
function App(){
   return <div>
      <HelloWorld/>
      <ButtonWelcome/>
   </div>
}

export default App;