export default class DomElement{
    x : number;
    y : number;
    element: string;
    style : string;
    text: string
    
    constructor(
        x : number,
        y : number,
        element: string,
        style : string,
        text: string){
        this.x = x;
        this.y = y;
        this.element = element;
        this.style = style;
        this.text = text;
    };

}