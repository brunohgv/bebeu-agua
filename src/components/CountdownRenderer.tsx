import { Text } from 'react-native'

interface CountdownRendererInterface {
    hours: number,
    minutes: number,
    seconds: number,
    completed: boolean
}

export default function CountdownRenderer({ hours, minutes, seconds, completed }: CountdownRendererInterface) {
    const formatter = Intl.NumberFormat('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
    })

    const h = formatter.format(hours)
    const m = formatter.format(minutes)
    const s = formatter.format(seconds)

    return (
        <>
            {completed ? (
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Hora de Beber Água!!</Text>
            ): <Text style={{ fontSize: 18 }}>Faltam {h}:{m}:{s} para beber água</Text>
            }
        </>
    )
}