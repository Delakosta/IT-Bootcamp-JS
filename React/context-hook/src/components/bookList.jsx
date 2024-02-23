import { useContext } from "react";
import { BookContext } from "../contex/bookContext";
import { ThemeContext } from "../contex/themeContex";
import { Authcontext } from "../contex/authContext";

const BookList = () => {
    const { books } = useContext(BookContext);

    const { isLightTheme, light, dark } = useContext(ThemeContext);

    const theme = isLightTheme ? light : dark;

    const { isAuth } = useContext(Authcontext);

    return (
        <div style={{ color: theme.syntax, background: theme.bg }} className="book-list-wrapper">
            {isAuth ? (
                <ul>
                    {books.map(book => <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>)}
                </ul>
            ) : (
                <div>You are not logged in!</div>
            )}
        </div>
    );
}
export default BookList;