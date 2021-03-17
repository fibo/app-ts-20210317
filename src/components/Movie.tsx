export interface MovieProps {
    title: string;
    year: number;
    description?: string;
}

export default function Movie({ title, year }: MovieProps) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{year}</p>
        </div>
    )
}
