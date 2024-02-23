import { createContext, useState } from 'react';

// pravimo React context koristeci createContext() funkciju koju smo uvezli iz biblioteke
export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'Knjiga 1', id: 1},
        {title: 'Knjiga 2', id: 2},
        {title: 'Knjiga 3', id: 3},
    ]);

    {/* props.children omogucava da bilo koja ugnjezdena komponenta u okviru BookContextProvider-a da moze da pristupi context-u koji je provajdovan od strane BookContext-a */}   
    return <BookContext.Provider value={{books}}>{props.children}</BookContext.Provider>
};

export default BookContextProvider;