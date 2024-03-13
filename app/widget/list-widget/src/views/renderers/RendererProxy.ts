import { FormulaRenderer } from "./FormulaRenderer";
import { NumberRenderer } from "./NumberRenderer";
import { SelectRenderer } from "./SelectRenderer";
import { StringRenderer } from "./StringRenderer";


export const RendererProxy = (item, fields, field) => {
    switch (field.type) {
        case "text":
            return StringRenderer(item, fields, field);
        case "select":
            return SelectRenderer(item, fields, field);
        case "number":
            return NumberRenderer(item, fields, field);
        case "formula":
            return FormulaRenderer(item, fields, field);
        default:
            return StringRenderer(item, fields, field);
    }
}