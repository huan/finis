type FinisSignal   = 'exit' | 'SIGINT' | 'SIGTERM' | 'uncaughtException'
type FinisCallback = (code: number, signal: FinisSignal, error?: Error) => void

export declare function finis(cb?: FinisCallback): void
export default finis
