export default function Logs({ turns }) {
    if (!turns) {
        return null;
    }
    return (<ol id="log">
        {turns.map((turn, turnIndex) => (
            <li key={turnIndex}>
                {turn.symbol} selected square {turn.row}, {turn.col}
            </li>
        ))}
    </ol>);
}