// Immediatly Invoked Function Expression  (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
    
})();

// JAB BHI IIFE ME DUSARA FUCTION LIKHOGE TO PAHLE WALE FUNCTION ME ; LAGANA JAROORI HAI TABHI DUSARA FUNCTION CHALEGA
// =======================================================================================================================


( () => {
    console.log(`DB CONNECTED TWO`);
    
} )();


// JAB BHI IIFE ME DUSARA FUCTION LIKHOGE TO PAHLE WALE FUNCTION ME ; LAGANA JAROORI HAI TABHI DUSARA FUNCTION CHALEGA
// =======================================================================================================================


( (name) => {
    console.log(`DB CONNECTED THREE ${name}`);
    
} )("hitesh")
