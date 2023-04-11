import { Children, cloneElement, createContext, useContext, useState } from "react"

const s = {
    style: {
        fontSize: '60px',
    }
}

const TurnOnOffContext = createContext()

const TurnOnOff = ({ children }) => {
    const [isOn, setIsOn] = useState(false);
    const onTurn = () => setIsOn((s) => !s)

    return (
        <TurnOnOffContext.Provider value={{isOn, onTurn}} >{children}</TurnOnOffContext.Provider>
    )
}

const TurnedOn = ({ children }) => {
    const {isOn} = useContext(TurnOnOffContext)
    return (isOn ? children : null)
}
const TurnedOff = ({ children }) => {
    const {isOn} = useContext(TurnOnOffContext)
    return (isOn ? null : children)}
const TurnButton = ( {...props} ) => {
    const {isOn, onTurn} = useContext(TurnOnOffContext)
    return (
        <button onClick={onTurn} {...props}>
            Turn {isOn ? 'Off' : 'On'}
        </button>
    )
}

const P = ({ children }) => <p {...s}>{children}</p>

export const CompoundComponents = () => {
    return (
        <div>
            <h1>OI</h1>
        <TurnOnOff>
            <TurnedOn>
                <P>Aqui estão as coisas quando está ON</P>
            </TurnedOn>
            <TurnedOff>
                <P>E já aqui as coisas do OFF</P>
            </TurnedOff>
            <TurnButton {...s}/>
        </TurnOnOff>
        </div>
    )
}