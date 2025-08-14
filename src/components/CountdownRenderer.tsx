import { Text } from 'react-native'

interface CountdownRendererInterface {
    hours: string,
    minutes: string,
    seconds: string,
    completed: boolean
}

export default function CountdownRenderer({ hours, minutes, seconds, completed }) {
    return (
        <>
            {completed ? (
                <Text>Hora de Beber Água!!</Text>
            ): <Text>Faltam {hours}:{minutes}:{seconds} para beber água</Text>
            }
        </>
        
    )
}