import { FieldProps } from './Field.props'
import './field.css'

export const InputField = ({ id, label, ...rest }: FieldProps) => {
    return (
        <div className="field">
            { label && <label htmlFor={id}>{label}</label> }
            <input id={id} {...rest} />
        </div>
    )
}