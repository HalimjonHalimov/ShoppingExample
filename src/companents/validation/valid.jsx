import { useCallback } from "react";
import { useSelector } from "react-redux";


const Valid = () => {
    const { error } = useSelector(state => state.auth)

    const errorMsg = useCallback(() => {
        return Object.keys(error).map(name => {
            const msg = error[name].join(', ')
            return `${name} - ${msg}`
        })
      },
      [error],
    )
    
    return error !== null && errorMsg().map(error => (
        <div key={error} className="validation">
            {error}
        </div>
    ))
}

export default Valid;
