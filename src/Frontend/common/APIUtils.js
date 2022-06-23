// import axios from 'axios';
// import React, { useState, createContext, useEffect } from 'react';
// import Api from './Api.js'

// const dataContext = createContext(undefined);
// const dataDispatchContext = createContext(undefined);
// const isLoadingContext = createContext(false);

// function DataProvider({children}) {
//     const [apiData, setApiData] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);

//     const callNewestGame = async () => {
//             try {
//                 setIsLoading(true);
//                 const results = await Api.get(`/getNewestGames`);
//                 if (results) {
//                     setApiData(results.data);
//                     console.log(apiData)
//                     setIsLoading(false);
//                 }
//             } catch (err) {
//                 console.log(err);
//                 setIsLoading(false);
//             }
//     }
    
//     useEffect(() => {
//         callNewestGame();
//     }, [])
    

//     return(
//         <dataContext.Provider value={apiData}>
//             <dataDispatchContext.Provider value={setApiData}>
//                 <isLoadingContext value={isLoading}>
//                     {children}
//                 </isLoadingContext>
//             </dataDispatchContext.Provider>
//         </dataContext.Provider>
//     );
// }

// export {dataContext, dataDispatchContext, isLoadingContext}
// export default DataProvider;