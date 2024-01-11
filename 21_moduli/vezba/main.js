/*
import { generateList, generateItem as generateListItem} from "./modules/list.js";
import { generateTable, generateTableRow, generateItem as generateTableItem} from "./modules/table.js"

let ul = generateList(document.body);
generateListItem(ul , "images/1.png");
generateListItem(ul , "images/2.png");
generateListItem(ul , "images/3.png");


let table = generateTable(document.body);
let tr = generateTableRow(table);

generateTableItem(tr, "images/1.png");
generateTableItem(tr, "images/2.png");
generateTableItem(tr, "images/3.png");
*/

import * as List from "./modules/list.js";
import * as Table from "./modules/table.js"

let ul = List.generateList(document.body);
List.generateItem(ul , "images/1.png");
List.generateItem(ul , "images/2.png");
List.generateItem(ul , "images/3.png");


let table = Table.generateTable(document.body);
let tr = Table.generateTableRow(table);

Table.generateItem(tr, "images/1.png");
Table.generateItem(tr, "images/2.png");
Table.generateItem(tr, "images/3.png");