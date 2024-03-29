import { FormulaRenderer } from "./FormulaRenderer";
import { NumberRenderer } from "./NumberRenderer";
import { RelationFieldRenderer } from "./RelationFirldRenderer";
import { RichTextFieldRenderer } from "./RichTextRenderer";
import { SelectRenderer } from "./SelectRenderer";
import { TextFieldRenderer } from "./TextFieldRenderer";


export const RendererProxy = (item, fields, field) => {
    switch (field.type) {
        case "text":
            return TextFieldRenderer(item, fields, field);
        case "richtext":
            return RichTextFieldRenderer(item, fields, field);
        case "select":
            return SelectRenderer(item, fields, field);
        case "number":
            return NumberRenderer(item, fields, field);
        case "formula":
            return FormulaRenderer(item, fields, field);
        case "relation":
            return RelationFieldRenderer(item, fields, field);
        default:
            return TextFieldRenderer(item, fields, field);
    }
}