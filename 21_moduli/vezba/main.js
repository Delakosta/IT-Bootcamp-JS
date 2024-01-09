import { generateList, generateListItem } from "./modules/list.js";
import { generateTable, generateTableRow, generateTableItem} from "./modules/table.js"

let ul = generateList(document.body);
generateListItem(ul , "images/1.png");
generateListItem(ul , "images/2.png");
generateListItem(ul , "images/3.png");


let table = generateTable(document.body);
let tr = generateTableRow(table);

generateTableItem(tr, "images/1.png");
generateTableItem(tr, "images/2.png");
generateTableItem(tr, "images/3.png");