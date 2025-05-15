import { Link } from "react-router-dom"

export function BackButton(
    {textValue, styleValue, classNameValue,}
) {
    return (
            <Link
                to="/"
                className={classNameValue} //"btn btn-warning shadow-sm fw-bold"
                style={
                        styleValue
                }
            >
                {textValue}
            </Link>
    )
}